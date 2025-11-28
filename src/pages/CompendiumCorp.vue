<template>
  <div>
    <v-head><title>{{ title }}</title></v-head>

    <CompendiumPage>
      <template #custom-selector>
        <div class="select corp-switch">
          <select
            v-model="selectedCorporationId"
            @change="onCorporationChange"
          >
            <option
              v-for="corp in corporations"
              :key="corp.id"
              :value="corp.id"
            > {{ corp.name }}
            </option>
          </select>
          <!-- Debug info -->
          <div style="position: absolute; top: -35px; right: 0; font-size: 10px; color: yellow; line-height: 1.2;">
            Corps: {{ corporations.length }} | Selected: {{ selectedCorporationId }}<br>
            Roles: {{ data.roles?.length || 0 }} | Members: {{ data.members?.length || 0 }}
          </div>
        </div>
      </template>

      <div class="container">
        <div
          class="filter"
          :class="{'disable': filteredMembers.length > filteredByRoleCache.length}"
        >
          <div>
            <button
              v-t="'FILTER'"
              class="btn-tech-filter"
              @click="openSelectorByTech = true"
            />
          </div>
          <div class="select">
            <select
              v-model="filterRoleId"
              :disabled="!data.roles || data.roles.length === 0"
            >
              <option
                v-for="role in data.roles"
                :key="role.id"
                :value="role.id"
              > {{ role.name }}
              </option>
            </select>
          </div>
        </div>
        <ul
          class="members-list"
          :class="{'animated-fetch': isFetching}"
        >
          <li
            v-for="mem in filteredMembers"
            :key="mem.userId"
            class="member"
            @click="memberClick(mem)"
          >
            <div class="meta">
              <div class="avatar">
                <img
                  :src="mem.avatarUrl"
                  :alt="`${mem.name} avatar`"
                  @error="(e) => e.target.src = memberImage"
                ></div>
              <p>{{ mem.name }}</p>
            </div>
            <div class="sort-tech">
              <ul>
                <li
                  v-for="(elem, k) in getTechForDisplay(mem)"
                  :key="k"
                >
                  <div>
                    <Icon
                      :name="elem.icon.name"
                      :dir="elem.icon.dir"
                    />
                    <span
                      :k="k"
                      class="level"
                    >
                      {{ elem.level }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </CompendiumPage>

    <!--suppress TypeScriptUnresolvedReference -->
    <Modal
      v-model:open="openSelectorByTech"
      :title="$t('FILTER')"
      :size="SIZES.LARGE"
    >
      <template #body>
        <div class="modal-filter-tech">
          <button
            class="button accent"
            @click="filterTech.splice(0)"
          >{{ $t('RESET_ALL') }}</button>

          <div class="sections-group other">
            <section
              class="type"
              name="user-info"
            >
              <h3 v-t="'TID_OBJECT_ACTION_PLAYER_INFO'" />
              <ul>
                <li
                  v-for="({icon}, key) of userInfo"
                  :key="key"
                  class="item"
                >
                  <div
                    :class="{'mute': isSelectedTechItem(key)}"
                    @click="() => techItemClick({Name: key})"
                  >
                    <Icon
                      :name="icon.name"
                      :dir="icon.dir"
                    />
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <TechList
            :on-click="techItemClick"
            :is-muted="isSelectedTechItem"
          />
        </div>
      </template>
    </Modal>

    <!--suppress TypeScriptUnresolvedReference -->
    <Modal
      v-model:open="openMemTechList"
      :title="modalMem.title"
      :size="SIZES.LARGE"
    >
      <template #body>
        <TechList
          :level-map="modalMem.lvlMap"
        />
      </template>
    </Modal>

  </div>
</template>

<!--suppress TypeScriptCheckImport, TypeScriptUnresolvedReference -->
<script setup lang="ts">
import { CorpData, CorpMember, getTechIndex, Corporation, UserCorporations } from 'bot_client2';
import { onMounted, reactive, Ref, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

import client from '../utils/compendium';
import types from '@/store/modules/userSettings/types';

import { Head as VHead } from '@vueuse/head';
import Modal, { SIZES } from '@/components/Modal.vue';
import Icon from '@/components/Icon.vue';
import TechList from '@/components/TechList.vue';
import CompendiumPage from '../components/CompendiumPage.vue';

import memberImage from '@Img/icons/member.png';
import shipsData from '@Data/capital_ships.js';
import spaceBuildingsData from '@Data/spacebuildings.js';
import modulesData from '@Data/modules.js';
import objectArrayify from '../utils/objectArrayify';
import { getTechFromIndex } from 'bot_client2/src/module_types';


const DISPLAY_USER_TECH_ITEMS = 5;
const MAX_ITEMS_PAGE = 100;

interface UserInfo {
  [k: string]: {
    icon: Icon.Props,
    formatter: (user: CorpMember) => string|number
  }
}

const store = useStore();
const { t } = useI18n();
const title = t('HS_COMPENDIUM');
const hourCycles = new Intl.Locale(navigator.language)?.hourCycles;
const isBrowserLocale24h = hourCycles ? ['h23', 'h24'].some((hourCycle) => hourCycles.includes(hourCycle)) : true;

const userInfo: UserInfo = {
    LocalTime: {
        icon: { name: 'time', dir: 'icons/compendium' },
        formatter: ({ localTime, localTime24 }) => isBrowserLocale24h ? localTime24 : localTime,
    },
    AfkFor: {
        icon: { name: 'afk', dir: 'icons/compendium' },
        formatter: ({ afkFor }) => afkFor,
    },
    CargoCap: {
        icon: { name: 'cargo', dir: 'icons/compendium' },
        formatter: ({ tech }) => {
            let result = 0;

            const [t] = tech[getTechIndex('Transport')] || [];
            const [cap] = tech[getTechIndex('TransportCapacity')] || [];
            const [drone] = tech[getTechIndex('RelicDrone')] || [];

            if (t && cap) {
                result += shipsData.Transport.JobCapacity[t - 1] + modulesData.TransportCapacity.ExtraTradeSlots[cap - 1];
            }
            if (drone) {
                result += modulesData.RelicDrone.drone.JobCapacity[drone - 1];
            }
            return result;
        },
    },
} as UserInfo;
const isFetching = ref(false);
const openSelectorByTech = ref(false);
const openMemTechList = ref(false);
const filterRoleId = ref<string>(store.state.userSettings.compendiumCorpLastRoleId);
const filterTech = reactive<string[]>([]);
const data: Ref<CorpData> = ref({});
const filteredMembers: Ref<CorpMember[]> = ref([]);
const corporations: Ref<Corporation[]> = ref([]);
const selectedCorporationId = ref<string>('');
const modalMem = reactive({
    title: '',
    lvlMap: undefined,
});

let filteredByRoleCache: CorpMember[] = [];

filteredMembers.value = Array.from({ length: 10 }, (i) => ({ userId: i, name: '', avatarUrl: '' }) as CorpMember);

client.value.on('connected', async () => {
    console.log('🔗 Client connected, loading corporations...');

    await loadCorporations();
    if (selectedCorporationId.value) {
        await fetchCorpForCorporation();
    }
});
client.value.on('disconnected', () => {
    filteredByRoleCache = [];
    filteredMembers.value = Array.from({ length: 10 }, (i) => ({ userId: i, name: '', avatarUrl: '' }) as CorpMember);
    filterRoleId.value = '';
    filterTech.splice(0);
    corporations.value = [];
    selectedCorporationId.value = '';
    store.commit(types.SET_COMPENDIUM_CORP_LAST_ROLE_ID);
});
onMounted(async () => {
    if (client.value.getUser()) {
        console.log('📱 Component mounted, loading corporations...');
        await loadCorporations();
        if (selectedCorporationId.value) {
            await fetchCorpForCorporation();
        }
    }
});

watch(filterRoleId, async (value) => {
    console.log('🔍 Role filter changed to:', value, '(type:', typeof value, 'length:', value?.length + ')');
    store.commit(types.SET_COMPENDIUM_CORP_LAST_ROLE_ID, value);

    // При выборе роли делаем запрос с corpId И roleId
    if (selectedCorporationId.value) {
        // Проверяем, является ли выбранная роль "@everyone" (означает все роли)
        const selectedRole = data.value.roles?.find(role => role.id === value);
        const isEveryoneRole = selectedRole?.name === '@everyone';
        const roleIdToSend = isEveryoneRole ? null : value; // Для @everyone не передаем roleId

        console.log('📡 [ROLE FILTER REQUEST] corpId:', selectedCorporationId.value, 'roleId:', roleIdToSend, '(selected role:', selectedRole?.name + ')');

        isFetching.value = true;
        try {
            const resp = await client.value.corpdata({
                corpId: selectedCorporationId.value, // Передаем corpId выбранной корпорации
                roleId: roleIdToSend
            });
            console.log('📥 [ROLE FILTER RESPONSE] Filtered data received:', resp);
            // Обновляем только участников, роли остаются от корпорации
            filteredByRoleCache = resp.members;
            filteredMembers.value = filteredByRoleCache.slice(0, MAX_ITEMS_PAGE);

            // Если выбрана роль @everyone, сбрасываем выбор (визуально показываем все роли)
            if (isEveryoneRole) {
                filterRoleId.value = '';
                console.log('🔄 @everyone role selected, resetting filter to show all roles');
            }

            // Не обновляем data.value.roles, чтобы сохранить роли корпорации
        } catch (error) {
            console.error('❌ Error fetching role-filtered data:', error);
        }
        isFetching.value = false;
    }

    filterByTech(filterTech);
});
watch(() => filterTech, filterByTech, { deep: true });


async function loadCorporations() {
    try {
        console.log('🔄 Loading corporations...');
        console.log('Client connected:', !!client.value.getUser());
        const userCorps: UserCorporations = await client.value.getUserCorporations();
        console.log('✅ Corporations loaded:', userCorps.corporations);
        console.log('User info:', userCorps.user);
        corporations.value = userCorps.corporations;

        // Автоматически выбираем корпорацию, соответствующую текущей гильдии
        if (corporations.value.length > 0 && !selectedCorporationId.value) {
            // Ждем немного, чтобы guild успел установиться в CompendiumPage
            await new Promise(resolve => setTimeout(resolve, 200));

            const guild = client.value.getGuild();
            console.log('🏰 Current guild:', guild);

            if (guild) {
                // Ищем корпорацию по ID гильдии или по имени
                const matchingCorp = corporations.value.find(corp =>
                    corp.id === guild.id || corp.name === guild.name
                );

                if (matchingCorp) {
                    selectedCorporationId.value = matchingCorp.id;
                    console.log('🎯 Auto-selected corporation based on guild:', matchingCorp.name, '(id:', matchingCorp.id + ')');
                } else {
                    // Если не нашли совпадение, выбираем первую корпорацию
                    selectedCorporationId.value = corporations.value[0].id;
                    console.log('⚠️ Guild found but no matching corporation, selected first:', corporations.value[0].name);
                }
            } else {
                // Если нет гильдии, выбираем первую корпорацию
                selectedCorporationId.value = corporations.value[0].id;
                console.log('⚠️ No guild available, selected first corporation:', corporations.value[0].name);
            }
        } else if (corporations.value.length === 0) {
            console.warn('⚠️ No corporations found for user');
        }
    } catch (error) {
        console.error('❌ Error loading corporations:', error);
        console.error('Error details:', error.message, error.stack);
        corporations.value = [];
    }
}

async function onCorporationChange() {
    console.log('🏢 Corporation changed to:', selectedCorporationId.value);
    console.log('Available corporations:', corporations.value.map(c => `${c.id}: ${c.name}`));

    // При смене корпорации сбрасываем фильтр роли и получаем данные новой корпорации
    // Важно: сначала сбрасываем фильтр, затем делаем запрос
    filterRoleId.value = '';
    store.commit(types.SET_COMPENDIUM_CORP_LAST_ROLE_ID, '');
    await fetchCorpForCorporation();
}

async function fetchCorpForCorporation() {
    if (!selectedCorporationId.value) {
        console.log('⏭️ No corporation selected, skipping fetch');
        return;
    }

    console.log('📡 [CORPORATION REQUEST] Fetching data with corpId:', selectedCorporationId.value, 'and roleId: null');
    isFetching.value = true;
    try {
        // Запрос с corpId для получения всех данных корпорации
        const resp = await client.value.corpdata({
            corpId: selectedCorporationId.value,
            roleId: null
        });
        console.log('📥 [CORPORATION RESPONSE] Data received for corporation:', selectedCorporationId.value);
        console.log('Roles:', resp.roles);
        console.log('Members count:', resp.members.length);
        data.value = resp;
        filteredByRoleCache = resp.members;
        filteredMembers.value = resp.members.slice(0, MAX_ITEMS_PAGE);
    } catch (error) {
        console.error('❌ Error fetching corporation data:', error);
        filteredByRoleCache = [];
        filteredMembers.value = [];
    }
    isFetching.value = false;
}

async function fetchCorp() {
    // Эта функция больше не используется, оставлена для совместимости
    console.log('⚠️ fetchCorp() called - this function is deprecated');
    await fetchCorpForCorporation();
}
async function techItemClick(item: object) {
    if (isSelectedTechItem(item.Name)) {
        filterTech.splice(filterTech.indexOf(item.Name), 1);
    } else {
        filterTech.push(item.Name);
    }
}
function isSelectedTechItem(id: string) {
    return filterTech.includes(id);
}
function memberClick(mem: CorpMember) {
    if (filteredByRoleCache.length) {
        modalMem.title = mem.name;
        // noinspection TypeScriptValidateTypes
        modalMem.lvlMap = objectArrayify(mem.tech, {
            map: ([k, v]) => [getTechFromIndex(k), v[0]],
        });
        openMemTechList.value = true;
    }
}
function filterByTech(value: string[]) {
    filteredMembers.value = filteredByRoleCache
        .sort((a, b) => {
            if (value.length && !(value[0] in userInfo)) {
                return (b.tech[getTechIndex(value[0])]?.[0] || 0) - (a.tech[getTechIndex(value[0])]?.[0] || 0);
            }
            if (value[0] == 'CargoCap') {
                return (userInfo.CargoCap.formatter(b) as number) - (userInfo.CargoCap.formatter(a) as number);
            }
            return 0;
        })
        .slice(0, MAX_ITEMS_PAGE);
}
function getTechForDisplay(member: CorpMember): Record<string, {level: number|string, icon :Icon.Props}> {
    if (!filterTech.length) {
        return {};
    }
    const result = {};

    const levels = Object.fromEntries(
        filterTech
            .map((k) => {
                if (k in userInfo) {
                    return [k, userInfo[k].formatter(member)];
                }
                return [k, member.tech[getTechIndex(k)]?.[0]];
            })
            .slice(DISPLAY_USER_TECH_ITEMS * -1),
    );

    // eslint-disable-next-line guard-for-in
    for (const key in levels) {
        const val = result[key] = {
            icon: { dir: '', name: '' } as Icon.Props,
            level: levels[key],
        };

        if (key in modulesData) {
            val.icon.dir = 'game/Modules';
            val.icon.name = modulesData[key].Icon;
        } else if (key in shipsData) {
            val.icon.dir = 'game/Ships';
            val.icon.name = shipsData[key].Model[5]; // eslint-disable-line prefer-destructuring
        } else if (key in userInfo) {
            val.icon = userInfo[key].icon;
        } else {
            val.icon.dir = 'game/SpaceBuildings';
            val.icon.name = spaceBuildingsData[key].PrefabModel;
        }
    }
    return result;
}
</script>

<style scoped lang="scss">
@import "../style/vars";
@import "../style/userInput";
@import "../style/techList";
@import "../style/page";

:deep(.corp-switch) {
  width: 110%;
  margin-left: auto;
}

.container {
    max-width: 680px;
    margin: 2% auto 0;
}

.modal-filter-tech {
    .button {
        margin-bottom: 1%;

        @media screen and (max-width: 600px){
            font-size: 70%;
        }
    }
    :deep(.other) {
        section[name="alliance"] {
            display: none;
        }
    }
    :deep(.item .mute) {
        border: solid 2px #a8ddfd;
        padding: 2px;
        border-radius: 10px;
    }
}

.filter {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
    gap: 5%;

    .btn-tech-filter {
        font-size: 130%;
        background-color: $background-elements;
        border-color: $border-color;
        border-style: solid;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;

        &:hover {
            background-color: #32474d;
        }
    }

    .select {
        select {
            background-color: $background-elements;
            border: solid 2px $border-color;
            border-radius: 5px;
            padding: 5px 10px;
            color: $text-color;
            font-size: 14px;
            min-width: 150px;

            &:focus {
                outline: none;
                border-color: #4a9eff;
            }
        }
    }
}

.members-list {
    margin-top: 2%;
    padding: 0 2%;

    .member {
        list-style: none;
        background-color: $background-elements;
        margin: 1% 0;
        padding: 2%;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        &:hover {
            background-color: #27353a;
        }

        .meta {
            display: flex;
            align-items: center;
            flex: 2;

            p {
                margin-left: 15px;
            }

            .avatar {
                width: 40px;
                height: 40px;

                img {
                    width: 100%;

                    &:before  {
                        width: 100%;
                        height: 100%;
                        content: "";
                        background: url("@Img/icons/member.png") center 100% no-repeat;
                    }
                }
            }
        }

        .sort-tech ul {
            flex: 3;
            display: flex;
            justify-content: center;

            li {
                list-style: none;
                width: 50px;
                margin: 0 5px;
                cursor: pointer;
                position: relative;

                @media screen and (max-width: 960px){
                    width: 30px;
                }
                @media screen and (max-width: 350px){
                    width: 25px;
                }

                .level {
                    position: absolute;
                    top: 60%;
                    right: 0;
                    font-size: 80%;
                    width: 15px;
                    height: 15px;
                    background-color: $border-color;
                    color: $background;
                    text-align: center;
                    border-radius: 5px;
                    padding-top: 2px;
                    white-space: nowrap;
                }

                & [k="LocalTime"], & [k="AfkFor"] {
                    width: 50px;
                    right: -8px;

                    @media screen and (max-width: 960px){
                        width: 40px;
                        font-size: 65%;
                    }
                }
                & [k="AfkFor"] {
                    font-size: 60%;

                    @media screen and (max-width: 960px){
                        font-size: 50%;
                    }
                }
            }
        }
    }
}

.animated-fetch {
    .member {
        background: linear-gradient(to left, $background, $background-elements 18%, $background);
        background-size: 50vw;
        animation: bg-pos-move 10s infinite forwards linear;
        opacity: .8;
        pointer-events: none;
    }
}

@keyframes bg-pos-move {
    to { background-position: 1000% 0; }
}
</style>

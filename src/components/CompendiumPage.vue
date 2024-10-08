<template>
  <div>

    <div class="header">
      <div class="content">
        <div>
          <div
            v-if="user?.alts?.length"
            class="select alt-switch"
          >
            <select
              :value="client.selectedAlt"
              @change="selectUserAlt($event.target.value)"
            >
              <option value="default">{{ user?.username }}</option>
              <option
                v-for="(alt, index) in user?.alts"
                :key="index"
                :value="alt"
              >
                {{ alt }}
              </option>
            </select>
          </div>
        </div>
        <div
          v-if="isFetching && !user"
          class="logged fetching"
        >
          <div class="avatar">
            <img
              :src="memberImage"
              alt="memberImage avatar"
            >
            <img
              :src="memberImage"
              alt="memberImage avatar"
            >
          </div>
          <p />
        </div>
        <div
          v-if="user"
          class="logged"
          @click="userProfileClick"
        >
          <div class="avatar">
            <img
              :src="guild!.url"
              :alt="`${guild!.name} icon`"
              @error="(e) => e.target.src = memberImage"
            >
            <img
              :src="user.avatarUrl"
              :alt="`${user.username} avatar`"
              @error="(e) => e.target.src = memberImage"
            >
          </div>
          <div>
            <p>{{ guild.name }}</p>
            <p>{{ user.username }}</p>
          </div>
        </div>
        <div
          v-if="!isFetching && !user"
          class="not-logged"
        >
          <span v-t="'TID_SETTINGS_DLG_NOT_SIGNED_IN'" />
          <button
            class="button accent"
            @click="openCodeReqModal = true"
          > {{ $t('TID_SETTINGS_DLG_SIGN_IN') }}
          </button>
        </div>
      </div>
    </div>

    <slot />

    <div class="footer">
      <div class="content">
        <p>Powered by <a
          :href="linkUrl"
          target="_blank"
        >HS Compendium</a></p>
      </div>
    </div>

    <Modal
      v-model:open="openCodeReqModal"
      :title="$t('TID_SETTINGS_DLG_SIGN_IN')"
      :size="SIZES.SMALL"
    >
      <template #body>
        <div class="input">
          <p class="name">
            <span v-t="'ENTER_CODE'" />
            <span class="error-msg">{{ error }}</span>
          </p>
          <input v-model="reqCode">
        </div>

        <a
          :href="linkUrl"
          target="_blank"
        >{{ linkText }}</a>

        <div class="select switch-client">
          <select
            v-model="defaultSwitchClient"
            @change="selectClient($event.target.value)"
          >
            <option :value="0">Default client</option>
            <option :value="1">Client from Mentalisit</option>
          </select>
        </div>


        <div
          class="code-req-btn-wrap"
          :class="{'disable': isFetching}"
        >
          <button
            v-t="'TID_LINK_DEVICE_DLG_SUBMIT_CODE_BTN'"
            class="button accent"
            @click="applyReqCode"
          />
        </div>
      </template>
    </Modal>
  </div>
</template>

<!--suppress TypeScriptCheckImport -->
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Guild, Identity, User } from 'bot_client';
import { Guild as Guild2, Identity as Identity2, User as User2, Compendium as Client2 } from 'bot_client2';

import client, { init as clientInit, switchInstance } from '@Utils/compendium';
import memberImage from '@Img/icons/member.png';
import types from '@/store/types';
import types2 from '@/store/modules/userSettings/types';
import Modal, { SIZES } from '@/components/Modal.vue';

// ex: Y3cf-Hymz-v2Qs
const REQ_CODE_PATTERN = /[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}/;

const store = useStore();
const router = useRouter();
const { t } = useI18n();
const openCodeReqModal = ref(false);
const reqCode = ref('');
const error = ref('');
const isFetching = ref(false);
const user = ref<User|User2|null>();
const guild = ref<Guild|Guild2>();
const defaultSwitchClient = ref(localStorage.getItem('compendium_client') ? parseInt(localStorage.getItem('compendium_client'), 10) : 0);
const linkUrl = computed(() =>
    defaultSwitchClient.value === 0 ? 'https://hs-compendium.com/' : 'https://compendiumnew.mentalisit.myds.me/links'
);
const linkText = computed(() => defaultSwitchClient.value === 0 ? 'HS Compendium' : 'invite');

onMounted(async () => {
    isFetching.value = true;
    await clientInit();
    if ('secretToken' in router.currentRoute.value.query) {
        const i: Identity2 = {
            token: router.currentRoute.value.query.secretToken as string,
            guild: { url: '', id: '', name: '', icon: '' },
        };
        defaultSwitchClient.value = 1;
        selectClient(1);
        await client.value.connect(i);
    }
    const u = client.value.getUser();
    isFetching.value = false;

    if (!u) {
        openCodeReqModal.value = true;

        if ('client' in router.currentRoute.value.query) {
            defaultSwitchClient.value = parseInt(router.currentRoute.value.query.client as string, 10);
            selectClient(parseInt(router.currentRoute.value.query.client as string, 10));
        }
        if ('lang' in router.currentRoute.value.query) {
            store.commit(types2.SET_LANGUAGE, router.currentRoute.value.query.lang as string);
        }
        if ('c' in router.currentRoute.value.query) {
            reqCode.value = router.currentRoute.value.query.c as string;
            await applyReqCode();
        }
    } else {
        user.value = u;
        guild.value = client.value.getGuild();
    }
});

async function applyReqCode() {
    let ident: Identity|Identity2;

    if (!reqCode.value) {
        error.value = t('CANNOT_BE_EMPTY');
        return;
    }
    if (!REQ_CODE_PATTERN.test(reqCode.value)) {
        error.value = t('INCORRECT_CODE');
        return;
    }
    isFetching.value = true;

    try {
        ident = await client.value.checkConnectCode(reqCode.value);
        if (ident.user.discriminator == 'original') {
            defaultSwitchClient.value = 0;
            selectClient(0);
        }
    } catch (e: unknown) {
        error.value = (e as Error).toString();
        console.error(e);
        isFetching.value = false;
        return;
    }

    isFetching.value = false;
    openCodeReqModal.value = false;

    const drop = await store.dispatch(types.OPEN_CONFIRM, t('CONFIRM_LOGIN', [ident.guild.name, ident.user.username]))
        .catch(() => {
            openCodeReqModal.value = true;
            return true;
        });

    if (!drop) {
        isFetching.value = true;
        await client.value.connect(ident);
        user.value = client.value.getUser();
        guild.value = client.value.getGuild();
        isFetching.value = false;
    }
}
function selectUserAlt(value: string) {
    (client.value as Client2).switchAlt(value);
}

function selectClient(value: number) {
    isFetching.value = true;
    switchInstance(value).then(() => {
        isFetching.value = false;
    });
}
function userProfileClick() {
    store.dispatch(types.OPEN_CONFIRM, t('TID_SETTINGS_DLG_SIGN_OUT'))
        .then(() => {
            client.value.logout();
            user.value = undefined;
            guild.value = undefined;
        })
        .catch(() => {}); // eslint-disable-line @typescript-eslint/no-empty-function
}
</script>


<style scoped lang="scss">
@import "../style/userInput";

.header {
  margin-top: 1%;

  @media screen and (max-width: 1000px){
    margin-top: 2%;
  }

  .content {
    margin: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .alt-switch {
      width: 110%;
    }


    @media screen and (max-width: 1000px){
      margin: 0 1%;
    }

    .logged, .not-logged {
      display: flex;
      align-items: center;
      padding: 0.5% 2% 0.5% 18px;
      min-width: 15%;
      border-radius: 10px;
    }

    .fetching {
      background: linear-gradient(to left, $background, $background-elements 18%, $background);
      background-size: 40vw;
      animation: bg-pos-move 5s infinite forwards linear;
      opacity: .8;
      pointer-events: none;

      p {
        border: solid 5px #8a9396;
        width: 130px;
        border-radius: 10px;
      }
    }

    .logged {
      border: solid 2px $background-elements;

      &:hover {
        background-color: $background-elements;
        cursor: pointer;
      }
      .avatar {
        height: 60px;
        width: 60px;
        margin-right: 20px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
          position: absolute;

          &:before  {
            content: "";
            background: url("@Img/icons/member.png") center 100% no-repeat;
          }
          &:first-child {
            bottom: 10%;
            right: 20%;
            opacity: .8;
          }
          &:last-child {
            filter: drop-shadow(-5px -5px 4px #000000);
            width: 90%;
            height: 90%;
            top: 20%;
            left: 30%;
          }
        }

        @media screen and (max-width: 900px) {
          height: 40px;
          width: 40px;
        }
      }
    }
    .not-logged {
      background-color: #b94054;
      justify-content: space-between;
      padding-left: 10px;

      span {
        font-size: 120%;
        width: max-content;
        word-break: keep-all;
      };
      .button {
        margin-left: 10px;
      }
    }
  }
}
.footer {
  .content {
    max-width: max-content;
    margin: 0 auto;

    p {
      padding: 10px;
      text-align: center;
    }
  }
}
.code-req-btn-wrap {
  display: flex;
  justify-content: end;
}
.error-msg {
  font-size: 65%;
  color: red;
  margin-left: 10px;
  font-style: italic;
}
.switch-client {
  padding-top: 4%;
  font-size: 80%;
}

@keyframes bg-pos-move {
  to { background-position: 1000% 0; }
}
</style>

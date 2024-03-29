<template>
  <Page
    :title-loc-key="locKey"
    :content-args="{data, iconDir: 'game/Modules', tableOpts}"
    :portrait="{src: img, alt: `${type} modules portrait`}"
  />
</template>

<!--suppress TypeScriptUnresolvedReference -->
<script lang="ts">
import globals from '@Data/globals.js';
import modulesData from '@Data/modules.js';
import objectArrayify from '@Utils/objectArrayify';

const { MaxModuleLevel } = globals;
const sortByAwardLevel = objectArrayify(modulesData, {
    filter: ([, v]) => !v.Hide,
    sort: (([, a], [, b]) => a.RSLevel - b.RSLevel),
});

const getBySlotType = (SlotType: string) => objectArrayify(sortByAwardLevel, {
    filter: ([, v]) => v.SlotType === SlotType,
});
function tableOptsGetter() {
    const maxModulesLvl = new Map();

    return {
        get colLvlStartAt() {
            if (this?.data?.body) {
                const matrixKey = (this.data.body.default) ? 'default' : Object.keys(this.data.body)[0];
                const k = this.data.body[matrixKey];

                if (!maxModulesLvl.has(k)) {
                    maxModulesLvl.set(k, 0);
                }

                const maxLvl = maxModulesLvl.get(k);
                if (maxLvl < 1) {
                    let max = 0;
                    for (const e of this.data.body[matrixKey]) {
                        max = (max < e.length) ? e.length - 1 : max;
                    }
                    maxModulesLvl.set(k, max);
                    return MaxModuleLevel - max;
                }
                return MaxModuleLevel - maxLvl;
            }
            return 1;
        },
    } as Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
function getModulesMinLvl(module: object): number {
    let maxLength = 1;

    for (const [, value] of Object.entries(module)) {
        if (Array.isArray(value) && value.length > maxLength) {
            maxLength = value.length;
        }
    }
    return MaxModuleLevel - maxLength + 1;
}
export default { name: 'ModulePage' };
export {
    getBySlotType,
    getModulesMinLvl,
    tableOptsGetter as tableOpts,
};
</script>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-var-requires */
import { computed } from 'vue';

import Page from '@/components/Page.vue';

export interface Props {
    type: string
    portrait: string
    postFilter?: <T extends object>(e: T) => T
}

const props = withDefaults(defineProps<Props>(), {
    postFilter: (e) => e,
});
const data = props.postFilter(getBySlotType(props.type));
const img = new URL(`../img/game/portraits/${props.portrait}`, import.meta.url).href;
const locKey = `TYPE_MOD_${(props.type == 'Support' ? 'COMBAT' : props.type).toUpperCase()}`;
const tableOpts = computed(tableOptsGetter);
</script>

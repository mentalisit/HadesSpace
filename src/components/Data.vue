<template>
  <div class="container">

    <v-title
      :args="title"
      :icon-dir="iconDir"
    />

    <v-table
      v-if="table != null"

      :data="table"
      :merge-cells="!!tableOpts.mergeCells"
      :col-lvl-start-at="tableOpts.colLvlStartAt"
      :lvl-col-key="tableOpts.lvlColKey"
    >
      <!--  eslint-disable vue/max-attributes-per-line      -->
      <template #head="p"><slot name="table-head" v-bind="p" /></template>
      <template #body="p"><slot name="table-body" v-bind="p" /></template>
    </v-table>

  </div>
</template>

<script>
import VTable from './DataTable.vue';
import VTitle from './DataHead.vue';

export default {
    name: 'Data',
    components: { VTable, VTitle },
    props: {
        data: {
            type: Object,
            default: () => ({}),
            request: true,
        },
        tableOpts: {
            type: Object,
            default: () => ({}),
            request: false,
        },
        iconDir: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            table: {
                head: {},
                body: {},
            },
            title: {},
        };
    },
    computed: {
    },
    created() {
        this.generateTable(this.data);
    },
    methods: {
        generateTable(obj, category = 'default') {
            const { table: { head, body }, title } = this;

            Object.entries(obj).forEach(([key, value]) => {
                if (value.constructor === Object) {
                    this.generateTable(value, key);
                } else if (Array.isArray(value)) {
                    if (Array.isArray(head[category])) {
                        head[category].push(key);
                        body[category].push(value);
                    } else {
                        head[category] = [key];
                        body[category] = [value];
                    }
                } else {
                    if (!title[category]) {
                        title[category] = {};
                    }
                    title[category][key] = value;
                }
            });
            if (category === 'default' && Object.keys(head).length === 0) {
                this.table = null;
            }
        },
    },
};
</script>
<style scoped lang="scss">
.container {
  margin: 5% 3% 5% 3%;
}
@media screen and (max-width: 900px) {
  .container {
    margin: 0 3% 5% 3%;
  }
}
</style>
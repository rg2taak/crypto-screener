<template lang="pug">
.panel
    check-list-item(
        v-for="item in value",
        :key="item.code",
        :value="item",
        @on-select="onItemSelect"
    )
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import CheckListItem from "@FE/Components/global/check-list-item.vue";
import { CheckListItemType } from "@Lib/types/frontend/global/check-list-item-type";
import { RecordPropsDefinition } from "vue/types/options";
import { PropOptions } from "vue/types/umd";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * PropsDataType
 */
type PropsDataType = RecordPropsDefinition<{
    value: CheckListItemType[];
}>;

/**
 * Register
 */
export default Vue.extend({
    name: "CheckList",

    components: {
        CheckListItem,
    },

    props: {
        value: {
            type: Array,
            dafault: () => [] as Array<CheckListItemType>,
        } as PropOptions,
    } as PropsDataType,

    methods: {
        /**
         * Set Selected Item
         */
        async onItemSelect(item: any): Promise<void> {
            const itemData: CheckListItemType = item.data as CheckListItemType;

            this.$emit("on-item-select", {
                sender: this,
                data: itemData,
            });
        },
    },
});
</script>
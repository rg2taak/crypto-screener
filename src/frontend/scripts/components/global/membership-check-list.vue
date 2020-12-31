<template lang="pug">
.dashboard-container
    .dashbord-content-head
        .columns
            h2
                span.title
                    | ارزهای دیجیتال
        .columns.is-justify-content-space-between.is-align-items-end
            .column
                h2.form-title
                    | اسکرینر
            .column
                a.is-pulled-left.has-text-grey(
                    href="#",
                    v-show="isActiveCheckListItem",
                    @click.prevent="returnBack"
                )
                    i.fas.fa-arrow-left

    .dashboard-content-body.is-multiline.columns.is-centered(
        v-show="isActiveCheckListItem"
    )
        component(:is="currentComponent", @on-back-click="returnBack")

    .dashboard-content-body.is-multiline.columns.is-centered(
        v-show="isActiveCheckList"
    )
        .column.is-8
            check-list-component(
                :value="checkListItem",
                @on-item-select="onChecklistItemSelect"
            )
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import EngineerMembershipCheckListStore, {
    EngineerMembershipCheckListStoreActions,
} from "@FE/Scripts/stores/engineer-membership/engineer-membership-check-list-store";
import CheckListComponent from "@FE/Components/global/check-list.vue";
import CryptoScreenerListComponent from "@FE/Components/trading-view/crypto-screener.vue";
import { CheckListItemType } from "@Lib/types/frontend/global/check-list-item-type";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Register
 */
export default Vue.extend({
    name: "MembershipCheckList",

    store: EngineerMembershipCheckListStore,

    components: {
        CheckListComponent,
        CryptoScreenerListComponent,
    },

    data: () => ({
        currentComponent: "",
        formMode: undefined,
    }),

    computed: {
        checkListItem(): Array<CheckListItemType> {
            return this.$store.getters.membershipCheckList;
        },

        isActiveCheckList(): Boolean {
            return FormModesEnum.CHECK_LIST == this.formMode;
        },

        isActiveCheckListItem(): Boolean {
            return FormModesEnum.CHECK_LIST_ITEM == this.formMode;
        },
    },

    /**
     * Created
     */
    async created() {
        this.setFormModeChecklist();

        await this.loadcheckListItem();
    },

    methods: {
        /**
         * On Checklist item select
         */
        onChecklistItemSelect(data: any) {
            const item: CheckListItemType = data.data as CheckListItemType;
            Vue.set(this, "currentComponent", item.code);

            this.setFormModeChecklistItem();
        },

        /**
         * Load check list item
         */
        async loadcheckListItem(): Promise<void> {
            await this.$store.dispatch(
                EngineerMembershipCheckListStoreActions.loadMembershipCheckList
            );
        },

        /**
         * Selected Item
         */
        async selectedItem(data: any): Promise<void> {
            const item: CheckListItemType = data.data as CheckListItemType;
        },

        /**
         * Set form mode to check list
         */
        setFormModeChecklist() {
            Vue.set(this, "formMode", FormModesEnum.CHECK_LIST);
        },

        /**
         * Set form mode to check list item
         */
        setFormModeChecklistItem() {
            Vue.set(this, "formMode", FormModesEnum.CHECK_LIST_ITEM);
        },

        /**
         * Return Back
         */
        async returnBack(): Promise<void> {
            this.setFormModeChecklist();
        },
    },
});
</script>

<style scoped lang="scss">
.form-title {
    margin-top: 20px !important;
    font-size: 20px;
}
</style>

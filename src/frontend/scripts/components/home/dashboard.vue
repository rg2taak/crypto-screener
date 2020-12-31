<template lang="pug">
.container-dashboard
    .columns
        .column.is-1.mt-4.sidebar-first
            .sidebar-top
                .dashboard-item.apps.mb-4
                    a(href="#")
                .dashboard-item.logo.mb-4
                    a(href="/")
                .dashboard-item
                    i.far.fa-bell
                .dashboard-item
                    i.fas.fa-inbox
            .sidebar-bottom
                .dashboard-item
                    .is-centered.nav-user-container-icon
                .dashboard-item
                    i.fas.fa-cog
                .dashboard-item
                    a(href="/logout")
                        i.fas.fa-sign-out-alt

        .column.is-1.mt-4.sidebar-second
            b-collapse(
                animation="slide",
                key="0",
                :open="isOpen == 0",
                @open="isOpen = 0"
            )
                .card-header(slot="trigger", slot-scope="props", role="button")
                    p.card-header-title
                        | ارزهای دیجیتال
                    a.card-header-icon
                        b-icon(:icon="props.open ? 'caret-down' : 'caret-up'")
                .card-content
                    .content
                        .dashboard-item
                            a(
                                href="#",
                                @click.prevent="setFormModeengineerMembership",
                                :class="{ active: isActiveEngineerMembership }"
                            )
                                | وضعیت

            b-collapse(
                animation="slide",
                key="1",
                :open="isOpen == 1",
                @open="isOpen = 1"
            )
                .card-header(slot="trigger", slot-scope="props", role="button")
                    p.card-header-title
                        | تست
                    a.card-header-icon
                        b-icon(:icon="props.open ? 'caret-down' : 'caret-up'")
                .card-content
                    .content
                        .dashboard-item
                            a(
                                href="#",
                                @click.prevent="setFormModeOwnerMembership",
                                :class="{ active: isActiveOwnerMembership }"
                            )
                                | تست

        .column.is-10.dashboard-contents(v-if="isActiveEngineerMembership")
            //- resume-component
            //- identification-information
            //- educations-information
            //- membership-check-list-component
            crypto-screener-list-component
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import Helper from "@Core/Helpers/frontend-global-helper";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import CryptoScreenerListComponent from "@FE/Components/trading-view/crypto-screener.vue";

/**
 * Dashboard type
 */
export type DashboardDataType = {
    name?: string;
    isOpen?: string;
    formMode?: string;
};

/**
 * Vue instance
 */
export default Vue.extend({
    name: "Dashboard",

    props: {
        title: {
            type: String,
            default: () => "",
        },
    },

    components: {
        CryptoScreenerListComponent,
    },

    computed: {
        isActiveEngineerMembership(): Boolean {
            return FormModesEnum.ENGINEER_MEMBERSHIP == this.formMode;
        },

        isActiveOwnerMembership(): Boolean {
            return FormModesEnum.OWNER_MEMBERSHIP == this.formMode;
        },
    },

    data: (): DashboardDataType =>
        ({
            isOpen: "",
            formMode: undefined,
        } as DashboardDataType),

    methods: {
        /**
         * set form mode to Engineer
         */
        setFormModeengineerMembership() {
            Vue.set(this, "formMode", FormModesEnum.ENGINEER_MEMBERSHIP);
        },

        /**
         * set form mode to owner
         */
        setFormModeOwnerMembership() {
            Vue.set(this, "formMode", FormModesEnum.OWNER_MEMBERSHIP);
        },
    },
});
</script>

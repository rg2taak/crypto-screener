<template lang="pug">
.register-container
    .container(v-show="isLoadingMode")
        loading
    .container(v-show="! isLoadingMode")
        .buttons
            b-button.is-primary.is-rounded(
                v-show="isListMode",
                @click.prevent="addForm"
            )
                i.fas.fa-plus افزودن
    .container(v-show="! isLoadingMode")
        b-modal.medium-modal(
            v-model="isFormModalActive",
            trap-focus,
            :canCancel="['x']"
        )
            education-form-component(
                v-show="isRegisterFormMode",
                @on-save="addListEducationResume",
                @on-back-click="returnBack"
            )
        education-list-component(
            v-show="isListMode",
            :membership-resume-data="educationInformations",
            ref="listComponent"
        )
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import Loading from "@FE/Components/global/loading.vue";
import EducationFormComponent from "@FE/Components/engineer-membership/education-resume/educations-form.vue";
import EducationListComponent from "@FE/Components/engineer-membership/education-resume/education-list.vue";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import UserIdentificationInformationModule from "@FE/Scripts/modules/user-identification-information-module";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import EducationInformationData from "@FE/Scripts/modules/engineer-membership/education-resume/information-module";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { actualPrimitives } from "mongoose";
import NotifyModule from "@FE/Scripts/modules/notify-module";

/**
 * Use buefy with font awesome
 */
Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Save
 */
export default Vue.extend({
    name: "EducationInformation",

    components: {
        EducationFormComponent,
        EducationListComponent,
        Loading,
    },

    data: () => ({
        isFormModalActive: false,
        formMode: FormModesEnum.LOADING_FORM,
        educationInformations: [] as Array<EducationInformationType>,
    }),

    /**
     * Computed
     */
    computed: {
        isLoadingMode() {
            return this.formMode == FormModesEnum.LOADING_FORM;
        },

        isListMode() {
            return this.formMode == FormModesEnum.LIST_FORM;
        },

        isRegisterFormMode() {
            return this.formMode == FormModesEnum.REGISTER_FORM;
        },
    },

    /**
     * Mounted
     */
    mounted() {
        this.hideLoading();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * register Data
         */
        async addListEducationResume(data: any): Promise<void> {
            let result: ActionResultType = data.data as ActionResultType;

            if (result.success) {
                this.showLoading();

                const resumeItem: EducationInformationData = result.data as EducationInformationData;
                (this.$refs.listComponent as any).appendResume(resumeItem);

                this.setListFormMode();
                this.hideLoading();
                this.returnBack();

                NotifyModule.showSuccess(this.$buefy, "ثبت با موفقیت انجام شد");
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
        },

        /**
         * Set form-mode to Loading
         */
        async setLoadingFormMode(): Promise<void> {
            Vue.set(this, "formMode", FormModesEnum.LOADING_FORM);
        },

        /**
         * Set form-mode to List
         */
        async setListFormMode(): Promise<void> {
            Vue.set(this, "formMode", FormModesEnum.LIST_FORM);
        },

        /**
         * Set form-mode to Register Form
         */
        async setRegisterFormMode(): Promise<void> {
            Vue.set(this, "formMode", FormModesEnum.REGISTER_FORM);
        },

        /**
         * Add Form
         */
        async addForm(): Promise<void> {
            this.setRegisterFormMode();
            this.showFormModal();
        },

        /**
         * Return Back
         */
        async returnBack(): Promise<void> {
            this.hideFormModal();
            this.setListFormMode();
        },

        /**
         * Show Form Modal
         */
        async showFormModal(): Promise<void> {
            Vue.set(this, "isFormModalActive", true);
        },

        /**
         * Hide Form Modal
         */
        async hideFormModal(): Promise<void> {
            Vue.set(this, "isFormModalActive", false);
        },

        /**
         * Show Loading
         */
        async showLoading(): Promise<void> {
            this.setLoadingFormMode();
        },

        /**
         * Hide Loading
         */
        async hideLoading(): Promise<void> {
            this.setListFormMode();
        },
    },
});
</script>
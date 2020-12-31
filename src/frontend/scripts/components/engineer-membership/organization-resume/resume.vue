<template lang="pug">
.register-container
    .container(v-show="isLoadingMode")
        loading
    .container(v-show="! isLoadingMode")
        .buttons
            b-button.is-primary.is-rounded(v-show="isListMode", @click.prevent="addForm")
                i.fas.fa-plus
                |  افزودن
    .container(v-show="! isLoadingMode")
        b-modal.medium-modal(
            v-model="isFormModalActive",
            trap-focus,
            :canCancel= ['x'],
        )
            resume-form-component(
                v-show="isRegisterFormMode",
                @on-save="registerData",
                @on-back-click="returnBack"
            )
        resume-list-component(
            v-show="isListMode",
            :membership-resume-data="resumes",
            ref="listComponent",
        )
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import Loading from "@FE/Components/global/loading.vue";
import ResumeFormComponent from "@FE/Components/engineer-membership/organization-resume/resume-form.vue";
import ResumeListComponent from "@FE/Components/engineer-membership/organization-resume/resume-list.vue";
import { ProvinceType } from "@Lib/types/frontend/global/province-type";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";

/**
 * Use buefy with font awesome
 */
Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Resume form data type
 */
export type ResumeFormDataType = {
    formMode: String;
    resumes: Array<OrganizationResumeDataType>;
};

/**
 * Resume form data type
 */
export type ResumeFormPropsDataType = {
    resumeData: OrganizationResumeDataType;
};

/**
 * resume
 */
export default Vue.extend({
    name: "Resume",

    components: {
        ResumeFormComponent,
        ResumeListComponent,
        Loading,
    },

    data: () =>
        ({
            isFormModalActive: false,
            formMode: FormModesEnum.LOADING_FORM,
            resumes: [] as Array<OrganizationResumeDataType>,
        } as ResumeFormDataType),

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
     * Created
     */
    created() {
        this.showLoading();
    },

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
        async registerData(data: any): Promise<void> {
            this.showLoading();

            const resumeItem: OrganizationResumeDataType = data.data as OrganizationResumeDataType;
            (this.$refs.listComponent as any).appendResume(resumeItem);

            this.returnBack();
            this.hideLoading();
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
            Vue.set(this, "isFormModalActive", true );
        },

        /**
         * Hide Form Modal
         */
        async hideFormModal(): Promise<void> {
            Vue.set(this, "isFormModalActive", false );
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

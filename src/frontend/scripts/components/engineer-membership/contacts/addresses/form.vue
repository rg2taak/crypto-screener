<template lang="pug">
.register-container
    .container(v-show="isLoadingModew")
        loading
    .container(v-show="! isLoadingModew")
        .buttons
            b-button.is-primary.is-rounded(
                v-show="isListViewMode",
                @click.prevent="addForm"
            )
                i.fas.fa-plus افزودن
            //b-button.is-info.is-rounded(v-show="isListViewMode", @click.prevent="sendForConfirm")
                i.fas.fa-arrow-up
                |  ارسال جهت تایید

    .conatiner(v-show="! isLoadingModew")
        b-modal.medium-modal(
            v-model="isFormModalActive",
            trap-focus,
            :canCancel="'x'"
        )
            register-form(
                v-show="isRegisterFormMode",
                @on-save="onRegisterAddress",
                @on-back-click="returnBack"
            )
        address-list(ref="addressList")
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import RegisterForm from "./register.vue";
import AddressList from "./list.vue";
import ConfirmButtonDialog, {
    DialogButtonType,
} from "@FE/Components/global/confirm-dialog.vue";
import Loading from "@FE/Components/global/loading.vue";
import ContactFormStore from "@FE/Scripts/stores/engineer-membership/contacts/address/register-store";
import NotifyModule from "@FE/Scripts/modules/notify-module";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Address form data type
 */
export type AddressFormDataType = {
    formMode: String;
    isFormModalActive?: boolean;
};

/**
 * Register
 */
export default Vue.extend({
    name: "AddressesForm",
    store: ContactFormStore,
    components: {
        Loading,
        AddressList,
        RegisterForm,
        ConfirmButtonDialog,
    },

    data: () =>
        ({
            isFormModalActive: false,
            formMode: FormModesEnum.LOADING_FORM,
        } as AddressFormDataType),

    /**
     * Computed
     */
    computed: {
        isLoadingModew() {
            return this.formMode == FormModesEnum.LOADING_FORM;
        },

        isListViewMode() {
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
         * Return to back
         */
        // async returnBack(){
        //     this.$emit("on-back-click", {
        //         sender: this,
        //     });
        // },

        /**
         * Remove an existing address
         */
        sendForConfirm(): void {
            this.$buefy.dialog.confirm({
                title: "ارسال برای بررسی و تایید",
                message: "برای ارسال اطمینان دارید؟",
                cancelText: "انصراف",
                confirmText: "تایید",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    /*Send to backend result*/
                    /* TODO: CALL STORE METHOD */
                    NotifyModule.showSuccess(
                        this.$buefy,
                        "اطلاعات با موفقیت ارسال شد"
                    );
                },
            });
        },

        /**
         * On Register address
         */
        onRegisterAddress(data: any) {
            /* TODO: DO PROPER ACTION */
            this.showLoading();
            data = data.data;

            if (data.success) {
                /* Append to address-list form */
                const addressList: any = this.$refs.addressList;
                addressList.appendAddress(data.data);

                this.returnBack();
                this.hideLoading();
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
        async setListMode(): Promise<void> {
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
            this.setListMode();
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
            this.setListMode();
        },
    },
});
</script>

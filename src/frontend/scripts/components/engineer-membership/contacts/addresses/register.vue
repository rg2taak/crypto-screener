<template lang="pug">
.register-container
    form.form-modal-container.columns.is-multiline
        .form-modal-close(@click.prevent="onReturnBack")
        .form-head.column.is-10
            .form-head-icon
            h2.subtitle
                | مشخصات آدرس

        .form-body.column.is-10
            b-field(label="نوع آدرس", label-position="on-border")
                b-select(
                    v-model="formData.addressType",
                    ref="addressType",
                    autofocus,
                    expanded,
                    rounded,
                    required,
                    validation-message="نوع آدرس را انتخاب کنید"
                )
                    option(
                        v-for="(addressType, index) in addressTypes",
                        :key="index",
                        :value="addressType"
                    )
                        | {{ addressType.name }}
            .field
                //- b-switch(v-model="formData.isDefault")
                //-     | مکاتبات سازمان از طریق این آدرس صورت پذیرد
                b-checkbox(v-model="formData.isDefault")
                    | مکاتبات سازمان از طریق این آدرس صورت پذیرد
            //- b-field(
            //-     label="شهر",
            //-     label-position="on-border"
            //- )
            //-     b-autocomplete(
            //-         rounded
            //-         v-model="formData.city",
            //-         :data="citiesList",
            //-         placeholder="جستجوی شهر",
            //-         icon="magnify",
            //-         clearable,
            //-         @select="option => selected = option",
            //-     )

            b-field(label="شهر", label-position="on-border")
                b-select(
                    v-model="formData.city",
                    expanded,
                    rounded,
                    required,
                    validation-message="شهر را انتخاب کنید"
                )
                    option(
                        v-for="(city, index) in citiesList",
                        :key="index",
                        :value="city"
                    )
                        | {{ city.name }}

            b-field(label="منطقه", label-position="on-border")
                b-input(v-model="formData.location.region", expanded, rounded)

            b-field(label="خیابان اصلی", label-position="on-border")
                b-input(
                    v-model="formData.location.mainStreet",
                    expanded,
                    rounded
                )

            b-field(label="خیابان فرعی", label-position="on-border")
                b-input(
                    v-model="formData.location.subStreet",
                    expanded,
                    rounded
                )

            b-field(label="کوچه", label-position="on-border")
                b-input(v-model="formData.location.alley", expanded, rounded)

            b-field(label="پلاک", label-position="on-border")
                b-input(
                    type="number",
                    v-model.number="formData.location.no",
                    expanded,
                    rounded
                )

            b-field(label="کد پستی", label-position="on-border")
                b-input(
                    type="number",
                    v-model.number="formData.location.postalCode",
                    expanded,
                    rounded
                )

            b-field(label="طبقه", label-position="on-border")
                b-input(
                    type="number",
                    v-model.number="formData.location.floor",
                    expanded,
                    rounded
                )

            b-field(label="تلفن", label-position="on-border")
                b-input(v-model="formData.phone", expanded, rounded)

            //- .field
                label تصویر سند مالکیت/قولنامه
                div
                    input(type="file", @input="onFileUpload")

        .form-footer.column.is-10
            b-field
                .buttons.columns.is-justify-content-center
                    .column.is-3
                        b-button(
                            expanded,
                            rounded,
                            @click.prevent="onSave",
                            type="is-primary"
                        ) ثبت
                    .column.is-2
                        b-button(
                            rounded,
                            @click.prevent="onReturnBack",
                            type="is-text"
                        ) انصراف
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import { v4 as uuidV4 } from "uuid";
import Buefy from "buefy";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { loadavg } from "os";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { LocationDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/location-data-type";
import { AddressTypeDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-type-data-type";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";
import { AddressFormDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-form-data-type";
import AddressRegister from "@FE/Scripts/modules/engineer-membership/contacts/address/register-module";
import { AddressRegisterStoreAction } from "@FE/Scripts/stores/engineer-membership/contacts/address/register-store";
import NotifyModule from "@FE/Scripts/modules/notify-module";
import { add } from "winston";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Register
 */
export default Vue.extend({
    name: "AddressRegisterForm",

    data: () =>
        ({
            name: "",
            addressTypes: [] as Array<AddressTypeDataType>,
            citiesList: [] as Array<CityType>,
            formData: {} as AddressDataType,
        } as AddressFormDataType),

    /**
     * Created
     */
    created() {
        this.resetFormData();
        this.loadCitiesList();
        this.loadAddressTypes();
    },

    /**
     * Mounted
     */
    mounted() {
        this.defaultFocus();
    },

    /**
     * computed
     */
    computed: {
        filteredDataArray(): Array<CityType> {
            return this.citiesList.filter(
                (option) => option.name.toLowerCase().indexOf(this.name) >= 0
            );
        },
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Default focus
         */
        defaultFocus() {
            const addressType: HTMLInputElement = this.$refs
                .addressType as HTMLInputElement;
            addressType?.focus();
        },

        /**
         * Register data
         */
        async onSave() {
            /* Send to store */
            this.formData.id = this.formData.id || uuidV4();

            const result: ActionResultType = await this.$store.dispatch(
                AddressRegisterStoreAction.confirmNewAddress,
                this.formData
            );

            /* Add id */
            if (result.success) {
                this.$emit("on-save", {
                    sender: this,
                    data: this.formData,
                });
                this.resetFormData();
                NotifyModule.showSuccess(this.$buefy, "ثبت با موفقیت انجام شد");
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
        },

        /**
         * Cancel registration
         */
        async cancel() {
            this.$emit("on-cancel", {
                sender: this,
                data: this.formData,
            });
        },

        /**
         * On file upload
         */
        async onFileUpload(e: any) {},

        /**
         * Reset form data
         */
        async resetFormData(): Promise<void> {
            const data: AddressDataType = {
                location: {},
            } as AddressDataType;

            Vue.set(this, "formData", data);
        },

        /**
         * Load adress-types list
         */
        async loadAddressTypes(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                AddressRegisterStoreAction.requestAddressTypes
            );

            Vue.set(this, "addressTypes", result.data);
        },

        /**
         * Load cities list
         */
        async loadCitiesList(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                AddressRegisterStoreAction.requestCitiesList
            );

            Vue.set(this, "citiesList", result.data);
        },
        /**
         * return back
         */
        async onReturnBack() {
            this.$emit("on-back-click", {
                sender: this,
            });
            this.resetFormData();
        },
    },
});
</script>

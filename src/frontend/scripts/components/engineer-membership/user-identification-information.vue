<template lang="pug">
.register-container.columns.is-multiline.is-justify-content-center
    form.register-form.column.is-5
        .columns.is-multiline.is-justify-content-center.is-full-height
            .form-head.column.is-10
                .form-head-icon
                h2.subtitle
                    | مشخصات شناسنامه
            .form-body.column.is-10
                b-field(label="نام", :label-position="labelPosition")
                    b-input(
                        ref="firstName",
                        v-model="userIdentificationCertificate.firstName",
                        :label-position="labelPosition",
                        rounded,
                        expanded,
                        required,
                        :pattern="getStringRegex('farsi')",
                        validation-message="نام خود را به فارسی وارد کنید"
                    )

                b-field(label="نام خانوادگی", :label-position="labelPosition") 
                    b-input(
                        ref="lastName",
                        v-model="userIdentificationCertificate.lastName",
                        :label-position="labelPosition",
                        rounded,
                        expanded,
                        required,
                        :pattern="getStringRegex('farsi')",
                        validation-message="نام خانوادگی خود را به فارسی وارد کنید"
                    )

                b-field(label="نام به لاتین", :label-position="labelPosition")
                    b-input(
                        ref="latinFirstName",
                        v-model="userIdentificationCertificate.latinFirstName",
                        placeholder="نام به لاتین",
                        custom-class="has-text-left",
                        :label-position="labelPosition",
                        rounded,
                        expanded,
                        required,
                        :pattern="getStringRegex('english')",
                        validation-message="نام را به لاتین وارد کنید"
                    )
                b-field(
                    label="نام خانوادگی به لاتین",
                    :label-position="labelPosition"
                )
                    b-input(
                        ref="latinLastName",
                        v-model="userIdentificationCertificate.latinLastName",
                        placeholder="نام خانوادگی به لاتین",
                        custom-class="has-text-left",
                        :label-position="labelPosition",
                        rounded,
                        expanded,
                        required,
                        :pattern="getStringRegex('english')",
                        validation-message="نام خانوادگی را به لاتین وارد کنید"
                    )
                b-field(label="نام پدر", :label-position="labelPosition")
                    b-input(
                        ref="fatherName",
                        v-model="userIdentificationCertificate.fatherName",
                        :label-position="labelPosition",
                        rounded,
                        required,
                        expanded,
                        :pattern="getStringRegex('farsi')",
                        validation-message="نام پدر را به فارسی وارد کنید"
                    )

                b-field(
                    label="شماره شناسنامه",
                    :label-position="labelPosition"
                )
                    b-input(
                        v-model="userIdentificationCertificate.birthCertificateNumber",
                        custom-class="has-text-left",
                        :label-position="labelPosition",
                        rounded,
                        required,
                        expanded,
                        :pattern="getStringRegex('number')",
                        validation-message="شماره شناسنامه را عدد وارد کنید"
                    )

                b-field(
                    label="سریال شناسنامه",
                    :label-position="labelPosition"
                )
                    b-input(
                        v-model="userIdentificationCertificate.birthCertificateSerial.serial",
                        expanded,
                        pattern="[0-9\u06F0-\u06F9]*",
                        validation-message="سریال شناسنامه را عدد وارد کنید"
                    )
                    b-input(
                        placeholder="کد عددی",
                        v-model="userIdentificationCertificate.birthCertificateSerial.bcNumberCode",
                        type="number",
                        min="0",
                        max="99",
                        pattern="[0-9\u06F0-\u06F9]*",
                        custom-class="has-text-center",
                        validation-message="کد عددی را عددی بین 0 تا 99 وارد کنید"
                    )
                    b-select(
                        placeholder="کد حرفی",
                        v-model="userIdentificationCertificate.birthCertificateSerial.bcLetterCode",
                        custom-class="has-text-left"
                    )
                        option(
                            v-for="bcLetterCode in bcLetterCodes",
                            :value="bcLetterCode"
                        )
                            | {{ bcLetterCode.name }}

                b-field(label="ملیت", :label-position="labelPosition")
                    b-input(
                        v-model="userIdentificationCertificate.nationality",
                        rounded,
                        required,
                        pattern="^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\s]+$",
                        validation-message="ملیت را به فارسی وارد نمایید",
                        expanded
                    )

                .field
                    .form-header.sub-title.is-size-7
                        | محل تولد
                    country-selector-birthday(
                        v-model="userIdentificationCertificate.birthCountry"
                    )

                b-field
                    date-picker(
                        label="تاریخ تولد",
                        v-model="userIdentificationCertificate.birthDate",
                        format="YYYY-MM-DD",
                        display-format="jYYYY/jMM/jDD",
                        type="date",
                        rounded,
                        expanded
                    )

                .field
                    .form-header.sub-title.is-size-7
                        | محل صدور شناسنامه
                    country-selector-export-place(
                        v-model="userIdentificationCertificate.birthCertificateExportPlaceCountry"
                    )

                b-field(label="کد حوزه صدور", :label-position="labelPosition")
                    b-input(
                        v-model="userIdentificationCertificate.birthCertificateExportPlaceZone",
                        rounded,
                        required,
                        pattern="[0-9\u06F0-\u06F9]*",
                        validation-message="کدحوزه صدور را به عددی وارد نمایید",
                        :has-counter="false",
                        custom-class="has-text-left"
                    )

                b-field
                    date-picker(
                        v-model="userIdentificationCertificate.birthCertificateExportPlaceDate",
                        label="تاریخ صدور",
                        format="YYYY-MM-DD",
                        display-format="jYYYY/jMM/jDD",
                        type="date",
                        rounded,
                        expanded
                    )

                b-field(label="جنسیت", :label-position="labelPosition")
                    b-select(
                        v-model="userIdentificationCertificate.gender",
                        rounded,
                        expanded,
                        required,
                        validation-message="جنسیت خود را مشخص کنید"
                    )
                        option(value="men") مرد
                        option(value="woman") زن
                        option(value="other") سایر

            .form-footer.column.is-10
                b-field
                    .buttons.columns.is-justify-content-center
                        .column.is-3
                            b-button(
                                expanded,
                                rounded,
                                @click.prevent="registerUserIdentificationInformation",
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
import Buefy from "buefy";
import UserIdentificationInformationStore, {
    UserIdentificationInformationStoreActions,
} from "@FE/Scripts/stores/engineer-membership/user-identification-information-store";
import { BcLetterCodeType } from "@Lib/types/frontend/identification/bc-letter-code-type";
import { BirthCertificateSerialType } from "@Lib/types/frontend/identification/birth-certificate-serial-type";

import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import { ProvinceType } from "@Lib/types/frontend/global/province-type";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import Helper from "@Core/Helpers/frontend-global-helper";
import NotifyModule from "@FE/scripts/modules/notify-module";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import personalInformationVue from "./personal-information.vue";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import CountrySelectorBirthday from "@FE/Components/global/country-selector.vue";
import CountrySelectorExportPlace from "@FE/Components/global/country-selector.vue";
import PageHelper from "@FE/Scripts/helpers/page-helper";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * User identification informationFormDataType
 */
export type UserIdentificationInformationFormDataType = {
    userIdentificationCertificate: UserIdentificationInformationType;
    bcLetterCode: BcLetterCodeType;
};

/**
 * User identification information
 */
export default Vue.extend({
    name: "UserIdentificationInformation",

    store: UserIdentificationInformationStore,

    components: {
        CountrySelectorBirthday,
        CountrySelectorExportPlace,
        DatePicker: VuePersianDatetimePicker,
    },

    data: () =>
        ({
            labelPosition: "on-border",
            userIdentificationCertificate: {
                birthCertificateSerial: {},
            } as UserIdentificationInformationType,
            bcLetterCode: {} as BcLetterCodeType,
        } as UserIdentificationInformationFormDataType),

    /**
     * Computed
     */
    computed: {
        bcLetterCodes(): Array<BcLetterCodeType> {
            return this.$store.getters.bcLetterCodes;
        },
    },

    /**
     * Created
     */
    async created() {
        await this.loadBcLetterCodeList();
        await this.requestUserIdentificationInformation();
    },

    /**
     * Mounted
     */
    async mounted() {
        await this.focusFirstName();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Get InputString regex
         */
        getStringRegex(type: string): string {
            switch (type) {
                case "farsi":
                    return `^[\u0621-\u0628\u062A-\u063A\u0641-\u0642\u0644-\u0648\u064E-\u0651\u0655\u067E\u0686\u0698\u0020\u2000-\u200F\u2028-\u202F\u06A9\u06AF\u06BE\u06CC\u0629\u0643\u0649-\u064B\u064D\u06D5\s]+$`;
                    break;

                case "english":
                    return "[A-Z a-z]*";
                    break;

                case "number":
                    return "[0-9\u06F0-\u06F9]*";
                    break;
            }

            return "";
        },

        /**
         * Focus on first name
         */
        async focusFirstName(): Promise<void> {
            if (this.$refs.firstName) {
                (this.$refs.firstName as HTMLInputElement).focus();
            }
        },
        /**
         * Load bc letter code list
         */
        async loadBcLetterCodeList(): Promise<void> {
            await this.$store.dispatch(
                UserIdentificationInformationStoreActions.loadBcLetterCodeList
            );
        },

        /**
         * Request user identification information
         */
        async requestUserIdentificationInformation(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                UserIdentificationInformationStoreActions.RequestUserIdentificationInformation
            );

            /* Notify user */
            if (result.success) {
                Vue.set(this, "userIdentificationCertificate", result.data);
            } else {
                if (result.data != null) {
                    NotifyModule.showDanger(this.$buefy, result.data);
                }
            }
        },

        /**
         * Register user identification information data
         */
        async registerUserIdentificationInformation(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                UserIdentificationInformationStoreActions.RegisterUserIdentificationInformation,
                this.userIdentificationCertificate
            );

            /* Notify user */
            if (result.success) {
                NotifyModule.showSuccess(this.$buefy, result.data);
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
            this.onReturnBack();
        },

        /**
         * return back
         */
        async onReturnBack() {
            this.$emit("on-back-click", {
                sender: this,
            });
        },
    },
});
</script>

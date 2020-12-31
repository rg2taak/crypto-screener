<template lang="pug">
.register-container
    form.form-modal-container.columns.is-multiline
        .form-modal-close(@click.prevent="onReturnBack")
        .form-head.column.is-10
            .form-head-icon
            h2.subtitle
                | سوابق عضویت در سایر نظام های مهندسی
        .form-body.column.is-10
            b-field(label="استان", :label-position="labelPosition")
                b-select(
                    ref="province",
                    v-model="newResume.province",
                    autofocus,
                    expanded,
                    rounded,
                    required,
                    validation-message="استان را انتخاب کنید"
                )
                    option(
                        v-for="province in provinces",
                        :key="province.code",
                        :value="province"
                    )
                        | {{ province.name }}

            b-field(label="شماره عضویت", :label-position="labelPosition")
                b-input(
                    type="text",
                    v-model="newResume.membershipId",
                    custom-class="has-text-left",
                    rounded,
                    expanded,
                    required,
                    validation-message="شماره عضویت را وارد کنید"
                )

            b-field
                date-picker(
                    v-model="newResume.membershipStartDate",
                    rounded,
                    expanded,
                    color="#c70600",
                    label="تاریخ شروع عضویت",
                    format="YYYY-MM-DD",
                    display-format="jYYYY/jMM/jDD",
                    type="date",
                    required,
                    validation-message="تاریخ شروع عضویت را وارد کنید"
                )

            b-field
                date-picker(
                    v-model="newResume.membershipFinishDate",
                    rounded,
                    expanded,
                    color="#c70600",
                    label="تاریخ پایان عضویت",
                    format="YYYY-MM-DD",
                    display-format="jYYYY/jMM/jDD",
                    type="date",
                    required,
                    validation-message="تاریخ پایان عضویت را وارد کنید"
                )

            b-field(
                label="پروانه اشتغال",
                :label-position="labelPosition",
                rounded
            )
                b-select(
                    placeholder="پروانه اشتغال",
                    rounded,
                    v-model="newResume.employmentLicenseStatus",
                    required,
                    expanded,
                    validation-message="وضعیت داشتن پروانه اشتغال را انتخاب کنید"
                )
                    option(:value="true") دارم
                    option(:value="false") ندارم

            b-field(
                label="شماره پروانه",
                :label-position="labelPosition",
                v-if="newResume.employmentLicenseStatus"
            )
                b-input(
                    type="text",
                    rounded,
                    expanded,
                    custom-class="has-text-left",
                    v-model="newResume.employmentLicense.code",
                    required,
                    validation-message="شماره پروانه را وارد کنید",
                )

            b-field(
                label="پایه پروانه",
                :label-position="labelPosition",
                v-if="newResume.employmentLicenseStatus"
            )
                b-select(
                    rounded,
                    expanded,
                    v-model="newResume.employmentLicense.level",
                )
                    option(
                        v-for="level in employmentLicenseLevels",
                        :key="level.code",
                        :value="level"
                    )
                        | {{ level.name }}
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
import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import Helper from "@Core/Helpers/frontend-global-helper";
import NotifyModule from "@FE/scripts/modules/notify-module";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import OrgResumeRegisterFormStore, {
    OrgResumeRegisterFormStoreAction,
} from "@FE/Scripts/stores/engineer-membership/organization-resume/register-store";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { EmploymentLicenseType } from "@Lib/types/frontend/members/organization-resume/employment-license-type";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Province data type
 */
export type ProvinceDataType = {
    code: string;
    name: string;
};

/**
 * License Level Data Type
 */
export type LicenseLevelDataType = {
    code: string;
    name: string;
};

/**
 * Resume Form Data Type
 */
export type ResumeFormDataType = {
    provinces: Array<ProvinceDataType>;
    employmentLicenseLevels: Array<LicenseLevelDataType>;
    newResume: OrganizationResumeDataType;
};

/**
 * Register
 */
export default Vue.extend({
    name: "ResumeForm",

    /**
     * Store
     */
    store: OrgResumeRegisterFormStore,

    /**
     * Components
     */
    components: {
        DatePicker: VuePersianDatetimePicker,
    },

    /**
     * Data
     */
    data: () =>
        ({
            labelPosition: "on-border",
            provinces: [] as Array<ProvinceDataType>,
            employmentLicenseLevels: [] as Array<LicenseLevelDataType>,
            newResume: {} as OrganizationResumeDataType,
        } as ResumeFormDataType),

    /**
     * Created
     */
    created(): void {
        this.clearRegisterForm();
        this.requestLicenseLevelList();
        this.requestProvinceList();
    },

    /**
     * Mounted
     */
    mounted() {
        this.focusProvince();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Focus on Province
         */
        focusProvince() {
            if (this.$refs.province) {
                (this.$refs.province as HTMLInputElement).focus();
            }
        },

        /**
         * Clear Register Form Fields
         */
        async clearRegisterForm(): Promise<void> {
            const data: OrganizationResumeDataType = {
                province: {},
                membershipId: "",
                membershipStartDate: "",
                membershipFinishDate: "",
                employmentLicense: {
                    code:"",
                    level: {},
                },
                employmentLicenseStatus: false,
            } as OrganizationResumeDataType;

            Vue.set(this, "newResume", data);
        },

        /**
         * Request provinces list
         */
        async requestProvinceList() {
            const result: ActionResultType = await this.$store.dispatch(
                OrgResumeRegisterFormStoreAction.requestProvincesOfIran
            );
            Vue.set(this, "provinces", result.data);
        },

        /**
         * load employment license levels
         */
        async requestLicenseLevelList() {
            const result: ActionResultType = await this.$store.dispatch(
                OrgResumeRegisterFormStoreAction.requestLicenseLevelList
            );
            Vue.set(this, "employmentLicenseLevels", result.data);
        },

        /**
         * Register data
         */
        async onSave() {
            const result: ActionResultType = await this.$store.dispatch(
                OrgResumeRegisterFormStoreAction.confirmNewOrgResume,
                this.newResume
            );
            if (result.success) {
                this.$emit("on-save", {
                    sender: this,
                    data: _.cloneDeep(this.newResume),
                });
                this.clearRegisterForm();
                NotifyModule.showSuccess(this.$buefy,'ثبت با موفقیت انجام شد');
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
        },

        /**
         * return back
         */
        async onReturnBack() {
            this.$emit("on-back-click", {
                sender: this,
            });
            this.clearRegisterForm();
        },
    },
});
</script>
<style scoped>
</style>

<template lang="pug">
.register-container
    .container(v-if="resumes")
        b-table.table.is-striped.is-narrow.is-hoverable.is-fullwidth(
            :data="resumes"
        )
            b-table-column(
                field="membershipId",
                label="شماره عضویت",
                v-slot="props"
            )
                | {{ props.row.membershipId }}

            b-table-column(
                field="province.name",
                label="استان",
                v-slot="props"
            )
                | {{ props.row.province.name }}

            b-table-column(
                field="membershipStartDate",
                label="آغاز عضویت",
                v-slot="props"
            )
                | {{ convertDateFormat(props.row.membershipStartDate) }}

            b-table-column(
                field="membershipFinishDate",
                label="پایان عضویت",
                v-slot="props"
            )
                | {{ convertDateFormat(props.row.membershipFinishDate) }}

            b-table-column(
                field="employmentLicense.status",
                label="دارای پروانه",
                v-slot="props"
            )
                span(
                    v-html="getLicenseLevel(props.row.employmentLicense) ? checkMarkIcon : timeIcon"
                )

            b-table-column(
                field="employmentLicenseNumber",
                label="شماره پروانه",
                v-slot="props"
            )
                | {{ getLicenseLevelCode(props.row.employmentLicense) }}

            b-table-column(
                field="employmentLicenseLevel",
                label="پایه پروانه",
                v-slot="props"
            )
                | {{ getLicenseLevelText(props.row.employmentLicense) }}

            b-table-column(field="functions", label="عملیات", v-slot="props")
                b-button(
                    rounded,
                    @click.prevent="deleteItem(props.row)",
                    type="is-danger",
                )
                    i.fas.fa-trash
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import NotifyModule from "@FE/scripts/modules/notify-module";
import DateHelper from "@FE/Scripts/helpers/date-helper";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import OrganizationResumeListStore, {
    OrganizationResumeListStoreActions,
} from "@FE/Scripts/stores/engineer-membership/organization-resume/list-store";
import { resourceLimits } from "worker_threads";
import { LicenseLevelDataType } from "@Lib/types/frontend/members/organization-resume/license-level-data-type";
import { EmploymentLicenseType } from "@Lib/types/frontend/members/organization-resume/employment-license-type";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Resume List Form Data Type
 */
export type ResumeListFormDataType = {
    resumes: Array<OrganizationResumeDataType>;
};

/**
 * Register
 */
export default Vue.extend({
    name: "resumeList",

    store: OrganizationResumeListStore,

    data: () =>
        ({
            checkMarkIcon: '<i class="has-text-success fas fa-check"></i>',
            timeIcon: '<i class="has-text-danger fas fa-times"></i>',
            resumes: [],
        } as ResumeListFormDataType),

    /**
     * Created
     */
    created(): void {
        this.loadOrqanizationResumeListData();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Get License level Icon message
         */
        getLicenseLevel(e: EmploymentLicenseType) {
            if (e) {
                return e.code;
            }
            return false;
        },
        /**
         * Get License level text message
         */
        getLicenseLevelText(e: EmploymentLicenseType) {
            if (e) {
                return e.level.name;
            }
            return "";
        },

        /**
         * Get License level code message
         */
        getLicenseLevelCode(e: EmploymentLicenseType) {
            if (e) {
                return e.code;
            }
            return "";
        },

        /**
         * load Data
         */
        async loadOrqanizationResumeListData() {
            const result: ActionResultType = await this.$store.dispatch(
                OrganizationResumeListStoreActions.requestOrganizationResumeListData
            );

            Vue.set(this, "resumes", result.data);
        },

        /**
         * Append a new resume
         */
        async appendResume(item: OrganizationResumeDataType) {
            Vue.set(this.resumes, this.resumes.length, item);
        },

        /**
         * Delete item from list
         */
        async deleteItem(membership: OrganizationResumeDataType) {
            this.$buefy.dialog.confirm({
                title: "حذف",
                message: "برای حذف اطمینان دارید؟",
                cancelText: "انصراف",
                confirmText: "تایید",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    /*Send to backend result*/
                    const result: ActionResultType = await this.$store.dispatch(
                        OrganizationResumeListStoreActions.deleteOrgResumeItemList,
                        membership
                    );
                    if (result.success) {
                        const newList = this.resumes.filter(
                            (x) => x.membershipId != membership.membershipId
                        );
                        Vue.set(this, "resumes", newList);
                        NotifyModule.showSuccess(this.$buefy, result.data);
                    } else {
                        NotifyModule.showDanger(this.$buefy, result.data);
                    }
                },
            });
        },

        /**
         * Convert Date Format
         */
        convertDateFormat(date: Date): string {
            return DateHelper.toPersianDate(date);
        },
    },
});
</script>
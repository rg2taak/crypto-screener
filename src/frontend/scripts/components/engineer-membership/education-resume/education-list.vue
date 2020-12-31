<template lang="pug">
.register-container
    .container(v-if="educationInformations")
        b-table.table.is-striped.is-narrow.is-hoverable.is-fullwidth(
            :data="educationInformations"
        )
            b-table-column(
                field="university.name",
                label="نام دانشگاه",
                v-slot="props"
            )
                | {{ props.row.university.name }}

            b-table-column(
                field="university.location.province.name",
                label="شهر",
                v-slot="props"
            )
                | {{ props.row.university.location.province.name }}

            b-table-column(
                field="educationGrade.name",
                label="مدرک",
                v-slot="props"
            )
                | {{ props.row.educationGrade.name }}

            b-table-column(
                field="fieldOfStudy.name",
                label="رشته",
                v-slot="props"
            )
                | {{ props.row.fieldOfStudy.name }}

            b-table-column(
                field="academicOrientation.name ",
                label="گرایش",
                v-slot="props"
            )
                | {{ props.row.academicOrientation.name }}

            b-table-column(
                field="startDate ",
                label="تاریخ آغاز",
                v-slot="props"
            )
                | {{ convertDateFormat(props.row.startDate) }}

            b-table-column(
                field="startDate ",
                label="تاریخ فارغ التحصیلی",
                v-slot="props"
            )
                | {{ convertDateFormat(props.row.finishDate) }}

            b-table-column(
                field="thesis ",
                label="تاریخ فارغ التحصیلی",
                v-slot="props"
            )
                | {{ props.row.thesis }}

            b-table-column(field="functions", label="عملیات", v-slot="props")
                b-button(
                    rounded,
                    @click.prevent="deleteItem(props.row)",
                    type="is-danger"
                )
                    i.fas.fa-trash
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { CountrySelectorDataType } from "@Lib/types/frontend/global/country-selector-type";
import NotifyModule from "@FE/scripts/modules/notify-module";
import DateHelper from "@FE/Scripts/helpers/date-helper";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { ProvinceType } from "@Lib/types/frontend/global/province-type";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import EducationResumeListStore, {
    EducationResumeListStoreAction,
} from "@FE/Scripts/stores/engineer-membership/education-resume/education-resume-list-store";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Register
 */
export default Vue.extend({
    name: "educationInformationList",

    store: EducationResumeListStore,
    /**
     * data
     */
    data: () => ({
        educationInformations: [] as Array<EducationInformationType>,
    }),

    /**
     * Created
     */
    created(): void {
        this.loadData();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * load Data
         */
        async loadData() {
            const result: ActionResultType = await this.$store.dispatch(
                EducationResumeListStoreAction.requestEduResumeList
            );
            Vue.set(this, "educationInformations", result.data);
        },

        /**
         * Append a new resume
         */
        async appendResume(item: EducationInformationType) {
            Vue.set(
                this.educationInformations,
                this.educationInformations.length,
                item
            );
        },

        /**
         * Delete item from list
         */
        async deleteItem(eduInfo: EducationInformationType) {
            this.$buefy.dialog.confirm({
                title: "حذف",
                message: "برای حذف اطمینان دارید؟",
                cancelText: "انصراف",
                confirmText: "تایید",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    /*Send to backend result*/
                    const result = this.educationInformations.filter(
                        (x) => x != eduInfo
                    );
                    Vue.set(this, "educationInformations", result);

                    NotifyModule.showSuccess(
                        this.$buefy,
                        "حذف با موفقیت انجام شد"
                    );
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
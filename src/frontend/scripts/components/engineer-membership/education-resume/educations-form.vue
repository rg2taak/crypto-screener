<template lang="pug">
.education-container
    form.form-modal-container.columns.is-multiline
        .form-modal-close(@click.prevent="onReturnBack")
        .form-head.column.is-10
            .form-head-icon
            h2.subtitle
                | اطلاعات تحصیلی
        .form-body.column.is-10
            b-field(
                label="مقطع تحصیلی",
                label-position="on-border"
            )
                b-select(
                    ref="grade",
                    autofocus,
                    rounded,
                    expanded,
                    required,
                    validation-message="مقطع تحصیلی خود را انتخاب کنید.",
                    v-model="educationInformation.educationGrade"
                )
                    option(
                        v-for="grade in educationGrades",
                        :value="grade"
                        :key="grade.code",
                        )
                        | {{ grade.name }}

            b-field(
                label="رشته تحصیلی",
                label-position="on-border"
            )
                b-select(
                    rounded,
                    expanded,
                    required,
                    validation-message="رشته تحصیلی خود را انتخاب کنید",
                    v-model="educationInformation.fieldOfStudy"
                )
                    option(
                        v-for="fieldOfStudy in fieldOfStudies",
                        :value="fieldOfStudy",
                        :key="fieldOfStudy.code",
                    )
                        | {{ fieldOfStudy.name }}

            b-field(
                label="گرایش تحصیلی",
                label-position="on-border"
            )
                b-select(
                    rounded,
                    expanded,
                    required,
                    validation-message="گرایش تحصیلی خود را انتخاب کنید",
                    v-model="educationInformation.academicOrientation"
                )
                    option(
                        v-for="academicOrientation in academicOrientations",
                        :value="academicOrientation",
                        :key="academicOrientation.code"
                    )
                        | {{ academicOrientation.name }}

        
            b-field(
                label="نام دانشگاه",
                label-position="on-border"
            )
                b-input(
                    ref="university",
                    placeholder="نام دانشگاه",
                    rounded,
                    v-model="educationInformation.university.name"
                )
            .field
                .form-header.sub-title.is-size-7
                    | محل تحصیل
                country-selector(
                    v-model="educationInformation.university.location"
                )

        
            b-field(
                    label="وضعیت تحصیل",
                    label-position="on-border"
                )
                b-select(
                    rounded,
                    expanded,
                    required,
                    validation-message="وضعیت تحصیل را انتخاب کنید",
                    v-model="educationInformation.educationStatus"
                )
                    option(
                        v-for="educationStatus in educationStatuses",
                        :value="educationStatus"
                    )
                        | {{ educationStatus.name }}

            b-field
                date-picker(
                    rounded,
                    expanded,
                    label="تاریخ شروع تحصیل",
                    format="YYYY-MM-DD",
                    display-format="jYYYY/jMM/jDD",
                    type="date",
                    v-model="educationInformation.startDate",
                    required,
                    validation-message="تاریخ شروع تحصیل را وارد کنید"
                )

            b-field
                date-picker(
                    label="تاریخ اخذ مدرک تحصیلی",
                    format="YYYY-MM-DD",
                    display-format="jYYYY/jMM/jDD",
                    type="date",
                    v-model="educationInformation.finishDate",
                    required,
                    validation-message="تاریخ اخذ مدرک تحصیلی را وارد کنید"
                )
            b-field(
                label="موضوع پایان نامه",
                label-position="on-border"
            )
                b-input(
                    ref="thesis",
                    rounded,
                    expanded,
                    v-model="educationInformation.thesis",
                    required,
                    validation-message="موضوع پایان نامه را وارد کنید"
                )

        .form-footer.column.is-10
            b-field
                .buttons.columns.is-justify-content-center
                    .column.is-3
                        b-button(
                            expanded,
                            rounded,
                            type="is-primary",
                            @click.prevent="onSave"
                        ) ثبت
                    .column.is-2
                        b-button(
                            rounded,
                            type="is-text",
                            @click.prevent="onReturnBack"
                        ) انصراف
</template>

<script lang="ts">
import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { AcademicOrientationType } from "@Lib/types/frontend/education/academic-orientation-type";
import { EducationGradeType } from "@Lib/types/frontend/education/education-grade-type";
import { EducationStatusType } from "@Lib/types/frontend/education/education-status-type";
import { FieldOfStudyType } from "@Lib/types/frontend/education/field-of-study-type";
import { RequestEducationType } from "@Lib/types/frontend/education/request-education-type";
import CountrySelectorEducation from "@FE/Components/global/country-selector.vue";
import EducatonInformationStore, {
    EducatonInformationStoreActions,
} from "@FE/Scripts/stores/engineer-membership/education-resume/education-information-store";
import NotifyModule from "@FE/scripts/modules/notify-module";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import { CountrySelectorDataType } from "@Lib/types/frontend/global/country-selector-type";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { actualPrimitives } from "mongoose";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * CountrySelector data type
 */
export type EducationSelectorDataType = {
    educationGrade?: EducationGradeType;
    fieldOfStudy?: FieldOfStudyType;
    academicOrientation?: AcademicOrientationType;
};

/**
 * Education form data type
 */
export type EducationFormDataType = {
    educationSelector: EducationSelectorDataType;
    educationStatus: EducationStatusType;
    educationInformation: EducationInformationType;
};

/**
 * Education form
 */
export default Vue.extend({
    name: "EducationInformationComponent",

    store: EducatonInformationStore,

    /**
     * components
     */
    components: {
        CountrySelector: CountrySelectorEducation,
        DatePicker: VuePersianDatetimePicker,
    },
    /**
     * data
     */
    data: (): EducationFormDataType =>
        ({
            educationSelector: {} as EducationSelectorDataType,
            educationStatus: {} as EducationStatusType,
            educationInformation: {} as EducationInformationType,
        } as EducationFormDataType),

    /**
     * computed
     */
    computed: {
        educationGrades(): Array<EducationGradeType> {
            return this.$store.getters[
                EducatonInformationStoreActions.getEducationGradeList
            ];
        },

        fieldOfStudies(): Array<FieldOfStudyType> {
            return this.$store.getters[
                EducatonInformationStoreActions.getFieldOfStudyList
            ];
        },

        academicOrientations(): Array<AcademicOrientationType> {
            return this.$store.getters[
                EducatonInformationStoreActions.getAcademicOrientationList
            ];
        },

        educationStatuses(): Array<EducationStatusType> {
            return this.$store.getters[
                EducatonInformationStoreActions.getEducationStatusList
            ];
        },
    },

    /**
     * watch
     */
    watch: {
        /**
         * watch education grade
         */
        "educationInformation.educationGrade"(newValue) {
            if (this.educationInformation.educationGrade.code != null) {
                this.$store.dispatch(
                    EducatonInformationStoreActions.requestFieldOfStudyList,
                    this.educationInformation.educationGrade
                );
            }
        },

        /**
         * watch field Of Study
         */
        "educationInformation.fieldOfStudy"(newValue) {
            let academicOrientaion: RequestEducationType = {
                grade: this.educationInformation.educationGrade,
                fieldOfStudy: this.educationInformation.fieldOfStudy,
            } as RequestEducationType;
            if (academicOrientaion.fieldOfStudy.code != null) {
                this.$store.dispatch(
                    EducatonInformationStoreActions.requestAcademicOrientationList,
                    academicOrientaion
                );
            }
        },
    },

    /**
     * Created
     */
    async created() {
        Promise.all([
            this.clearRegisterForm(),
            this.loadEducationGrades(),
            this.loadEducationStatusesList(),
        ]);
    },

    /**
     * Mounted
     */
    mounted() {
        this.focusGrade();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Focus on grade
         */
        focusGrade() {
            if (this.$refs.grade) {
                (this.$refs.grade as HTMLInputElement).focus();
            }
        },

        /**
         * Clear Register Form Fields
         */
        async clearRegisterForm(): Promise<void> {
            const data: EducationInformationType = {
                educationGrade: {},
                fieldOfStudy: {},
                academicOrientation: {},
                university: {
                    location: {
                        country: {},
                        province: {},
                        city: {},
                    },
                },
                educationStatus: {},
            } as EducationInformationType;

            Vue.set(this, "educationInformation", data);
        },

        /**
         * Load education grades
         */
        async loadEducationGrades(): Promise<void> {
            await this.$store.dispatch(
                EducatonInformationStoreActions.requestEduGradeList
            );
        },

        /**
         * Load education statuses list
         */
        async loadEducationStatusesList(): Promise<void> {
            await this.$store.dispatch(
                EducatonInformationStoreActions.loadEducationStatusList
            );
        },

        /**
         * On save
         */
        async onSave() {
            let result: ActionResultType = await this.$store.dispatch(
                EducatonInformationStoreActions.newEducationResumeRegister,
                this.educationInformation
            );
            if (result.success) {
                this.$emit("on-save", {
                    sender: this,
                    data: {
                        success: true,
                        data: _.cloneDeep(this.educationInformation),
                    } as ActionResultType,
                });
                this.clearRegisterForm();
            } else {
                this.$emit("on-save", {
                    sender: this,
                    data: _.cloneDeep(result),
                });
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

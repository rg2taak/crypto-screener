import Vue from "vue";
import * as Vuex from "vuex";
import { EducationGradeType } from "@Lib/types/frontend/education/education-grade-type";
import { FieldOfStudyType } from "@Lib/types/frontend/education/field-of-study-type";
import { AcademicOrientationType } from "@Lib/types/frontend/education/academic-orientation-type";
import { RequestEducationType } from "@Lib/types/frontend/education/request-education-type";
import EducationInformationData from "@FE/Scripts/modules/engineer-membership/education-resume/information-module";
import { ActionResultType } from "@Lib/types/core/action-result-type";

Vue.use(Vuex);

/**
 * state
 */
const state = {
    educationGrade: [] as Array<EducationGradeType>,
    fieldOfStudy: [] as Array<FieldOfStudyType>,
    academicOrientation: [] as Array<AcademicOrientationType>,
};

/**
 * getters
 */
const getters = {
    educationGradeList: (state: any) =>
        state.educationGrade || ([] as Array<EducationGradeType>),
    fieldOfStudyList: (state: any) =>
        state.fieldOfStudy || ([] as Array<FieldOfStudyType>),
    academicOrientationList: (state: any) =>
        state.academicOrientation || ([] as Array<AcademicOrientationType>),
};

/**
 * Mutations
 */
const mutations = {
    /**
     * set education grade list
     * @param state any
     * @param data Array<EducationGradeType>)
     */
    setEducationGradeList(state: any, data: Array<EducationGradeType>) {
        Vue.set(state, "educationGrade", data);
    },

    /**
     * set field of study list
     * @param state any
     * @param data Array<FieldOfStudyType>)
     */
    setFieldOfStudyList(state: any, data: Array<FieldOfStudyType>) {
        Vue.set(state, "fieldOfStudy", data);
    },

    /**
     * Set academic orientation List
     * @param state any
     * @param data Array<AcademicOrientationType>)
     */
    setAcademicOrientationList(
        state: any,
        data: Array<AcademicOrientationType>
    ) {
        Vue.set(state, "academicOrientation", data);
    },
};

/**
 * Actions
 */
const actions = {
    /**
     * Request education grade list
     */
    async requestEduGradeList(context: any): Promise<void> {
        let educationList: ActionResultType = (await EducationInformationData.requestEduGradeList()) as ActionResultType;

        context.commit("setEducationGradeList", educationList.data);
    },

    /**
     * Load field of study list
     */
    async requestFieldOfStudyList(
        context: any,
        educationGrade: EducationGradeType
    ): Promise<void> {
        let educationGrades: ActionResultType = (await EducationInformationData.requestFieldOfStudyList(
            educationGrade
        )) as ActionResultType;
        context.commit("setFieldOfStudyList", educationGrades);
    },

    /**
     * Load academic orientation list
     */
    async requestAcademicOrientationList(
        context: any,
        grade: RequestEducationType
    ): Promise<void> {
        let academicOrientations: ActionResultType = (await EducationInformationData.requestAcademicOrientationList(
            grade
            )) as ActionResultType;

        context.commit("setAcademicOrientationList", academicOrientations.data);
    },
};

// export default new Vuex.Store({
export default {
    state,
    getters,
    mutations,
    actions,
};

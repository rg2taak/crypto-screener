import Vue from "vue";
import * as Vuex from "vuex";
import EducationInformationModule from "@FE/Scripts/stores/engineer-membership/education-resume/education-information-module";
import EducationStatusModule from "@FE/Scripts/stores/engineer-membership/education-resume/education-status-module";
import EducationSaveModule from "@FE/Scripts/modules/engineer-membership/education-resume/save-module";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import { ActionResultType } from "@Lib/types/core/action-result-type";
// import EducationModule from "../modules/education-module";

Vue.use(Vuex);

/**
 * Modules
 */
const modules = {
    EduInfoModule: {
        namespaced: true,
        ...EducationInformationModule,
    },
    EduStatusModule: {
        namespaced: true,
        ...EducationStatusModule,
    },
};

/**
 * state
 */
const state = {};

/**
 * getters
 */
const getters = {};

/**
 * Mutations
 */
const mutations = {};

/**
 * Actions
 */
const actions = {
    /**
     * New-user registration
     * @param conext
     * @param newUserData
     */
    async newEducationResumeRegister(
        conext: any,
        newUserData: EducationInformationType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await EducationSaveModule.newEducationResumeRegister(
            newUserData
        );
        return result;
    },
};

export default new Vuex.Store({
    modules,
    state,
    getters,
    mutations,
    actions,
});

/**
 * Actions enum
 */
export enum EducatonInformationStoreActions {
    requestEduGradeList = "EduInfoModule/requestEduGradeList",
    requestFieldOfStudyList = "EduInfoModule/requestFieldOfStudyList",
    requestAcademicOrientationList = "EduInfoModule/requestAcademicOrientationList",
    loadEducationStatusList = "EduStatusModule/loadEducationStatusList",
    getEducationStatusList = "EduStatusModule/educationStatusList",
    getAcademicOrientationList = "EduInfoModule/academicOrientationList",
    getFieldOfStudyList = "EduInfoModule/fieldOfStudyList",
    getEducationGradeList = "EduInfoModule/educationGradeList",
    newEducationResumeRegister = "newEducationResumeRegister",
}

import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { LicenseLevelType } from "@Lib/types/license/license-level-type";
import OrganizationResumeRegister from "@FE/Scripts/modules/engineer-membership/organization-resume/form-module";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";

Vue.use(Vuex);

/**
 * state
 */
const state = () => ({
    licenseLevel: [] as Array<LicenseLevelType>,
});

/**
 * getters
 */
const getters = {
    licenseLevels: (state: any) =>
        state.licenseLevel || ([] as Array<LicenseLevelType>),
};
/**
 * Mutations
 */
const mutations = {};

/**
 * Actions
 */
const actions = {
    /**
     * Request province list
     */
    async requestProvinceList(context: any): Promise<ActionResultType> {
        let result: ActionResultType = (await OrganizationResumeRegister.requestProvincesOfIran(
        )) as ActionResultType;

        return result;
    },

    /**
     * Request license level list
     */
    async requestLicenseLevelList(context: any): Promise<ActionResultType> {
        let result: ActionResultType = (await OrganizationResumeRegister.requestLicenseLevelList()) as ActionResultType;

        return result;
    },

    /**
     * Confirm new organization resume
     */
    async confirmNewOrgResume(
        context: any,
        newResume: OrganizationResumeDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType = (await OrganizationResumeRegister.confirmNewOrgResume(newResume)) as ActionResultType;

        return result;
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

/**
 * Countries Information Store Actions Enum
 */
export enum OrgResumeRegisterFormStoreAction {
    requestProvincesOfIran = "requestProvincesOfIran",
    requestLicenseLevelList = "requestLicenseLevelList",
    confirmNewOrgResume = "confirmNewOrgResume",
}

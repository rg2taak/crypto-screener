import Vue from "vue";
import * as Vuex from "vuex";
import { BcLetterCodeType } from "@Lib/types/frontend/identification/bc-letter-code-type";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import UserIdentificationInformationModule from "../../modules/user-identification-information-module";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { NationalIDType } from "@Lib/validation/national-id-type";

Vue.use(Vuex);

/**
 * State
 */
const state = () => ({
    bcLetterCodes: [] as Array<BcLetterCodeType>,
});

/**
 * Getters
 */
const getters = {
    bcLetterCodes: (state: any) =>
        state.bcLetterCodes || ([] as Array<BcLetterCodeType>),
};

/**
 * Mutations
 */
const mutations = {
    /**
     * Set birth cirtificate Letter codes
     * @param state any
     * @param data Array<BcLetterCodeType>
     */
    setBcLetterCodes(state: any, data: BcLetterCodeType) {
        Vue.set(state, "bcLetterCodes", data);
    },
};

const actions = {
    /**
     * Load birth cirtificate letter code List
     */
    async loadBcLetterCodeList(context: any): Promise<void> {
        const result: ActionResultType = await UserIdentificationInformationModule.loadBcLetterCodeList();
        context.commit("setBcLetterCodes", result.data);
    },

    /**
     * Request user identification information
     */
    async requestUserIdentificationInformation(
        context: any
    ): Promise<ActionResultType> {
        /* TODO: Request from server */
        const data: UserIdentificationInformationType = {} as UserIdentificationInformationType;

        /* TODO: Remove this code and load from session*/
        let nationalId: NationalIDType = {} as NationalIDType;

        return (await UserIdentificationInformationModule.RequestUserIdentificationInformation()) as ActionResultType;
    },

    /**
     * Register user identification information
     */
    async registerUserIdentificationInformation(
        context: any,
        userIdentificationCertificate: UserIdentificationInformationType
    ): Promise<ActionResultType> {
        return (await UserIdentificationInformationModule.registerUserIdentificationInformation(
            userIdentificationCertificate
        )) as ActionResultType;
    },
};

/**
 * Personal Information Store
 */
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

/**
 * Personal Information Store Actions Enum
 */
export enum UserIdentificationInformationStoreActions {
    loadBcLetterCodeList = "loadBcLetterCodeList",
    RequestUserIdentificationInformation = "requestUserIdentificationInformation",
    RegisterUserIdentificationInformation = "registerUserIdentificationInformation",
}

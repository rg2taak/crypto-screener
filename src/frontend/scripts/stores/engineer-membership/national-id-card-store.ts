import Vue from "vue";
import * as Vuex from "vuex";
import { BcLetterCodeType } from "@Lib/types/frontend/identification/bc-letter-code-type";
import { UserIdentificationInformationType } from "@Lib/types/frontend/identification/user-identification-information-type";
import UserIdentificationInformationModule from "../../modules/user-identification-information-module";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { NationalIDType } from "@Lib/validation/national-id-type";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";
import NationalIdCardModule from "@FE/Scripts/modules/engineer-membership/national-id-card-module";

Vue.use(Vuex);

/**
 * State
 */
const state = {};

/**
 * Getters
 */
const getters = {};

/**
 * Mutations
 */
const mutations = {};

const actions = {
    /**
     * Request national id data
     */
    async requestNationalIdData(context: any): Promise<ActionResultType> {
        /* TODO: Request from server */
        const data: UserIdentificationInformationType = {} as UserIdentificationInformationType;

        /* TODO: Remove this code and load from session*/
        let nationalId: NationalIdDataType = {
            birthCertificateId: "4391830892",
        } as NationalIdDataType;

        return (await NationalIdCardModule.RequestNationalIdData(
            nationalId
        )) as ActionResultType;
    },

    /**
     * Register user identification information
     */
    async registerNationalId(
        context: any,
        nationalIdCard: NationalIdDataType
    ): Promise<ActionResultType> {
        return (await NationalIdCardModule.registerNationalIdCard(
            nationalIdCard
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
export enum NationalIdStoreActions {
    requestNationalIdData = "requestNationalIdData",
    registerNationalId = "registerNationalId",
}

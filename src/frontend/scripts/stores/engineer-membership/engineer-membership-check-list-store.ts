import Vue from "vue";
import * as Vuex from "vuex";
import { CheckListItemType } from "@Lib/types/frontend/global/check-list-item-type";
import { CheckListItemStatusEnum } from "@Lib/enums/components/check-list-item-status";

Vue.use(Vuex);

/**
 * State
 */
const state = {
    membershipCheckList: [] as Array<CheckListItemType>,
};

/**
 * Getters
 */
const getters = {
    membershipCheckList: (state: any) =>
        state.membershipCheckList || ([] as Array<CheckListItemType>),
};

/**
 * Mutations
 */
const mutations = {
    /**
     * Set membership check list
     * @param state any
     * @param data Array<MembershipCheckListType>)
     */
    setMembershipCheckList(state: any, data: Array<CheckListItemType>) {
        Vue.set(state, "membershipCheckList", data);
    },
};

/**
 * Actions
 */
const actions = {
    /**
     * Load Country List
     */
    async loadMembershipCheckList(context: any): Promise<void> {
        const MembershipCheckListData: Array<CheckListItemType> = [
            {
                title: "اطلاعات شناسنامه",
                description:
                    "از این قسمت میتوانید اطلاعات فردی و شخصی خود را وارد نمایید",
                status: {
                    status: CheckListItemStatusEnum.ACCEPTED,
                    responseDate: new Date("2020-12-01"),
                    responseDescription: "تایید 1399/09/20",
                },
                code: "crypto-screener-list-component",
            },
        ];

        context.commit("setMembershipCheckList", MembershipCheckListData);
    },
};

/**
 * Set membership check list store
 */
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

/**
 * Set engineer membership check list store actions Enum
 */
export enum EngineerMembershipCheckListStoreActions {
    loadMembershipCheckList = "loadMembershipCheckList",
}

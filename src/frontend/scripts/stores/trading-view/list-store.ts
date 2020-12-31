import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import OrganizationResumeListData from "@FE/Scripts/modules/engineer-membership/organization-resume/list-module";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import ScreenerListDataModule from "@FE/Scripts/modules/trading-view/screener-module";

Vue.use(Vuex);

/**
 * state
 */
const state = () => ({});

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
 * request organization resume list data
 */
  async requestCryptoScreenerListData(
    context: any,
  ): Promise<ActionResultType> {
    let creptoScreenerList: ActionResultType = (await ScreenerListDataModule
      .requestCryptoScreenerListData()) as ActionResultType;
      creptoScreenerList={
        success:creptoScreenerList.success,
        data:creptoScreenerList.data
      }
    return creptoScreenerList;
  },

  /**
 * request organization resume list data
 */
  async deleteOrgResumeItemList(
    context: any,
    item: OrganizationResumeDataType,
  ): Promise<ActionResultType> {
    let educationList: ActionResultType = (await OrganizationResumeListData
      .deleteOrgResumeItemList(item)) as ActionResultType;

    return educationList;
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
export enum CryptoScreenerListStoreActions {
  RequestCryptoScreenerListData = "requestCryptoScreenerListData",
  deleteOrgResumeItemList = "deleteOrgResumeItemList",
}

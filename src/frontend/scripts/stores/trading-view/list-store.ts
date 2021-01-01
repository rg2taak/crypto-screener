import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
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

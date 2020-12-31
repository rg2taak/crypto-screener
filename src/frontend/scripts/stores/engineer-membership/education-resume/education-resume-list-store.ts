import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import EducationResumeListData from "@FE/Scripts/modules/engineer-membership/education-resume/list-module";

Vue.use(Vuex);

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
   * Request education list
   */
  async requestEduResumeList(context: any): Promise<ActionResultType> {
    let educationList: ActionResultType =
      (await EducationResumeListData
        .requestEduResumeList()) as ActionResultType;

    return educationList;
  },
};

export default new Vuex.Store({
  // export default {
  state,
  getters,
  mutations,
  actions,
});

export enum EducationResumeListStoreAction {
  requestEduResumeList = "requestEduResumeList",
}

import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { LicenseLevelType } from "@Lib/types/license/license-level-type";
import OrganizationResumeListData from "@FE/Scripts/modules/engineer-membership/organization-resume/list-module";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";

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
  async requestOrganizationResumeListData(
    context: any,
  ): Promise<ActionResultType> {
    let educationList: ActionResultType = (await OrganizationResumeListData
      .requestOrgResumeList()) as ActionResultType;

    return educationList;
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
export enum OrganizationResumeListStoreActions {
  requestOrganizationResumeListData = "requestOrganizationResumeListData",
  deleteOrgResumeItemList = "deleteOrgResumeItemList",
}

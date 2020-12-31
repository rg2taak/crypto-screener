import Vue from "vue";
import * as Vuex from "vuex";
import { EducationStatusType } from "@Lib/types/frontend/education/education-status-type";

Vue.use(Vuex);

/**
 * state
 */
const state = {
  educationStatus: [] as Array<EducationStatusType>,
};

/**
 * getters
 */
const getters = {
  educationStatusList: (state: any) =>
    state.educationStatus || ([] as Array<EducationStatusType>),
};

/**
 * Mutations
 */
const mutations = {
  /**
   * set education state list
   * @param state any
   * @param data Array<EducationGradeType>)
   */
  setEducationStatusList(state: any, data: Array<EducationStatusType>) {
    Vue.set(state, "educationStatus", data);
  },
};

/**
 * Actions
 */
const actions = {
  /**
   * Load education status list
   */
  async loadEducationStatusList(context: any): Promise<void> {
    let educationStatusList: Array<EducationStatusType> = (await import(
      "@/mock/education-satatus.json"
    )) as Array<EducationStatusType>;
    context.commit("setEducationStatusList", educationStatusList);
  },
};

// export default new Vuex.Store({
export default {
  state,
  getters,
  mutations,
  actions,
};

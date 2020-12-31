import * as _ from "lodash";
import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import ContactsListData from "@FE/Scripts/modules/engineer-membership/contacts/address/list-module";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";

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
 * Request ontects resume list data
 */
  async requestContactsListData(
    context: any,
  ): Promise<ActionResultType> {
    let contactsList: ActionResultType = (await ContactsListData
      .requestContactsListData()) as ActionResultType;

    return contactsList;
  },

  /**
 * request organization resume list data
 */
  async deleteAddressItemList(
    context: any,
    item: AddressDataType,
  ): Promise<ActionResultType> {
    let addressList: ActionResultType = (await ContactsListData
      .deleteAddressItemList(item)) as ActionResultType;

    return addressList;
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
export enum ContactsListStoreAction {
  requestContactsListData = "requestContactsListData",
  deleteAddressItemList = "deleteAddressItemList",
}

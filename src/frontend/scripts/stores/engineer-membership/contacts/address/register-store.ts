import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { LicenseLevelType } from "@Lib/types/license/license-level-type";
import AddressRegister from "@FE/Scripts/modules/engineer-membership/contacts/address/register-module";
import { RequestCityType } from "@Lib/types/frontend/global/request-city-type";
import CountryModule from "@FE/Scripts/modules/country-module";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";

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
     * Request cities list
     */
  async requestCitiesList(
    context: any,
  ): Promise<ActionResultType> {

    const data = await CountryModule.requestCitiesOfQazvin();
    let cities: Array<CityType> = data.data as Array<CityType>;
    return {
      success: true,
      data: cities,
    };
  },

  /**
     * Request license level list
     */
  async requestAddressTypes(context: any): Promise<ActionResultType> {
    let result: ActionResultType =
      (await AddressRegister.requestAddressTypes()) as ActionResultType;

    return result;
  },

  /**
     * Confirm new address resume
     */
  async confirmNewAddress(
    context: any,
    newAddress: AddressDataType,
  ): Promise<ActionResultType> {
    let result: ActionResultType = (await AddressRegister.confirmNewAddress(
      newAddress,
    )) as ActionResultType;

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
 * Contacts form store actions Enum
 */
export enum AddressRegisterStoreAction {
  requestCitiesList = "requestCitiesList",
  requestAddressTypes = "requestAddressTypes",
  confirmNewAddress = "confirmNewAddress",
}

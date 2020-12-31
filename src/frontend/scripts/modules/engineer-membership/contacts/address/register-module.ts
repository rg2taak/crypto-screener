import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";

/**
 * Organization resume register module
 */
export default class AddressRegister {
  /**
     * Request province list for load data
     */
  public static async requestProvinceList(
    country: CountryType,
  ): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("orgResume.request-province-list");

    const axiosResult: AxiosResponse = await AxiosModule.post(url, country);
    result = axiosResult.data as ActionResultType;

    return result;
  }

  /**
     * Request license level list for load data
     */
  public static async requestAddressTypes(): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath(
      "contacts.request-address-types",
    );

    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }

  /**
     * Confirm new address
     */
  public static async confirmNewAddress(
    newAddress: AddressDataType,
  ): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath(
      "contacts.confirm-new-address",
    );
    /** TODO: Validate data */

    const axiosResult: AxiosResponse = await AxiosModule.post(url, newAddress);
    result = axiosResult.data as ActionResultType;

    return result;
  }
}

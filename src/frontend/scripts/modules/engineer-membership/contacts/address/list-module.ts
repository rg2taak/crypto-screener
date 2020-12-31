import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";

/**
 * Organization Resume list module
 */
export default class ContactsListData {
  /**
   * Request contacts list data for load data
   */
  public static async requestContactsListData(): Promise<ActionResultType> {
    await App.loadRoutes();
    let result: ActionResultType;
    const url: string = App.routePath("contacts.request-contacts-list");

    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }
  /**
   * Delete address item list
   */
  public static async deleteAddressItemList(
    item: AddressDataType,
  ): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("contacts.delete-address-item-list");

    const axiosResult: AxiosResponse = await AxiosModule.post(url, item);
    result = axiosResult.data as ActionResultType;

    return result;
  }
}

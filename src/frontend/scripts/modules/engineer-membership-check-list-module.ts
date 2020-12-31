import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "../core/app";
import AxiosModule from "./axios-module";

/**
 * engineer membrship check list module
 */
export default class engineerMembershipCheckListModule {
  /**
   * Load check list
   */
  public static async loadCheckList(): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType={
      success:true,
      data:""
    }as ActionResultType;
    // const url: string = App.routePath("country.countries");

    // const axiosResult: AxiosResponse = await AxiosModule.get(url);
    // result = axiosResult.data as ActionResultType;

    return result;
  }
}

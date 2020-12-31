import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * Organization Resume list module
 */
export default class ScreenerListDataModule {
  /**
   * Request Organization resume list for load data
   */
  public static async requestCryptoScreenerListData(): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("screener.request-crypto-screener-list-data");
    console.log(url);
    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }

}

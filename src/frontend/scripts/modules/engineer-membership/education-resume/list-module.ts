import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * Education Resume list module
 */
export default class EducationResumeListData{
  /**
   * Request education resume list for load data
   */
  public static async requestEduResumeList(): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("eduResume.request-edu-resume-list");

    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }
}

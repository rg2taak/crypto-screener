import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";

/**
 * Organization Resume list module
 */
export default class OrganizationResumeListData {
  /**
   * Request Organization resume list for load data
   */
  public static async requestOrgResumeList(): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("orgResume.request-org-resume-list");

    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }
  /**
   * Request Organization resume list for load data
   */
  public static async deleteOrgResumeItemList(
    item: OrganizationResumeDataType,
  ): Promise<ActionResultType> {
    await App.loadRoutes();

    let result: ActionResultType;
    const url: string = App.routePath("orgResume.delete-org-resume-item-list");

    const axiosResult: AxiosResponse = await AxiosModule.post(url,item);
    result = axiosResult.data as ActionResultType;

    return result;
  }
}

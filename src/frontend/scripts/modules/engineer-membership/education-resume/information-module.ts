import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "@FE/Scripts/core/app";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { RequestEducationType } from "@Lib/types/frontend/education/request-education-type";
import { EducationGradeType } from "@Lib/types/frontend/education/education-grade-type";

/**
 * Education Information module
 */
export default class EducationInformationData {
    /**
     * Request education grade list for load data
     */
    public static async requestEduGradeList(): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("eduResume.request-edu-grade-list");

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request education field of study list for load data
     */
    public static async requestFieldOfStudyList(
        educationGrade: EducationGradeType
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath(
            "eduResume.request-field-of-study-list"
        );
        const axiosResult: AxiosResponse = await AxiosModule.post(
            url,
            educationGrade
        );
        result = axiosResult.data as ActionResultType;

        return result.data;
    }

    /**
     * Request education field of study list for load data
     */
    public static async requestAcademicOrientationList(
        academicOrientations: RequestEducationType
    ): Promise<ActionResultType> {
        await App.loadRoutes();
        let result: ActionResultType;
        const url: string = App.routePath(
            "eduResume.request-academic-orientation-list"
        );
        const axiosResult: AxiosResponse = await AxiosModule.post(
            url,
            academicOrientations
        );
        result = axiosResult.data as ActionResultType;

        return result;
    }
}
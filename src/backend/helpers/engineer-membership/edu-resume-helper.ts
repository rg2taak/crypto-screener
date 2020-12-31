import { ActionResultType } from "@Lib/types/core/action-result-type";
import { Routes } from "@BE/helpers/service-route-helper";
import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";
import { EducationGradeType } from "@Lib/types/frontend/education/education-grade-type";
import { FieldOfStudyType } from "@Lib/types/frontend/education/field-of-study-type";
import { AcademicOrientationType } from "@Lib/types/frontend/education/academic-orientation-type";
import { RequestEducationType } from "@Lib/types/frontend/education/request-education-type";
import EducationResumeInformationValidator from "@FE/Scripts/validators/engineer-membership/education-information-validator";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";

/**
 * Education resume list helper class
 */
export default class EduResumeHelper {
    /**
     * Request education resume list
     */
    public static async requestEduResumeList(): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["eduResume.req-eud-resume-list"];

        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        // let educationList: Array<EducationInformationType> = (await import(
        //     "@/mock/education-list-data.json"
        // )) as Array<EducationInformationType>;

        result = {
            success: true,
            data: "",
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request education grade list
     */
    public static async requestEduGradeList(): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["eduResume.req-edu-grad-list"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let educationGradeList: Array<EducationGradeType> = (await import(
            "@/mock/educations.json"
        )) as Array<EducationGradeType>;
        educationGradeList = educationGradeList.map((x) => ({
            code: x.code,
            name: x.name,
        }));

        result = {
            success: true,
            data: educationGradeList,
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request field of study list
     */
    public static async requestFieldOfStudyList(
        educationGrade: EducationGradeType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["eduResume.req-field-of-study-list"];

        let educationGradeList: Array<EducationGradeType> = (await import(
            "@/mock/educations.json"
        )) as Array<EducationGradeType>;

        let educationGrades: EducationGradeType = (educationGradeList.find(
            (x) => x.code == educationGrade.code
        ) || {}) as EducationGradeType;

        result = {
            success: true,
            data: educationGrades.fieldOfStudy,
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request academiv orintation list
     */
    public static async requestAcademicOrientationList(
        grade: RequestEducationType
    ): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["eduResume.req-academic-orientation-list"];

        let academicOrientations: Array<AcademicOrientationType> = [];
        let educationGradeList: Array<EducationGradeType> = (await import(
            "@/mock/educations.json"
        )) as Array<EducationGradeType>;

        let educationGrades: EducationGradeType = educationGradeList.find(
            (x) => x.code == grade.grade.code
        ) as EducationGradeType;

        if (educationGrades) {
            const fieldOfStudyData: FieldOfStudyType = educationGrades.fieldOfStudy?.find(
                (x) => x.code == grade.fieldOfStudy.code
            ) as FieldOfStudyType;

            if (fieldOfStudyData) {
                academicOrientations = (
                    fieldOfStudyData.academicOrientation || []
                ).map((x) => ({
                    code: x.code,
                    name: x.name,
                }));
            }
        }
        result = {
            success: true,
            data: academicOrientations,
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * New education resume register
     */
    public static async newEducationResumeRegister(
        newUserData: EducationInformationType
    ): Promise<ActionResultType> {
        let result: ActionResultType;
        const url = Routes["eduResume.req-academic-orientation-list"];
        /* Validate data */
        const validator: EducationResumeInformationValidator = new EducationResumeInformationValidator();
        const validationResult: ActionResultType = validator.validate(
            newUserData
        );

        if (!validationResult.success) {
            const validationError: ValidatorErrorType = validationResult.data as ValidatorErrorType;

            result = {
                success: false,
                data: validationError.errors,
            };
        } else {
            /* TODO: send to server */
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
            //TODO: Clear this code
            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            } as ActionResultType;
        }
        // result = axiosResult.data as ActionResultType;

        return result;
    }
}

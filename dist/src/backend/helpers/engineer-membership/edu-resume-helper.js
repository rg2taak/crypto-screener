"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_route_helper_1 = require("../service-route-helper");
const education_information_validator_1 = require("../../../frontend/scripts/validators/engineer-membership/education-information-validator");
/**
 * Education resume list helper class
 */
class EduResumeHelper {
    /**
     * Request education resume list
     */
    static async requestEduResumeList() {
        let result;
        const url = service_route_helper_1.Routes["eduResume.req-eud-resume-list"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        // let educationList: Array<EducationInformationType> = (await import(
        //     "@/mock/education-list-data.json"
        // )) as Array<EducationInformationType>;
        result = {
            success: true,
            data: "",
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Request education grade list
     */
    static async requestEduGradeList() {
        let result;
        const url = service_route_helper_1.Routes["eduResume.req-edu-grad-list"];
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let educationGradeList = (await Promise.resolve().then(() => require("../../../mock/educations.json")));
        educationGradeList = educationGradeList.map((x) => ({
            code: x.code,
            name: x.name,
        }));
        result = {
            success: true,
            data: educationGradeList,
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Request field of study list
     */
    static async requestFieldOfStudyList(educationGrade) {
        let result;
        const url = service_route_helper_1.Routes["eduResume.req-field-of-study-list"];
        let educationGradeList = (await Promise.resolve().then(() => require("../../../mock/educations.json")));
        let educationGrades = (educationGradeList.find((x) => x.code == educationGrade.code) || {});
        result = {
            success: true,
            data: educationGrades.fieldOfStudy,
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * Request academiv orintation list
     */
    static async requestAcademicOrientationList(grade) {
        let result;
        const url = service_route_helper_1.Routes["eduResume.req-academic-orientation-list"];
        let academicOrientations = [];
        let educationGradeList = (await Promise.resolve().then(() => require("../../../mock/educations.json")));
        let educationGrades = educationGradeList.find((x) => x.code == grade.grade.code);
        if (educationGrades) {
            const fieldOfStudyData = educationGrades.fieldOfStudy?.find((x) => x.code == grade.fieldOfStudy.code);
            if (fieldOfStudyData) {
                academicOrientations = (fieldOfStudyData.academicOrientation || []).map((x) => ({
                    code: x.code,
                    name: x.name,
                }));
            }
        }
        result = {
            success: true,
            data: academicOrientations,
        };
        // result = axiosResult.data as ActionResultType;
        return result;
    }
    /**
     * New education resume register
     */
    static async newEducationResumeRegister(newUserData) {
        let result;
        const url = service_route_helper_1.Routes["eduResume.req-academic-orientation-list"];
        /* Validate data */
        const validator = new education_information_validator_1.default();
        const validationResult = validator.validate(newUserData);
        if (!validationResult.success) {
            const validationError = validationResult.data;
            result = {
                success: false,
                data: validationError.errors,
            };
        }
        else {
            /* TODO: send to server */
            // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
            //TODO: Clear this code
            result = {
                success: true,
                data: "ثبت با موفقیت انجام شد",
            };
        }
        // result = axiosResult.data as ActionResultType;
        return result;
    }
}
exports.default = EduResumeHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWR1LXJlc3VtZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoic3JjLyIsInNvdXJjZXMiOlsic3JjL2JhY2tlbmQvaGVscGVycy9lbmdpbmVlci1tZW1iZXJzaGlwL2VkdS1yZXN1bWUtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esa0VBQTBEO0FBTTFELDhJQUE2SDtBQUc3SDs7R0FFRztBQUNILE1BQXFCLGVBQWU7SUFDaEM7O09BRUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQjtRQUNwQyxJQUFJLE1BQXdCLENBQUM7UUFFN0IsTUFBTSxHQUFHLEdBQUcsNkJBQU0sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBRXBELDRFQUE0RTtRQUM1RSx1QkFBdUI7UUFDdkIsc0VBQXNFO1FBQ3RFLHdDQUF3QztRQUN4Qyx5Q0FBeUM7UUFFekMsTUFBTSxHQUFHO1lBQ0wsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsRUFBRTtTQUNTLENBQUM7UUFDdEIsaURBQWlEO1FBRWpELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CO1FBQ25DLElBQUksTUFBd0IsQ0FBQztRQUU3QixNQUFNLEdBQUcsR0FBRyw2QkFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDbEQsNEVBQTRFO1FBQzVFLHVCQUF1QjtRQUN2QixJQUFJLGtCQUFrQixHQUE4QixDQUFDLDRFQUVwRCxDQUE4QixDQUFDO1FBQ2hDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoRCxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDWixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDZixDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sR0FBRztZQUNMLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLGtCQUFr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
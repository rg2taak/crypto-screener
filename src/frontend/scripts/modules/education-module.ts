// import { AxiosResponse } from "axios";
// import { ActionResultType } from "@Lib/types/core/action-result-type";
// import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
// import App from "../core/app";
// import AxiosModule from "./axios-module";
// import NewUserRegisterRequestValidator from "../validators/auth/new-user-register-request-validator";
// import { EducationInformationType } from "@Lib/types/frontend/global/education-information-type";

// /**
//  * Auth module
//  */
// export default class EducationModule {
//   /**
//    * Send request for user register token sms
//    * @param newUserData 
//    */
//   public static async newEducationResumeRegister(
//     newUserData: EducationInformationType
//   ): Promise<ActionResultType> {
//     // let result: ActionResultType;

//     // await App.loadRoutes();
//     // const url: string = App.routePath("auth.new-user-register-request");

//     // /* Validate data */
//     // const validator: NewUserRegisterRequestValidator = new NewUserRegisterRequestValidator();
//     // const validationResult: ActionResultType = validator.validate(newUserData);

//     // if (!validationResult.success) {
//     //   const validationError: ValidatorErrorType = validationResult.data as ValidatorErrorType;

//     //   result = {
//     //     success: false,
//     //     data: validationError.errors,
//     //   };
//     // } else {
//     //   const axiosResult: AxiosResponse = await AxiosModule.post(
//     //     url,
//     //     newUserData
//     //   );

//     //   result = axiosResult.data as ActionResultType;
//     // }
//     return "";
//   }
// }

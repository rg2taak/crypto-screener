import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { OtpResponseType } from "@Lib/types/frontend/auth/opt-response-type";
import { UserLoginDataType } from "@Lib/types/frontend/auth/user-login-data-type";
import { UserLoginOtpType } from "@Lib/types/frontend/auth/user-login-otp-type";
import { UserRegisterType } from "@Lib/types/frontend/auth/user-register-type";
import { UserResetPasswordType } from "@Lib/types/frontend/auth/user-reset-password";
import { ValidatorErrorType } from "@Lib/types/frontend/global/validator-error-type";
import App from "../core/app";
import AxiosModule from "./axios-module";
import checkUserActivationCodeValidator from "../validators/auth/check-user-activation-code-validator";
import ConfirmNewUserRegisterValidator from "../validators/auth/confirm-new-user-register-validator";
import NewUserRegisterRequestValidator from "../validators/auth/new-user-register-request-validator";
import UserLoginDataOtpValidator from "../validators/auth/user-login-data-otp-validator";
import UserLoginValidator from "@FE/Scripts/validators/auth/user-login-validator";
import UserNationalIdValidator from "../validators/auth/user-nationalid-validator";
import UserphoneNumberValidator from "../validators/auth/user-phone-number-validator";
import UserRequestForgetPasswordTokenValidator from "../validators/auth/user-request-forget-password-token-validator";
import UserRequestOptTokenValidator from "../validators/auth/user-request-otp-token-validator";
import UserResetPasswordValidator from "../validators/auth/user-reset-password-validator";
import { NationalIDType } from "@Lib/validation/national-id-type";

/**
 * Auth module
 */
export default class AuthModule {
  /**
   * Load countries list
   */
  public static async loadCountries(): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.login-by-otp-token");

    const axiosResult: AxiosResponse = await AxiosModule.get(url);
    result = axiosResult.data as ActionResultType;

    return result;
  }

  /**
   * Attemp to login
   */
  public static async loginByUserData(
    userData: UserLoginDataType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.login-by-user-data");

    /* Validate data */
    const validator: UserLoginValidator = new UserLoginValidator();
    const validationResult: ActionResultType = validator.validate(userData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Request to OTP token to login
   */
  public static async requestOtpToken(
    userOtpData: UserLoginOtpType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.request-otp-token");

    /* Validate data */
    const validator: UserRequestOptTokenValidator =
      new UserRequestOptTokenValidator();
    const validationResult: ActionResultType = validator.validate(userOtpData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        userOtpData,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Attemp to login OTP token
   */
  public static async loginByOtpToken(
    otpData: OtpResponseType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.login-by-otp-token");

    /* Validate data */
    const validator: UserLoginDataOtpValidator =
      new UserLoginDataOtpValidator();
    const validationResult: ActionResultType = validator.validate(otpData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(url, otpData);

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Request forget password token to sms user
   * @param userOtpData UserLoginOtpType nationalId and phone number
   */
  public static async requestForgetPasswordToken(
    userOtpData: UserLoginOtpType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.request-forget-password-token");

    /* Validate data */
    const validator: UserRequestForgetPasswordTokenValidator =
      new UserRequestForgetPasswordTokenValidator();
    const validationResult: ActionResultType = validator.validate(userOtpData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        userOtpData,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Reset user password
   * @param newUserPasswordData UserResetPasswordType forget password token and new password
   */
  public static async resetPassword(
    newUserPasswordData: UserResetPasswordType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.reset-password");

    /* Validate data */
    const validator: UserResetPasswordValidator =
      new UserResetPasswordValidator();
    const validationResult: ActionResultType = validator.validate(
      newUserPasswordData,
    );

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        newUserPasswordData,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Check user national id
   * @param nationalId string user national id
   */
  public static async checkUserNationalId(
    nationalId: NationalIDType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.check-user-national-id");

    /* Validate data */
    const validator: UserNationalIdValidator = new UserNationalIdValidator();
    const validationResult: ActionResultType = validator.validate(nationalId);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        nationalId,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Check user phone number
   * @param phoneNumber string user phone number
   */
  public static async checkUserPhoneNumber(
    phoneNumber: string,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.check-user-phone-number");

    /* Validate data */
    const validator: UserphoneNumberValidator = new UserphoneNumberValidator();
    const validationResult: ActionResultType = validator.validate(phoneNumber);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        phoneNumber,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Send request for user register token sms
   * @param newUserData UserRegisterType new user data (firstName,lastName,nationalId,phoneNumber)
   */
  public static async newUserRegisterRequest(
    newUserData: UserRegisterType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.new-user-register-request");

    /* Validate data */
    const validator: NewUserRegisterRequestValidator =
      new NewUserRegisterRequestValidator();
    const validationResult: ActionResultType = validator.validate(newUserData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        newUserData,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Register new user
   * @param newUserData UserRegisterType new user data (firstName,lastName,nationalId,phoneNumber)
   */
  public static async confirmNewUserRegister(
    otpData: OtpResponseType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath("auth.confirm-new-user-register");
    /* Validate data */
    const validator: ConfirmNewUserRegisterValidator =
      new ConfirmNewUserRegisterValidator();
    const validationResult: ActionResultType = validator.validate(otpData);

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(url, otpData);

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }

  /**
   * Check user activation code rseset password
   * @param activationCodeData OtpResponseType
   */
  public static async checkUserActivationCodeResetPassword(
    activationCodeData: OtpResponseType,
  ): Promise<ActionResultType> {
    let result: ActionResultType;

    await App.loadRoutes();
    const url: string = App.routePath(
      "auth.check-user-activation-code-reset-password",
    );

    /* Validate data */

    const validator: checkUserActivationCodeValidator =
      new checkUserActivationCodeValidator();
    const validationResult: ActionResultType = validator.validate(
      activationCodeData,
    );

    if (!validationResult.success) {
      const validationError: ValidatorErrorType = validationResult
        .data as ValidatorErrorType;

      result = {
        success: false,
        data: validationError.errors,
      };
    } else {
      const axiosResult: AxiosResponse = await AxiosModule.post(
        url,
        activationCodeData,
      );

      result = axiosResult.data as ActionResultType;
    }
    return result;
  }
}

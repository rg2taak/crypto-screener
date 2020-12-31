import Vue from "vue";
import * as Vuex from "vuex";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { OtpResponseType } from "@Lib/types/frontend/auth/opt-response-type";
import { UserLoginDataType } from "@Lib/types/frontend/auth/user-login-data-type";
import { UserLoginOtpType } from "@Lib/types/frontend/auth/user-login-otp-type";
import { UserRegisterType } from "@Lib/types/frontend/auth/user-register-type";
import { UserResetPasswordType } from "@Lib/types/frontend/auth/user-reset-password";
import AuthModule from "../modules/auth-module";
import { NationalIDType } from "@Lib/validation/national-id-type";

const state = {};
const getters = {};
const mutations = {};

/**
 * Actions
 */
const actions = {
    /**
     * Attempt to login user
     * @param userData UserLoginDataType user login data
     */
    async loginByUserData(
        conext: any,
        userData: UserLoginDataType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.loginByUserData(
            userData
        );
        if(result.success){
            result.data="/";
        }
        return result;
    },

    /**
     * Send request to server for send opt token sms
     * @param userData UserLoginOtpType user otp data (nationalId , phoneNumber)
     */
    async requestOTPToken(
        conext: any,
        userOtpData: UserLoginOtpType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.requestOtpToken(
            userOtpData
        );

        return result;
    },

    /**
     * Attempt to login user by otp token
     * @param token  number opt token
     */
    async loginByOtpToken(
        conext: any,
        otpdata: OtpResponseType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.loginByOtpToken(
            otpdata
        );
        return result;
    },

    /**
     * Send request for send sms reset password token
     * @param userData
     */
    async requestForgetPasswordToken(
        conext: any,
        userData: UserLoginOtpType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.requestForgetPasswordToken(
            userData
        );

        return result;
    },

    /**
     * Reset user password
     * @param newUserPasswordData UserResetPassword forget Password Token and new password
     */
    async resetPassword(
        conext: any,
        newUserPasswordData: UserResetPasswordType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.resetPassword(
            newUserPasswordData
        );

        return result;
    },

    /**
     * Check user entred nationalid exist or not exist
     * @param nationalId string user national id
     */
    async checkUserNationalId(
        conext: any,
        nationalId: NationalIDType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.checkUserNationalId(
            nationalId
        );

        return result;
    },

    /**
     * Check user phone cell number exist or not exist
     * @param phoneNumber
     */
    async checkUserPhoneNumber(
        conext: any,
        phoneNumber: string
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.checkUserPhoneNumber(
            phoneNumber
        );

        return result;
    },

    /**
     * New-user registration
     * @param conext
     * @param newUserData
     */
    async newUserRegisterRequest(
        conext: any,
        newUserData: UserRegisterType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.newUserRegisterRequest(
            newUserData
        );

        return result;
    },

    /**
     * Create a new user
     * @param newUserData UserRegisterType user new data
     */
    async confirmNewUserRegister(
        conext: any,
        userData: OtpResponseType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.confirmNewUserRegister(
            userData
        );

        return result;
    },

    /**
     * Check user activation code reset password exist or not exist
     * @param activationCodeData
     */
    async checkUserActivationCodeResetPassword(
        conext: any,
        activationCodeData: OtpResponseType
    ): Promise<ActionResultType> {
        const result: ActionResultType = await AuthModule.checkUserActivationCodeResetPassword(
            activationCodeData
        );

        return result;
    },
};

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

/**
 * Actions enum
 */
export enum LoginStoreActions {
    loginByUserData = "loginByUserData",
    requestOTPToken = "requestOTPToken",
    loginByOtpToken = "loginByOtpToken",
    requestForgetPasswordToken = "requestForgetPasswordToken",
    resetPassword = "resetPassword",
    checkUserNationalId = "checkUserNationalId",
    checkUserPhoneNumber = "checkUserPhoneNumber",
    newUserRegisterRequest = "newUserRegisterRequest",
    confirmNewUserRegister = "confirmNewUserRegister",
    checkUserActivationCodeResetPassword = "checkUserActivationCodeResetPassword",
}

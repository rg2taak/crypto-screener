export const Routes = {
    "auth.request-otp-token-register":
        "http://185.165.40.114:8008/auth/newUserRegisterRequest",
    "auth.confirm-new-user-register":
        "http://185.165.40.114:8008/auth/confirmNewUserRegister",
    "auth.check-user-national-id":
        "http://185.165.40.114:8008/auth/checkUserNationalId",
    "auth.check-user-phone-number":
        "http://185.165.40.114:8008/auth/checkUserPhoneNumber",
    "auth.reset-password": "http://185.165.40.114:8008/auth/resetPassword",
    "auth.request-forget-password-token":
        "http://185.165.40.114:8008/auth/requestForgetPasswordToken",
    "auth.check-user-activation-code-rseset-password": "http://185.165.40.114:8008/auth/checkUserActivationCodeRsesetPassword",
    "auth.request-otp-token": "http://185.165.40.114:8008/auth/requestOtpToken",
    "auth.login-by-user-data":
        "http://185.165.40.114:8008/auth/loginByUserData",
    "auth.login-by-otp-token":
        "http://185.165.40.114:8008/auth/loginByOtpToken",
    /************************************************************************ */
    "auth.request-countries-list":
        "http://185.165.40.114:8009/api/location/requestCountriesList",
    "auth.request-provinces-of-country":
        "http://185.165.40.114:8009/api/location/requestProvincesOfCountry/#COUNTRY-ID#",
    "auth.request-cities-of-province":
        "http://185.165.40.114:8009/api/location/requestCitiesOfProvince/#PROVINCE-ID#",
    "auth.request-provinces-of-iran":
        "http://185.165.40.114:8009/api/location/requestProvincesOfIran",
    "auth.request-cities-of-qazvin":
        "http://185.165.40.114:8009/api/location/requestCitiesOfQazvin",
    /************************************************************************ */
    "education.request-sections":
        "http://185.165.40.114:8009/api/education/list/requestSections",
    "education.request-study-fields":
        "http://185.165.40.114:8009/api/education/list/requestStudyFields",
    "education.request-status":
        "http://185.165.40.114:8009/api/education/list/requestStatus",
    /************************************************************************ */
    "education.request-licence-level":
        "http://185.165.40.114:8009/api/employment/resume/requestLicenceLevel",
    /************************************************************************ */
    "eduResume.register-education-resume":
        "http://185.165.40.114:8009/api/employment/resume/education/registerEducationResume",
    "eduResume.request-education-resume":
        "http://185.165.40.114:8009/api/employment/resume/education/requestEducationResume",
    "eduResume.request-for-confirm-education-resume":
        "http://185.165.40.114:8009/api/employment/resume/education/requestForConfirmEducationResume",
    "eduResume.request-for-delete-education-resume":
        "http://185.165.40.114:8009/api/employment/resume/education/requestForDeleteEducationResume",
    "eduResume.request-for-edit-education-resume":
        "http://185.165.40.114:8009/api/employment/resume/education/requestForEditEducationResume",
    /************************************************************************ */
    "orgResume.register-employment-membership-resume":
        "http://185.165.40.114:8009/api/employment/resume/membership/registerEmploymentMembershipResume",
    "orgResume.request-employment-membership-resume":
        "http://185.165.40.114:8009/api/employment/resume/membership/requestEmploymentMembershipResume",
    "orgResume.request-for-confirm-employment-membership-resume":
        "http://185.165.40.114:8009/api/employment/resume/membership/requestForConfirmEmploymentMembershipResume",
    "orgResume.request-for-delete-employment-membership-resume":
        "http://185.165.40.114:8009/api/employment/resume/membership/requestForDeleteEmploymentMembershipResume",
    "orgResume.request-for-edit-employment-membership-resume":
        "http://185.165.40.114:8009/api/employment/resume/membership/requestForEditEmploymentMembershipResume",
    /************************************************************************ */
    "userId.register-user-identification-information":
        "http://185.165.40.114:8009/api/userIdentification/registerUserIdentificationInformation",
    "userId.request-user-identification-information":
        "http://185.165.40.114:8009/api/userIdentification/requestUserIdentificationInformation",
    /************************************************************************ */
    "contacts.request-address":
        "http://185.165.40.114:8009/api/employment/address/requestAddress/#NATIONAL-ID#",
    "contacts.register-address":
        "http://185.165.40.114:8009/api/employment/address/registerAddress",
    "contacts.request-for-confirm-address":
        "http://185.165.40.114:8009/api/employment/address/requestForConfirmAddress",
    "contacts.request-for-delete-address":
        "http://185.165.40.114:8009/api/employment/address/requestForDeleteAddress",
    "contacts.request-for-edit-address":
        "http://185.165.40.114:8009/api/employment/address/requestForEditAddress",
    /************************************************************************ */

    "auth.login": "http://185.165.40.114:8585/auth/login",
    "userId.reg-user-id-info":
        "http://185.165.40.114:8009/api/userIdentification/requestUserIdentificationInformation",
    "eduResume.req-eud-resume-list": "http://185.165.40.114:8586/user/id/reg",
    "eduResume.req-edu-grad-list": "http://185.165.40.114:8586/user/id/reg",
    "eduResume.req-field-of-study-list":
        "http://185.165.40.114:8586/user/id/reg",
    "eduResume.req-academic-orientation-list":
        "http://185.165.40.114:8586/user/id/reg",
    "orgResume.request-org-resume-list":
        "http://185.165.40.114:8586/user/id/reg",
    "orgResume.delete-org-resume-item":
        "http://185.165.40.114:8586/user/id/reg",
    "orgResume.request-province": "http://185.165.40.114:8586/user/id/reg",
    "contacts.request-contacts-list":
        "http://185.165.40.114:8586/api/employment/address/requestAddress",
    "contacts.delete-address-item-list":
        "http://185.165.40.114:8586/api/employment/address/requestForDeleteAddress",
    "contacts.request-address-types":
        "http://185.165.40.114:8586/api/employment/address/requestAddressTypes",
    "contacts.confirm-new-address":
        "http://185.165.40.114:8586/api/employment/address/registerAddress",
};

<template lang="pug">
.login-container
    .container
        .columns.is-align-items-center.is-fullheight.is-gapless
            .column.is-3
                logo
                .logo-title
                    | سازمان نظام مهندسی ساختمان استان قزوین

                login-form(
                    v-if="isLoginMode",
                    @on-change-form-mode-register="setRegisterFormMode",
                    @on-change-form-mode-reset="setResetPasswordFormMode"
                )

                register(
                    v-if="isRegisterMode",
                    @on-change-form-mode="setLoginFormMode"
                )

                reset-password(
                    v-if="isResetPasswordMode",
                    @on-change-form-mode="setLoginFormMode"
                )
</template>

<script lang="ts">
import Vue, { ComputedOptions } from "vue";
import { use } from "vue/types/umd";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { FormModesEnum } from "@Lib/enums/frontend/form-modes-enum";
import { UserLoginDataType } from "@Lib/types/frontend/auth/user-login-data-type";
import { UserLoginOtpType } from "@Lib/types/frontend/auth/user-login-otp-type";
import Helper from "@Core/Helpers/frontend-global-helper";
import LoginFormComponent from "@FE/Components/auth/login-form.vue";
import LoginStore from "@FE/Scripts/stores/login-store";
import LogoComponent from "@FE/Components/global/logo.vue";
import RegisterComponent from "@FE/Components/auth/register.vue";
import ResetPasswordComponent from "@FE/Components/auth/reset-password.vue";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Login
 */
export default Vue.extend({
    name: "Login",

    store: LoginStore,

    components: {
        Logo: LogoComponent,
        LoginForm: LoginFormComponent,
        Register: RegisterComponent,
        ResetPassword: ResetPasswordComponent,
    },

    data: () => ({
        formMode: FormModesEnum.VIEW,
        selectedOption: null,
        options: [],
    }),

    computed: {
        isLoginMode() {
            return this.formMode == FormModesEnum.LOGIN_FORM;
        },

        isRegisterMode() {
            return this.formMode == FormModesEnum.REGISTER_FORM;
        },

        isResetPasswordMode() {
            return this.formMode == FormModesEnum.RESET_PASSWORD_FORM;
        },
    },

    /**
     * Created
     */
    created(): void {
        this.setLoginFormMode();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Set form-mode to view
         */
        setLoginFormMode() {
            Vue.set(this, "formMode", FormModesEnum.LOGIN_FORM);
        },

        /**
         * Set form-mode to register
         */
        setRegisterFormMode() {
            Vue.set(this, "formMode", FormModesEnum.REGISTER_FORM);
        },

        /**
         * Set form-mode to reset password
         */
        setResetPasswordFormMode() {
            Vue.set(this, "formMode", FormModesEnum.RESET_PASSWORD_FORM);
        },
    },
});
</script>

<style scoped>
.login-container {
    background: #f7f7f7 url("~@IMAGES/log-in-plan.png");
    height: 100vh;
    background-size: cover;
}

.logo {
    background: url("~@IMAGES/qeng.png") no-repeat;
    background-size: cover;
    width: 105px;
    height: 85px;
}

.logo-title {
    font-size: 1.1rem;
    font-weight: 100;
    color: #494646;
    text-align: center;
    padding: 3px 15px 40px 15px;
}

.control .help.counter {
    display: none;
}

.has-text-left input {
    text-align: left !important;
}

.forgot-pwd {
    margin-top: -0.7rem;
    display: block;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

.login-form input {
    text-align: center;
}

.modal .modal-content {
    background: #fff;
    border-radius: 25px;
    box-shadow: 0px 4px 7px #c7c7c7;
    max-width: 420px;
    width: 100%;
}
</style>

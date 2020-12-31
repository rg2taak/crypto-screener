import Vue from "vue";
import Base from "@FE/Scripts/base";
import LoginComponent from "@FE/Components/auth/login.vue";

/**
 * LoginPage class
 */
export class LoginPage extends Base {
  /**
   * Ctr
   */
  constructor() {
    super();
    this.init();
  }

  /**
   * Init
   */
  private init() {
    new Vue({
      name: "Login",

      components: {
        Login: LoginComponent,
      },

      el: "#app",
    });
  }
}

export default new LoginPage();

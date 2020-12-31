import Vue from "vue";
import Base from "@FE/Scripts/base";
import DashboardComponent from "@FE/Components/home/dashboard.vue";

/**
 * Home page class
 */
export class HomePage extends Base {
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
            name: "Home",

            components: {
                Dashboard: DashboardComponent,
            },

            el: "#app",
        });
    }
}

/**
 * Home page instance
 */
export default new HomePage();

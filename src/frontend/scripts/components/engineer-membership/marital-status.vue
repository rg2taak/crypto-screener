<template lang="pug">
.register-container
    form.register-form
        b-field
            b-select(placeholder="وضعیت تاهل", expanded)
                option(v-for="option in options", value="option") 
                    | {{ option }}

        .field
            .buttons.columns
                .column.is-7
                    b-button(
                        expanded,
                        rounded,
                        @click.prevent="changeFormModeToCheckList",
                        type="is-primary"
                    ) ثبت

                .column.is-5
                    b-button(
                        rounded,
                        @click.prevent="changeFormModeToCheckList",
                        type="is-text"
                    ) انصراف
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import { PersonalInformationType } from "@Lib/types/frontend/members/personal-information-type";
import Helper from "@Core/Helpers/frontend-global-helper";
import NotifyModule from "@FE/scripts/modules/notify-module";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Material Status Form Data Type
 */
export type MaritalStatusFormDataType = {
    personalInformation: PersonalInformationType;
    options: Array<any>;
};

/**
 * Mariage Item Type
 */
export type MariageItemType = {
    id: string;
    value: string;
};

/**
 * Register
 */
export default Vue.extend({
    name: "MartialStatus",

    data: () =>
        ({
            personalInformation: {} as PersonalInformationType,
            options: [],
        } as MaritalStatusFormDataType),

    /**
     * Created
     */
    created(): void {
        this.setOptionItems();
        this.resetPersonalInformation();
    },

    /**
     * Methods
     */
    methods: {
        /**
         * Set Option Items
         */
        setOptionItems() {
            /* TODO: Get data from store */
            const data = [
                { id: "1", value: "مجرد" },
                { id: "2", value: "متاهل" },
                { id: "3", value: "سرپرست خانوار" },
            ] as Array<MariageItemType>;

            Vue.set(this, "options", data);
        },

        /**
         * Reset personal information
         */
        resetPersonalInformation() {
            const data: PersonalInformationType = {} as PersonalInformationType;

            Vue.set(this, "personalInformation", data);
        },

        /**
         * Change Form Mode To Check List
         */
        changeFormModeToCheckList(): void {},
    },
});
</script>


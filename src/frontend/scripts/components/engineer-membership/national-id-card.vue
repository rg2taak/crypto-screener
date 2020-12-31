<template lang="pug">
.register-container.columns.is-multiline.is-justify-content-center
    form.register-form.column.is-5
        .columns.is-multiline.is-justify-content-center.is-full-height
            .form-head.column.is-10
                .form-head-icon
                h2.subtitle
                    | مشخصات کارت ملی
            .form-body.column.is-10
                b-field(label="کد ملی", :label-position="labelPosition")
                    b-input(
                        v-model="nationalIDCard.birthCertificateId",
                        ref="nationalId"
                        custom-class="has-text-left",
                        :label-position="labelPosition",
                        rounded,
                        required,
                        expanded,
                        minlength="10",
                        maxlength="10",
                        pattern="[0-9\u06F0-\u06F9]*",
                        validation-message="کد ملی را 10 رقم وارد کنید"
                    )

                b-field(
                    label="سریال کارت ملی",
                    :label-position="labelPosition"
                )
                    b-input(
                        v-model="nationalIDCard.birthCertificateSerial",
                        custom-class="has-text-left",
                        rounded,
                        required,
                        expanded,
                        minlength="15",
                        maxlength="15",
                        pattern="[0-9\u06F0-\u06F9]*",
                        validation-message="سریال کارت ملی را 15 رقم وارد کنید"
                    )

            .form-footer.column.is-10
                b-field
                    .buttons.columns.is-justify-content-center
                        .column.is-3
                            b-button(
                                expanded,
                                rounded,
                                @click.prevent="onSave",
                                type="is-primary"
                            ) ثبت

                        .column.is-2
                            b-button(
                                rounded,
                                @click.prevent="onReturnBack",
                                type="is-text"
                            ) انصراف
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import Helper from "@Core/Helpers/frontend-global-helper";
import NotifyModule from "@FE/scripts/modules/notify-module";
import { NativeError } from "mongoose";
import { NationalIdDataType } from "@Lib/types/frontend/engineer-membership/national-id-data-type";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import NationalIdStore, {
    NationalIdStoreActions,
} from "@FE/Scripts/stores/engineer-membership/national-id-card-store";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * User identification information
 */
export default Vue.extend({
    name: "UserIdentificationInformation",

    store: NationalIdStore,
    data: () => ({
        labelPosition: "on-border",
        nationalIDCard: {
            birthCertificateId: "" as string,
            birthCertificateSerial: "" as string,
        } as NationalIdDataType,
    }),

    /**
     * Created
     */
    async created() {
        await this.requestNationalIdData();

    },

    /**
     * Mounted
     */
    async mounted() {
        await this.focusNationalId();
    },


    /**
     * Methods
     */
    methods: {
        /**
         * Focus on nationalId
         */
        async focusNationalId(): Promise<void> {
            if (this.$refs.nationalId) {
                (this.$refs.nationalId as HTMLInputElement).focus();
            }
        },

        /**
         * Request user identification information
         */
        async requestNationalIdData(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                NationalIdStoreActions.requestNationalIdData
            );
            /* Notify user */
            if (result.success) {
                Vue.set(this, "nationalIDCard", result.data);
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
        },

        /**
         * Register user identification information data
         */
        async onSave(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                NationalIdStoreActions.registerNationalId,
                this.nationalIDCard
            );
            /* Notify user */
            if (result.success) {
                NotifyModule.showSuccess(this.$buefy, result.data);
                this.onReturnBack();
            } else {
                NotifyModule.showDanger(this.$buefy, result.data);
            }
        },

        /**
         * return back
         */
        async onReturnBack() {
            await this.requestNationalIdData();
            this.$emit("on-back-click", {
                sender: this,
            });
        },
    },
});
</script>

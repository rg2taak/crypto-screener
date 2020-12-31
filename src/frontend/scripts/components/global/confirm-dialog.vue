<template lang="pug">
.section
    .conatiner
        h1 {{ title }}
        p 
            slot
        button(
            v-for="(btn, index) in buttonsData",
            :key="index",
            :class="btn.type",
            @click.prevent="onResponse(btn)"
        )
            | {{ btn.title }}
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { RecordPropsDefinition } from "vue/types/options";
import IHash from "@Lib/interfaces/hash-interface";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Dialog button type
 */
export type DialogButtonType = {
    code: string;
    type: string;
    title: string;
};

/**
 * Confirm-Dialog props data type
 */
export type ConfirmDialofPropsDataType = RecordPropsDefinition<{
    title: string;
    icon?: string;
    buttons: IHash<DialogButtonType>;
}>;

/**
 * Register
 */
export default Vue.extend({
    name: "AddressConfirmDialog",

    props: {
        title: {
            type: String,
            default: () => "",
        },
        icon: "info",
        buttons: {
            type: Object,
            default: () =>
                ({
                    yes: {
                        code: "success",
                        type: "is-success",
                        title: "بله",
                    } as DialogButtonType,
                    no: {
                        code: "danger",
                        type: "is-danger",
                        title: "خیر",
                    } as DialogButtonType,
                } as IHash<DialogButtonType>),
        },
    } as ConfirmDialofPropsDataType,

    computed: {
        buttonsData(): Array<DialogButtonType> {
            return Object.keys(this.buttons).map<DialogButtonType>(
                (x) => this.buttons[x]
            );
        },
    },

    /**
     * Methods
     */
    methods: {
        /**
         * On confirm
         */
        onResponse(sender: DialogButtonType) {
            this.$emit("on-response", {
                sender: this,
                data: sender,
            });
        },
    },
});
</script>
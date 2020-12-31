<template lang="pug">
.column.is-12.panel-block
    b-field
        .column.is-1
            .check-list-icon(v-if="isAccepted")

        .column.is-9
            .title(@click.prevent="onSelect") {{ value.title }}
            .subtitle
                p {{ (value.status || {}).responseDescription || '' }}

        .column.is-2
            b-button.b-round(:type="actionButtonType", v-if="actionButtonText")
                | {{ actionButtonText }}
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { CheckListItemType } from "@Lib/types/frontend/global/check-list-item-type";
import {
    Accessors,
    ComputedOptions,
    RecordPropsDefinition,
} from "vue/types/options";
import { CheckListItemStatusEnum } from "@Lib/enums/components/check-list-item-status";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * PropsDataType
 */
export type PropsDataType = RecordPropsDefinition<{
    value: CheckListItemType;
}>;

/**
 * Register
 */
export default Vue.extend({
    name: "CheckListItem",

    props: {
        value: {
            type: Object,
            dafault: () => ({} as PropsDataType),
        },
    } as PropsDataType,

    computed: {
        isAccepted(): boolean {
            return (
                this.value.status?.status == CheckListItemStatusEnum.ACCEPTED
            );
        },

        actionButtonType(): string {
            const status = this.value.status?.status;

            switch (status) {
                case CheckListItemStatusEnum.ACCEPTED:
                    return "is-success";
                case CheckListItemStatusEnum.REJECTED:
                    return "is-danger";
                case CheckListItemStatusEnum.PENDING:
                    return "is-warning";
                default:
                    return "is-default";
            }
        },

        actionButtonText(): string {
            const status = this.value.status?.status;

            switch (status) {
                case CheckListItemStatusEnum.ACCEPTED:
                    return "تایید شده";
                case CheckListItemStatusEnum.REJECTED:
                    return "عدم پذیرش";
                case CheckListItemStatusEnum.PENDING:
                    return "در حال برسی";
                default:
                    return "";
            }
        },
    },

    methods: {
        /**
         * On item selected
         */
        async onSelect(e: any): Promise<void> {
            this.$emit("on-select", {
                sender: this,
                data: this.value as CheckListItemType,
            });
        },
    },
});
</script>

<style scoped lang="scss">
$title-font-size: 1em;
$title-color: #222222;

$subtitle-font-size: 0.75em;
$subtitle-color: #8894b5;
$subtitle-mt: 1em;

.title {
    cursor: pointer;
    font-size: $title-font-size;
    font-family: iranyekan, tahoma;
    color: $title-color;
}

.subtitle {
    font-size: $subtitle-font-size;
    color: $subtitle-color;
}

.subtitle p {
    margin-top: $subtitle-mt;
}

.b-round {
    border-radius: 15px;
    width: 100% !important;
    font-size: $subtitle-font-size !important;
}

.panel-block {
    border: none;
}

.panel-block:after {
    content: "";
    border-bottom: 1px solid #e2e2e2;
    width: 75%;
    display: block;
    margin: 0 auto;
}

.panel-block:last-child:after {
    border-bottom: 0;
}
.check-list-icon{
    background: url("~@IMAGES/check-box.png") no-repeat;
    background-size: contain;
    width: 24px;
    height: 24px;
}
</style>

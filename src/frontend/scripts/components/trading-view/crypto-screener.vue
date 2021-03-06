<template lang="pug">
.register-container
    .container
        b-table.table.is-striped.is-narrow.is-hoverable.is-fullwidth(
            :data="cryptoScreener"
        )
            b-table-column.tv-screener-table__symbol-container(v-slot="props")
                span.tv-circle-logo-pair.tv-circle-logo-pair--medium.tv-screener-table__logo-container
                    img.tv-circle-logo-pair__logo.v-circle-logo-pair__logo--medium(
                        :src="setimage(props.row.new[1])"
                    )
                    img.tv-circle-logo-pair__logo.v-circle-logo-pair__logo--medium(
                        :src="setimage(props.row.new[0])"
                    )
            b-table-column(label="نماد", v-slot="props")
                div
                    a.tv-screener__symbol.apply-common-tooltip(
                        :title="props.row.new[11]",
                        href="#"
                    )
                        | {{ props.row.new[2] }}
                    span.tv-screener__description
                        | {{ props.row.new[11] }}
            b-table-column(
                label="آخرین قیمت",
                v-slot="props",
                v-class="{active: isActive}"
            )
                | {{ props.row.new[3] - props.row.last[3] }}

            b-table-column(label="تغییر ٪", v-slot="props")
                | {{ parseFloat(props.row.new[4]).toFixed(2) }}%
            b-table-column(label="تغییر", v-slot="props")
                | {{ parseFloat(props.row.new[5]).toFixed(10)}}
            b-table-column(label="بیشترین", v-slot="props")
                | {{ props.row.new[6] }}
            b-table-column(label="کمترین", v-slot="props")
                | {{ props.row.new[7] }}
            b-table-column(label="حجم معاملات", v-slot="props")
                | {{ parseFloat(parseInt(props.row.new[8]) / 1000000).toFixed(3) }}M
            b-table-column(label="پیشنهاد", v-slot="props")
                | {{ getStatus(props.row.new[9]) }}
            b-table-column(label="صرافی", v-slot="props")
                | {{ props.row.new[10] }}
</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import NotifyModule from "@FE/scripts/modules/notify-module";
import DateHelper from "@FE/Scripts/helpers/date-helper";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { OrganizationResumeDataType } from "@Lib/types/frontend/members/organization-resume/resume-data-type";
import CryptoScreenerListStore, {
    CryptoScreenerListStoreActions,
} from "@FE/Scripts/stores/trading-view/list-store";
import { resourceLimits } from "worker_threads";
import { LicenseLevelDataType } from "@Lib/types/frontend/members/organization-resume/license-level-data-type";
import { EmploymentLicenseType } from "@Lib/types/frontend/members/organization-resume/employment-license-type";
import IHash from "@Lib/interfaces/hash-interface";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Resume List Form Data Type
 */
export type ResumeListFormDataType = {
    isActive: boolean;

    cryptoScreener: IHash<any>;
};

/**
 * Register
 */
export default Vue.extend({
    name: "CryptoScreenerList",

    store: CryptoScreenerListStore,

    data: () =>
        ({
            isActive: true as boolean,

            cryptoScreener: {} as IHash<any>,
        } as ResumeListFormDataType),

    /**
     * Created
     */
    created(): void {
        this.loadcryptoScreenerListData();
        setInterval(this.loadcryptoScreenerListData, 2000);
    },
    /**
     * Methods
     */
    methods: {
        /**
         * Get License level Icon message
         */
        getLicenseLevel(e: EmploymentLicenseType) {
            if (e) {
                return e.code;
            }
            return false;
        },
        /**
         * Get License level text message
         */
        getLicenseLevelText(e: EmploymentLicenseType) {
            if (e) {
                return e.level.name;
            }
            return "";
        },

        /**
         * Get License level code message
         */
        getLicenseLevelCode(e: EmploymentLicenseType) {
            if (e) {
                return e.code;
            }
            return "";
        },

        /**
         * load Data
         */
        async loadcryptoScreenerListData() {
            const result: ActionResultType = await this.$store.dispatch(
                CryptoScreenerListStoreActions.RequestCryptoScreenerListData
            );

            const r: IHash<any> = {};
            await result.data?.forEach((x: any) => {
                r[x.s] = {
                    new: x.d,
                    last: (this.cryptoScreener[x.s] || {}).new,
                };
            });
            console.log(r);
            Vue.set(this, "cryptoScreener", r);
        },

        /**
         * Append a new resume
         */
        async appendResume(item: OrganizationResumeDataType) {
            Vue.set(
                this.cryptoScreener.new,
                this.cryptoScreener.new.length,
                item
            );
        },

        /**
         * Delete item from list
         */
        async deleteItem(membership: OrganizationResumeDataType) {
            this.$buefy.dialog.confirm({
                title: "حذف",
                message: "برای حذف اطمینان دارید؟",
                cancelText: "انصراف",
                confirmText: "تایید",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    /*Send to backend result*/
                    // const result: ActionResultType = await this.$store.dispatch(
                    //     OrganizationResumeListStoreActions.deleteOrgResumeItemList,
                    //     membership
                    // );
                    // if (result.success) {
                    //     const newList = this.resumes.filter(
                    //         (x) => x.membershipId != membership.membershipId
                    //     );
                    //     Vue.set(this, "resumes", newList);
                    //     NotifyModule.showSuccess(this.$buefy, result.data);
                    // } else {
                    //     NotifyModule.showDanger(this.$buefy, result.data);
                    // }
                },
            });
        },

        /**
         * Convert Date Format
         */
        convertDateFormat(date: Date): string {
            return DateHelper.toPersianDate(date);
        },
        setimage(src: string): string {
            if (src != "")
                return "https://s3-symbol-logo.tradingview.com/" + src + ".svg";
            return "https://www.tradingview.com/static/bundles/f32495a10fb70afbec275bd3257abcb9.svg";
        },
        getStatus(recommendAll: string): string {
            let recAll = parseFloat(recommendAll);
            if (recAll < 1 && recAll >= 0.5) {
                return "خرید سریع";
            }
            if (recAll < 0.5 && recAll > 0) {
                return "خرید";
            }
            if (recAll < 0 && recAll >= -0.5) {
                return "فروش";
            }
            if (recAll < -0.5 && recAll > -1) {
                return "فروش سریع";
            }
            return "معمولی";
        },
    },
});
</script>
<style scoped>
.tv-screener-table__symbol-container {
    display: inline-flex;
    align-items: center;
}
.tv-screener-table__logo-container {
    margin-right: 8px;
}

.tv-circle-logo-pair--medium {
    width: 24px;
    height: 24px;
}
.tv-circle-logo-pair {
    display: inline-block;
    position: relative;
}
.tv-data-table__cell,
.tv-data-table__cell * {
    -webkit-user-select: text !important;
    user-select: text !important;
}
.tv-circle-logo-pair__logo:last-child {
    top: -4px;
    left: -4px;
    border: 1px solid #fff;
}
.tv-circle-logo-pair__logo:first-child,
.tv-circle-logo-pair__logo:last-child {
    position: absolute;
}
.tv-circle-logo-pair__logo:first-child {
    bottom: 0;
    right: 0;
}

.tv-circle-logo-pair__logo:first-child,
.tv-circle-logo-pair__logo:last-child {
    position: absolute;
}
.tv-circle-logo-pair__logo--medium {
    width: 16px;
    height: 16px;
}
.tv-circle-logo-pair__logo {
    border-radius: 50%;
    background-color: #f0f3fa;
}
.tv-screener__description {
    display: block;
    font-size: 11px;
    margin-top: 2px;
    color: #4f5966;
    letter-spacing: 0.3px;
    font-weight: 400;
    text-transform: uppercase;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tv-screener__symbol {
    display: inline-block;
    font-weight: 700;
    padding-right: 3px;
    max-width: 100%;
    cursor: pointer;
    color: #2196f3;
}
</style>
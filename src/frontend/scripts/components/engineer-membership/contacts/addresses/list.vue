<template lang="pug">
.register-container
    .container(v-if="addresses")
        b-table.table.is-striped.is-narrow.is-hoverable.is-fullwidth(
            :data="addresses"
        )
            b-table-column(
                field="addressType.name",
                label="عنوان",
                v-slot="props"
            )
                | {{ props.row.addressType.name }}

            b-table-column(
                field="city.name",
                label="شهر",
                v-slot="props"
            )
                | {{ props.row.city.name }}

            b-table-column(
                field="getAddress",
                label="آدرس",
                v-slot="props"
            )
                | {{ getAddress(props.row) }}

            b-table-column(
                field="location.postalCode",
                label="کد پستی",
                v-slot="props"
            )
                | {{ props.row.location.postalCode }}

            b-table-column(
                field="phone",
                label="تلفن",
                v-slot="props"
            )
                | {{ props.row.phone }}

            b-table-column(field="functions", label="عملیات", v-slot="props")
                b-button(
                    rounded,
                    @click.prevent="removeAddress(props.row)",
                    type="is-danger",
                )
                    i.fas.fa-trash

</template>

<script lang="ts">
import Vue from "vue";
import * as Vuex from "vuex";
import Buefy from "buefy";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { add } from "winston";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";
import { AddressTypeDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-type-data-type";
import { LocationDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/location-data-type";
import ContactListStore, {
    ContactsListStoreAction,
} from "@FE/Scripts/stores/engineer-membership/contacts/address/list-store";
import NotifyModule from "@FE/Scripts/modules/notify-module";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Addresses List Form Data Type
 */
export type AddressesFormDataType = {
    /* TODO:REMOVE-- TEST DATA */
    tempAddresses: Array<AddressDataType>;
};

/**
 * Register
 */
export default Vue.extend({
    name: "AddressesList",
    store: ContactListStore,
    data: () =>
        ({
            /* TODO: REMOE AFTER TEST */
            tempAddresses: [],
        } as AddressesFormDataType),

    computed: {
        addresses() {
            /* READ FROM STORE */
            return this.tempAddresses;
        },
    },

    /**
     * Created
     */
    created(): void {
        this.loadData();
    },

    /**
     * Methods
     */
    methods: {

        /**
         * Get address
         */
        getAddress(address: AddressDataType): string {
            const loc = address.location;

            return `${loc.mainStreet} ${loc.subStreet} ${loc.alley} ${loc.no} / ${loc.floor} `;
        },

        /**
         * Append a new address
         */
        appendAddress(newAddress: AddressDataType): void {
            /* TODO: REMOVE AFTER TEST */
            Vue.set(this, "tempAddresses", [...this.tempAddresses, newAddress]);

            /* CALL STORE FUNCTION */
        },

        /**
         * Remove an existing address
         */
        removeAddress(newAddress: AddressDataType): void {
            this.$buefy.dialog.confirm({
                title: "حذف",
                message: "برای حذف اطمینان دارید؟",
                cancelText: "انصراف",
                confirmText: "تایید",
                type: "is-danger",
                hasIcon: true,
                onConfirm: async () => {
                    /*Send to backend result*/
                    const result: ActionResultType = await this.$store.dispatch(
                        ContactsListStoreAction.deleteAddressItemList,
                        newAddress
                    );
                    if (result.success) {
                        const newList = this.tempAddresses.filter(
                            (x) => x.id != newAddress.id
                        );
                        Vue.set(this, "tempAddresses", newList);
                        NotifyModule.showSuccess(this.$buefy, result.data);
                    } else {
                        NotifyModule.showDanger(this.$buefy, result.data);
                    }
                },
            });

        },

        /**
         * Load data
         */
        async loadData(): Promise<void> {
            const result: ActionResultType = await this.$store.dispatch(
                ContactsListStoreAction.requestContactsListData
            );

            Vue.set(this, "tempAddresses", result.data);
        },
    },
});
</script>

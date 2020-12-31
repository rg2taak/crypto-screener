<template lang="pug">
.identification-certificate-container
    b-field(
        label="کشور"
        :label-position="labelPosition"
    )
        b-select(
            ref="countrySelect",
            rounded,
            required,
            expanded,
            validation-message="کشور را انتخاب کنید",
            :value="value.country",
            @input="onCountryChange"
        )
            option(v-for="country in countries", :value="country")
                | ({{ country.iso2 }}) {{ country.name }}

    b-field(
        label="استان"
        :label-position="labelPosition"
    )
        b-select(
            ref="provinceSelect",
            rounded,
            required,
            expanded,
            validation-message="استان را انتخاب کنید",
            :value="value.province",
            @input="onProvinceChange"
        )
            option(v-for="province in provinces", :value="province")
                | {{ province.name }}

    b-field(
        label="شهر"
        :label-position="labelPosition"
    )
        b-select(
            ref="citySelect",
            rounded,
            required,
            expanded,
            validation-message="شهر خود را انتخاب کنید",
            :value="value.city",
            @input="onCityChange"
        )
            option(v-for="city in cities", :value="city")
                | {{ city.name }}
</template>

<script lang="ts">
import Vue from "vue";
import { RecordPropsDefinition } from "vue/types/options";
import * as Vuex from "vuex";
import * as _ from "lodash";
import Buefy from "buefy";
import CountriesInformationStore, {
    CountriesInformationStoreActions,
} from "@FE/Scripts/stores/countires-inforamtion-store";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { ProvinceType } from "@Lib/types/frontend/global/province-type";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { RequestCityType } from "@Lib/types/frontend/global/request-city-type";
import { CountrySelectorDataType } from "@Lib/types/frontend/global/country-selector-type";

Vue.use(Buefy, {
    defaultIconPack: "fas",
});

/**
 * Props data type
 */
export type CountrySelectorPropsDataType = RecordPropsDefinition<{
    value: CountrySelectorDataType;
}>;

/**
 * Register
 */
export default Vue.extend({
    name: "CountrySelector",

    beforeCreate() {
        this.$store = CountriesInformationStore();
        this.$store.dispatch(CountriesInformationStoreActions.loadCountryList);
    },

    props: {
        value: {
            type: Object,
            default: () => ({}),
        },
    } as CountrySelectorPropsDataType,

    data: () =>
    ({
        labelPosition: "on-border",
    }),

    computed: {
        countries(): Array<CountryType> {
            return this.$store.getters.countries;
        },

        provinces(): Array<ProvinceType> {
            return this.$store.getters.provinces;
        },

        cities(): Array<CityType> {
            return this.$store.getters.cities;
        },
    },

    /**
     * Created
     */
    async created() {
    },

    methods: {
        /**
         * Update data
         */
        updateData(data: CountrySelectorDataType) {
            this.$emit("input", data);
        },

        /**
         * Load Provinces lsit
         */
        loadProvincesList() {
            this.$store.dispatch(
                CountriesInformationStoreActions.loadProvincesList,
                this.value.country?._id
            );
        },

        /**
         * Load Cities lsit
         */
        loadCitiesList() {
            this.$store.dispatch(
                CountriesInformationStoreActions.loadCitiesList,
                this.value.province?._id
            );
        },

        /**
         * On Country-change event
         */
        async onCountryChange(country: CountryType) {
            this.updateData({
                country,
                province: this.value.province,
                city: this.value.city,
            } as CountrySelectorDataType);

            this.$nextTick(() => {
                this.loadProvincesList();
            });
        },

        /**
         * On Province-change event
         */
        async onProvinceChange(province: ProvinceType) {
            this.updateData({
                country: this.value.country,
                province,
                city: this.value.city,
            } as CountrySelectorDataType);

            this.$nextTick(() => {
                this.loadCitiesList();
            });
        },

        /**
         * On City-change event
         */
        async onCityChange(city: CityType) {
            const newData = {
                country: this.value.country,
                province: this.value.province,
                city,
            } as CountrySelectorDataType;

            this.updateData(newData);

            this.$emit("on-change", {
                sender: this,
                data: newData,
            });
        },
    },
});
</script>

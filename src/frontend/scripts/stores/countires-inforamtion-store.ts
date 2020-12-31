import Vue from "vue";
import * as Vuex from "vuex";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { ProvinceType } from "@Lib/types/frontend/global/province-type";
import CountryModule from "@FE/Scripts/modules/country-module";
import { CityType } from "@Lib/types/frontend/global/city-type";
import { RequestCityType } from "@Lib/types/frontend/global/request-city-type";

Vue.use(Vuex);

/**
 * Personal Information Store
 */
export default () => {
    return new Vuex.Store({
        /**
         * State
         */
        state: {
            countries: [] as Array<CountryType>,
            provinces: [] as Array<ProvinceType>,
            cities: [] as Array<CityType>,
        },

        /**
         * Getters
         */
        getters: {
            countries: (state: any) =>
                state.countries || ([] as Array<CountryType>),
            provinces: (state: any) =>
                state.provinces || ([] as Array<ProvinceType>),
            cities: (state: any) => state.cities || ([] as Array<CityType>),
        },

        /**
         * Mutations
         */
        mutations: {
            /**
             * Set countries
             * @param state any
             * @param data Array<CountryType>
             */
            setCountries(state: any, data: Array<CountryType>) {
                Vue.set(state, "countries", data);
            },

            /**
             * Set provinces
             * @param state any
             * @param data Array<ProvinceType>
             */
            setProvinces(state: any, data: Array<ProvinceType>) {
                Vue.set(state, "provinces", data);
            },

            /**
             * Set cities
             * @param state any
             * @param data Array<ProvinceType>
             */
            setCities(state: any, data: Array<CityType>) {
                Vue.set(state, "cities", data);
            },
        },

        actions: {
            /**
             * Load Country List
             */
            async loadCountryList(context: any): Promise<void> {
                const data = await CountryModule.loadCountries();
                let countries: Array<CountryType> = data.data as Array<
                    CountryType
                >;

                context.commit("setCountries", countries);
            },

            /**
             * Load provinces List
             */
            async loadProvincesList(
                context: any,
                countryId: string
            ): Promise<void> {
                const data = await CountryModule.requestProvincesOfCountry(countryId);
                let provinces: Array<ProvinceType> = data.data as Array<
                    ProvinceType
                >;
                context.commit("setProvinces", provinces);
            },

            /**
             * Load cities List
             */
            async loadCitiesList(
                context: any,
                provinceId: string
            ): Promise<void> {
                const data = await CountryModule.requestCitiesOfProvince(provinceId);
                let cities: Array<CityType> = data.data as Array<CityType>;
                context.commit("setCities", cities);
            },
        },
    });
};

/**
 * Countries information store actions Enum
 */
export enum CountriesInformationStoreActions {
    loadCountryList = "loadCountryList",
    loadProvincesList = "loadProvincesList",
    loadCitiesList = "loadCitiesList",
}

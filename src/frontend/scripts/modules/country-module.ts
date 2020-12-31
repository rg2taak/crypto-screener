import { AxiosResponse } from "axios";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import App from "../core/app";
import AxiosModule from "./axios-module";
import { RequestCityType } from "@Lib/types/frontend/global/request-city-type";

/**
 * Country module
 */
export default class CountryModule {
    /**
     * Load countries list
     */
    public static async loadCountries(): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("country.countries");

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Load provinces list
     */
    public static async requestProvincesOfCountry(
        countryId: string
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath(
            "country.request-provinces-of-country"
        );

        const axiosResult: AxiosResponse = await AxiosModule.post(url, {
            countryId,
        });
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request cities of province
     */
    public static async requestCitiesOfProvince(
        provinceId: string
    ): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("country.request-cities-of-province");

        const axiosResult: AxiosResponse = await AxiosModule.post(url, {
            provinceId,
        });
        result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Request cities of province
     */
    public static async requestCitiesOfQazvin(): Promise<ActionResultType> {
        await App.loadRoutes();

        let result: ActionResultType;
        const url: string = App.routePath("country.request-cities-of-province");

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        result = axiosResult.data as ActionResultType;

        return result;
    }
}

import * as _ from "lodash";
import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { Routes } from "@BE/helpers/service-route-helper";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * Country controller
 */
export default class CountryController {
    /**
     * Country/Index action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async countries(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-countries-list"];

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();

        /**
         * result =
         *    "_id": object id
         *    "name": string
         *    iso2: string
         *    iso3:  string
         *    native:  string
         *    emoji:  string
         *    emojiu: string
         * */
    }

    /**
     * Request provinces of country action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    public async requestProvincesOfCountry(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const countryId: string = req.body.countryId as string;
        const url = Routes["auth.request-provinces-of-country"].replace(
            "#COUNTRY-ID#",
            countryId
        );

        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;

        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "name": string
         * */
    }

    /**
     * Request cities of province action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    public async requestCitiesOfProvince(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const provinceId: string = req.body.provinceId as string;
        const url = Routes["auth.request-cities-of-province"].replace(
            "#PROVINCE-ID#",
            provinceId
        );
        /** TODO: Validation */
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();

        /**
         * result =
         *    "_id": object id
         *    "id": number
         *    "name": string
         *    "latitude": string
         *    "longitude": string
         * */
    }

    /**
     * Request provinces of iran action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    public async requestProvincesOfIran(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-provinces-of-iran"];
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "name": string
         * */
    }

    /**
     * Request cities of qazvin action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    /* TODO Change Provinces to requestProvincesOfCountry*/
    public async requestCitiesOfQazvin(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-cities-of-qazvin"];
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();
        /**
         * result =
         *    "_id": object id
         *    "id": number
         *    "name": string
         *    "latitude": string
         *    "longitude": string
         * */
    }
}

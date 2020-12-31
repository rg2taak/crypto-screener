import { NextFunction, Request, Response } from "express";
import { ActionResultType } from "@Lib/types/core/action-result-type";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import AddressHelper from "@BE/helpers/engineer-membership/address-helper";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";
import { Routes } from "@BE/helpers/service-route-helper";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";
import { NationalIDType } from "@Lib/validation/national-id-type";

/**
 * Organization Resume controller
 */
export default class AddressController {
    /**
     * orgResume/request-org-resume-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestContactsList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {

        const nationalId: NationalIDType = req.body as NationalIDType;
        const url = Routes["contacts.request-address"].replace(
            "#NATIONAL-ID#",
            nationalId + ""
        );;
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        
        res.status(200)
            .send(result)
            .end();
    }

    /**
     * contacts/delete-address-item-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async deleteAddressItemList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const item: AddressDataType = req.body as AddressDataType;
        const result: ActionResultType = await AddressHelper.deleteAddressItemList(
            item
        );

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * orgResume/request-province-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestProvinceList(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const url = Routes["auth.request-cities-of-qazvin"];
        /** Validator : TODO */
        const axiosResult: AxiosResponse = await AxiosModule.get(url);
        let result: ActionResultType = axiosResult.data as ActionResultType;
        res.send(result).end();
    }

    /**
     * orgResume/request-license-level-list action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async requestAddressTypes(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const result: ActionResultType = await AddressHelper.requestAddressTypes();

        res.status(200)
            .send(result)
            .end();
    }

    /**
     * contacts/request-address-types action
     * @param req Express.Request Request
     * @param res Express.Response Response
     * @param next Express.NextFunction next function
     */
    public async confirmNewAddress(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const newAddress: AddressDataType = req.body as AddressDataType;
        const url = Routes["contacts.register-address"];
        const axiosResult: AxiosResponse = await AxiosModule.post(url,newAddress);
        let result: ActionResultType = axiosResult.data as ActionResultType;

        res.status(200)
            .send(result)
            .end();
    }
}

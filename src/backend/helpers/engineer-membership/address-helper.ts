import { ActionResultType } from "@Lib/types/core/action-result-type";
import { NextFunction, Request, Response } from "express";
import { Routes } from "@BE/helpers/service-route-helper";
import { CountryType } from "@Lib/types/frontend/global/country-type";
import { AddressDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-data-type";
import { AddressTypeDataType } from "@Lib/types/frontend/engineer-membership/contacts/address/address-type-data-type";
import { AxiosResponse } from "axios";
import AxiosModule from "@FE/Scripts/modules/axios-module";

/**
 * Organization resume list helper class
 */
export default class AddressHelper {
    /**
     * Request Organization resume list
     */
    public static async requestContactsList(): Promise<ActionResultType> {
        let result: ActionResultType;

        const url = Routes["contacts.request-contacts-list"];

        // const axiosResult: AxiosResponse = await AxiosModule.post(url, userData);
        //TODO: Clear this code
        let orgResumeList: Array<any> = (await import(
            "@/mock/address-list.json"
        )) as Array<any>;

        result = {
            success: true,
            data: orgResumeList,
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }

    /**
     * Delete address item list
     */
    public static async deleteAddressItemList(
        item: AddressDataType
    ): Promise<ActionResultType> {
        let result: ActionResultType;
        const url = Routes["contacts.delete-address-item-list"];
        /* Validate data */

        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        result = {
            success: true,
            data: "حذف با موفقیت انجام شد",
        } as ActionResultType;
        // result = axiosResult.data as ActionResultType;

        return result;
    }


    /**
     * Request address types
     */
    public static async requestAddressTypes(): Promise<ActionResultType> {
        let result: ActionResultType;
        const url = Routes["contacts.request-address-types"];
        /* Validate data */

        /* TODO: send to server */
        // const axiosResult: AxiosResponse = await AxiosModule.post(url, newUserData);
        //TODO: Clear this code
        let licenseLevel: Array<AddressTypeDataType> = (await import(
            "@/mock/address-type-data.json"
        )) as Array<AddressTypeDataType>;
        result = {
            success: true,
            data: licenseLevel,
        };

        return result;
        // result = axiosResult.data as ActionResultType;
    }
}

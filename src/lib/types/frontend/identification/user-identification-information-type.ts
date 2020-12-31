import { CityType } from "../global/city-type";
import { CountrySelectorDataType } from "../global/country-selector-type";
import { BirthCertificateSerialType } from "./birth-certificate-serial-type";

/**
 * user-identification-information-type
 * */
export type UserIdentificationInformationType = {
    nationalId?: string;
    firstName: string;
    lastName: string;
    latinFirstName?: string;
    latinLastName?: string;
    fatherName?: string;
    birthCertificateNumber?: string;
    birthCertificateSerial?: BirthCertificateSerialType;
    nationality?: string;
    birthPlace?: CountrySelectorDataType;
    birthDate?: Date;
    birthCertificateExportPlaceZone?: string;
    birthCertificateExportPlaceDate?: Date;
};

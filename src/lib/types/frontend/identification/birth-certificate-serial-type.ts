import { BcLetterCodeType } from "./bc-letter-code-type";

/**
 * Birth certificate serial type
 */
export type BirthCertificateSerialType = {
  bcLetterCode: BcLetterCodeType;
  bcNumberCode?: string;
  serial: string;
  };
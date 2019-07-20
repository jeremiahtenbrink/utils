import { Dispatch, SetStateAction } from "react";
export declare const useEncryption: (toEncrypt?: any) => [string, Dispatch<SetStateAction<string>>];
export declare const useDecryption: (toDecrypt?: string) => [string | {}, Dispatch<SetStateAction<string>>];

import { Dispatch, SetStateAction } from "react";
export declare const useEncryption: (toEncrypt?: any) => [string, Dispatch<SetStateAction<string>>];
export declare const useDecryption: (toDecrypt?: string) => [string | object, Dispatch<SetStateAction<string>>];
export declare type UseEncryption = [string, Dispatch<SetStateAction<string>>];
export declare type UseDecryption = [string | object, Dispatch<SetStateAction<string | undefined>>];

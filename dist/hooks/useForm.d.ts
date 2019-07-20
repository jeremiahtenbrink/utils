import { FormEvent } from 'react';
export declare const useForm: (onSubmit: (IValues: any) => void, formDefaultValues?: {}) => [FormValues, HandleFunctions];
interface HandleFunctions {
    change: (e: any) => void;
    submit: (e: Event | FormEvent) => void;
    clear: () => void;
}
interface FormValues {
    [name: string]: any;
}
export {};

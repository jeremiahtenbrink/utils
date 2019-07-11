import { ChangeEvent, FormEvent } from 'react';
export declare const useForm: (onSubmit: (IValues: any) => void, initialValues: IValues) => [any, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, (e: FormEvent<Element>) => void, () => void];
interface IValues {
    [name: string]: any;
}
export {};

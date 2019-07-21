import { FormEvent } from 'react';
/**
 * ## Custom Hook
 * Call useForm to handle all state changes for any form. Returns an array.
 * Index 0 is the values from the form. Index 1 is a object containing all
 * the functions to interact with the form inputs.
 *
 * @param onSubmit - callback function to be called once the form is submited.
 * @param formDefaultValues - object containing the default values of the form.
 *
 * @return - Form values is a object with key value pairs. Keys being the
 * input names and values being the value of the users input. The
 * HandleFunctions object is a object containing the functions change,
 * submit, and clear.
 */
export declare const useForm: (onSubmit: (IValues: any) => void, formDefaultValues?: {}) => [FormValues, HandleFunctions];
/**
 * ## Object
 * Contains three functions used to handle form events.
 */
export interface HandleFunctions {
    /**
     * ## Function
     * Place this function in the onChange function of all your form inputs.
     * This will update the form state to the newest values.
     *
     * @param e - event from the form onChange function.
     */
    change: (e: any) => void;
    /**
     * ## Function
     * Place this function in the forms onSubmit function or in the submit
     * button onClick method. Used to handle the forms onSubmit method.
     * Prevents default form actions if needed and returns the values to the
     * onSubmit function provided in the useForm hook arguments.
     *
     * @param e - onSubmit Form event or onClick method from the button.
     */
    submit: (e: Event | FormEvent) => void;
    /**
     * ## Function
     * Call this function to set all the form inputs back to their original
     * values.
     */
    clear: () => void;
}
/**
 * ## Object
 * Object containing key value pairs. Keys being the form input names and
 * values being the users inputted values.
 */
export interface FormValues {
    [name: string]: any;
}

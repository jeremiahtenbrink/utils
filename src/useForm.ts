import {
  useState, FormEvent, Dispatch, SetStateAction
} from 'react';

/**
 * ## Custom Hook
 * Call useForm to handle all state changes for any form. Returns an array.
 * Index 0 is the values from the form. Index 1 is a object containing all
 * the functions to interact with the form inputs.
 *
 * @param onSubmit - `onSubmit` - Callback function to be called once the
 * form is submitted.
 * @param formDefaultValues - `formDefaultValues` - Object containing the
 * default values of the form.
 * @param formValidate - `formValidate` - Callback function for validating
 * the forms values.
 *
 * @return - Form values is a object with key value pairs. Keys being the
 * input names and values being the value of the users input. The
 * HandleFunctions object is a object containing the functions change,
 * submit, and clear.
 */
export const useForm = ( onSubmit: OnSubmit,
                         formDefaultValues?: FromDefaultValues,
                         formValidate?: FormValidate ): [ FormValues, HandleFunctions ] => {
  
  let [ defaultValues ] = useState( formDefaultValues );
  const [ values, setValues ]: [ FormValues, Dispatch<SetStateAction<FormValues>> ] = useState(
    () => {
      const valuesToBe = {};
      if ( Object.keys( formDefaultValues ).length > 0 ) {
        Object.keys( formDefaultValues ).map( key => {
          valuesToBe[ key ] = { value: formDefaultValues[ key ], error: null }
        } );
        return valuesToBe;
      }
      return {}
    } );
  
  const change = ( e: any ): void => {
    
    if ( e.target.type === "checkbox" ) {
      let { name, checked } = e.target as HTMLInputElement;
      const error = validate( name, checked );
      setValues( { ...values, [ name ]: { value: checked, error } } );
      return;
    }
    
    const { name, value } = e.target;
    const error = validate( name, value );
    setValues(
      prevValues => ( { ...prevValues, [ name ]: { value, error } } ) );
  };
  
  const submit = ( e: Event | FormEvent ): void => {
    if ( e && e.preventDefault ) {
      e.preventDefault();
    }
    onSubmit( values );
    setValues( defaultValues );
  };
  
  const clear = (): void => {
    setValues( defaultValues );
  };
  
  const validate = ( name: string, value: any ): string => {
    if ( formValidate ) {
      const error = formValidate( name, value );
      if ( error ) {
        if ( typeof error !== "string" ) {
          throw Error( "FormValidate must return a string." );
        }
        return error;
      }
    }
    return '';
  };
  
  return [ values, { change, submit, clear } ];
};

/**
 * ## Callback Function
 * If this function is not undefined then it will be called on every onChange
 * function call. This callback function will be called with the
 * name of the input and the value of the input. The user can decide to return either a empty
 * string ( No Error ) or a string with the error message.
 *
 * @param name `name` - The name of the input field.
 * @param value `value` - The value of the input field.
 *
 * @returns Must return either a blank string indicating no error or a error
 * message as a string value.
 */
export type FormValidate = ( name: string, value: any ) => string

/**
 * ## Function
 * OnSubmit function is the callback function passed into the useForm
 * function call. It is the function that gets passed all the form values
 * once the form has been submitted.
 *
 * @param formValues `formValues` - Object with key value pairs. Keys being
 * the input names and values being a object. The object contains two
 * attributes. value - the value of the input field, and error, the error
 * message returned from
 * [formValidate](/modules/_useform_.html#formvalidate) if any was returned.
 */
export type OnSubmit = ( formValues: FormValues ) => void;

/**
 * ## Object
 * This is the default values of the form if any. It is a object with key
 * value pairs. Keys being the name of the input fields and values being the
 * input default values.
 *
 */
export type FromDefaultValues = { [ name: string ]: any }

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
  change: ( e: any ) => void;
  /**
   * ## Function
   * Place this function in the forms OnSubmit function or in the submit
   * button onClick method. Used to handle the forms OnSubmit method.
   * Prevents default form actions if needed and returns the values to the
   * OnSubmit function provided in the useForm hook arguments.
   *
   * @param e - OnSubmit Form event or onClick method from the button.
   */
  submit: ( e: Event | FormEvent ) => void;
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
 * values being a object with the properties of value and error. Value being
 * the value of the form input and error being the returned string from
 * [FormValidate](#formvalidate).
 */
export interface FormValues {
  [ name: string ]: { value: any, error: string }
}

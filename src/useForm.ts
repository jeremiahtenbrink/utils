import {
  useState, FormEvent, Dispatch, SetStateAction
} from 'react';

/**
 * ## Custom Hook
 * Call useForm to handle all state changes for any form. Returns an array.
 * Index 0 is the values from the form. Index 1 is a object containing all
 * the functions to interact with the form inputs.
 *
 * @param onSubmit - `onSubmit` - Callback function to be called once the form is
 * submitted.
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
export const useForm = ( onSubmit: ( IValues ) => void,
                         formDefaultValues: {} = {},
                         formValidate: FormValidate | null = null ): [ FormValues, HandleFunctions ] => {
  
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
          throw Error( "formValidate must return a string." );
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
 * This function is called on ever onChange function call. If this function
 * is not null. The users function will be called with the name of the input
 * and the value of the input. The user can decide to return either a empty
 * string ( No Error ) or a string with the error message.
 */
export type FormValidate = ( name: string, value: any ) => string

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
   * Place this function in the forms onSubmit function or in the submit
   * button onClick method. Used to handle the forms onSubmit method.
   * Prevents default form actions if needed and returns the values to the
   * onSubmit function provided in the useForm hook arguments.
   *
   * @param e - onSubmit Form event or onClick method from the button.
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

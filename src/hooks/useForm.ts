import {
  useState, FormEvent, Dispatch, SetStateAction
} from 'react';

export const useForm = ( onSubmit: ( IValues ) => void,
                         formDefaultValues: {} = {} ): [ FormValues, HandleFunctions ] => {
  
  let [ defaultValues, setDefaultValues ] = useState( formDefaultValues );
  const [ values, setValues ]: [ FormValues, Dispatch<SetStateAction<FormValues>> ] = useState(
    formDefaultValues );
  
  const change = ( e: any ): void => {
    if ( e.target.type === "checkbox" ) {
      let { name, checked } = e.target as HTMLInputElement;
      if ( !defaultValues[ name ] ) {
        setDefaultValues( { ...defaultValues, [ name ]: false } );
      }
      setValues( { ...values, [ name ]: checked } );
      return;
    }
    
    const { name, value } = e.target;
    setValues( prevValues => ( { ...prevValues, [ name ]: value } ) );
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
  
  return [ values, { change, submit, clear } ];
};

interface HandleFunctions {
  change: ( e: any ) => void;
  submit: ( e: Event | FormEvent ) => void;
  clear: () => void;
}

interface FormValues {
  [ name: string ]: any
}


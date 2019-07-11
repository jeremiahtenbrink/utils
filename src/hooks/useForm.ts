import { useState, useEffect, ChangeEvent, FormEvent, } from 'react';

export const useForm = ( onSubmit: ( IValues ) => void,
                         initialValues: IValues ):
  [ any,
    ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void,
    ( e: FormEvent | undefined ) => void,
    () => void ] => {
  const [ values, setValues ] = useState( { ...initialValues } );
  
  const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
    
    const { name, value } = e.target;
    setValues( prevValues => ( { ...prevValues, [ name ]: value } ) );
  };
  
  const handleSubmit = ( e: FormEvent | undefined ): void => {
    if ( e.preventDefault ) {
      e.preventDefault();
    }
    onSubmit( values );
    setValues( { ...initialValues } );
  };
  
  const handleClear = (): void => {
    setValues( { ...initialValues } );
  };
  
  return [ values, handleChange, handleSubmit, handleClear ];
};

interface IValues {
  [ name: string ]: any
}


import { useState, Dispatch, SetStateAction } from 'react';

export const useToggle = ( initialState: boolean = false ): [ boolean, () => void ] => {
  const [ state, setState ]: [boolean, Dispatch<SetStateAction<boolean>> ] = useState( initialState );
  
  const toggleState = ():void => {
    setState( prev => !prev );
  };
  
  return [ state, toggleState ];
};


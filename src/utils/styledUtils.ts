/**
 *## onPropVal
 *
 * Pass in the key of the props values that you want returned once its time
 * for styled to be generated. The return value or function that gets
 * invoked will change with the props of the component.
 * @param {string} key key of the components prop whos value is requested
 * @return {OnPropValReturn}
 */
export const onPropVal = ( key: string ): OnPropValReturn => {
  
  /**
   * @typedef OnPropValReturn
   * @param {string[]} args
   * @param {any[]} funcs
   * @return {OnPropValReturnReturn}
   */
  return ( args: string[],
           ...funcs ): ( props: {} ) => OnPropValueReturnReturnReturn => {
    
    const values = { key };
    mapKeyValuePairs( args, funcs, values );
    
    /**
     * ##OnPropValReturnReturn
     * Return function of onPropVal, styled components should invoke this
     * function passing in the components props.
     *
     * @typedef OnPropValReturnReturn
     * @param {object} props
     * @return {OnPropValueReturnReturnReturn}
     */
    return ( props: {} ): OnPropValueReturnReturnReturn => {
      
      if ( key in props ) {
        
        let propsValue = props[ key ];
        
        if ( propsValue in values ) {
          
          propsValue = values[ propsValue ];
          if ( typeof propsValue === "function" ) {
            return propsValue( props );
          } else {
            
            return propsValue;
          }
        }
      } else {
        console.warn( "The theme props doesn't seem to have your desired key" );
        console.warn( "key: ", key );
      }
      
    };
  };
}

/**
 * ## OnPropValReturn
 * @typedef OnPropValReturn
 * @param {string[]} args
 * @param {any[]} funcs
 */
export type OnPropValReturn = ( args: string[], ...funcs ) => {}


/**
 * @typedef OnPropValReturnReturn
 * @param {object} props
 * @return {OnPropValReturnReturn}
 */
export type OnPropValReturnReturn = ( props: {} ) => OnPropValReturnReturn

export type OnPropValueReturnReturnReturn = Function | string | number | void;


export const onThemeValue = ( key ) => ( args, ...funcs ) => {
  
  const values = { key };
  mapKeyValuePairs( args, funcs, values );
  
  return ( props ) => {
    const { theme } = props;
    if ( theme ) {
      if ( key in theme ) {
        const themeVal = theme[ key ];
        if ( themeVal in values ) {
          if ( typeof values[ themeVal ] === "function" ) {
            return values[ themeVal ]( props );
          } else {
            
            return values[ themeVal ];
          }
        }
      } else {
        console.warn( "Theme doesn't seem to have your key" );
        console.warn( "key: ", key );
      }
    }
  };
};

/**
 * ## MapKeyValuePairs
 *
 * attempts to map the key to the value or to a function that was asigned to
 * that key in the template literal.
 *
 *
 * @param {string[]} args
 * @param  {Function[]} funcs
 * @param storage
 */
const mapKeyValuePairs = ( args, funcs, storage ) => {
  
  // loop through each string array
  args.forEach( ( key ) => {
    
    // split the string up by the colun; Always seperates the key from the
    // value in css.
    const split = key.split( ":" );
    
    // check if there are two two values after splitting.
    if ( split.length !== 2 ) {
      return;
    }
    
    // array to hold all the components styles.
    let keyValuePairs = [];
    
    // loop over each plit apart word. Checking for none alpha numeric
    // characters and remove them if found.
    split.some( word => {
      
      
      const returnedString = stripChar( word );
      if ( returnedString !== "" ) {
        
        keyValuePairs.push( returnedString );
      }
    } );
    
    if ( keyValuePairs.length === 2 ) {
      
      storage[ keyValuePairs[ 0 ] ] = keyValuePairs[ 1 ];
      
    } else if ( keyValuePairs.length === 1 ) {
      
      storage[ keyValuePairs[ 0 ] ] = funcs.shift();
    }
  } );
};

/**
 * $$ StripChar
 *
 * Takes in a string and removes all characters except for the ones
 * associated with string values;
 *
 * @param {string} str
 * @return {string} strippedString
 */
const stripChar = ( str ): string => {
  const strArray = str.split( "" );
  let strippedString = "";
  let started = false;
  strArray.some( ( letter ) => {
    if ( letter.match( /^[A-Za-z_]+$/ ) ) {
      if ( !started ) {
        started = true;
      }
      strippedString += letter;
    } else {
      if ( started ) {
        return true;
      }
    }
  } );
  
  return strippedString;
};
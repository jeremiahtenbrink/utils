<h1 align="center">Welcome to useful-react-hooks 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.2.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://jeremiahtenbrink.github.io/useful-hooks/">
    <img alt="Documentation" src="https://img.shields.io/badge/Documentation%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/useful-hooks/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/jeremiahtenbrink/useful-hooks/blob/master/LICENSE">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" target="_blank" />
  </a>
  <a href="https://twitter.com/CO_Comp_Nerd">
    <img alt="Twitter: CO_Comp_Nerd" src="https://img.shields.io/twitter/follow/CO_Comp_Nerd.svg?style=social" target="_blank" />
  </a>
</p>

> A set of custom useful hooks to be used in React Applications.

### 🏠 [Homepage](https://github.com/jeremiahtenbrink/useful-hooks)
### :page_facing_up: [Documentation](https://jeremiahtenbrink.github.io/useful-hooks/)

## Install

```sh
npm install useful-react-hooks
```

## Usage

### useAxios

#### Call setAxiosDefaultConfig and setAxiosAuthConfig to set the default and auth config for all useAxios hooks.

```jsx
//in index.js
import {setAxiosDefaultConfig, setAxiosAuthConfig} from 'useful-react-hooks';

// use Axios Config to generate default configuration. Look up axios config 
// for config options
setAxiosDefaultConfig({baseURL: "http://some-base-url/", timeout: 1000});
setAxiosAuthConfig({baseURL: 'http://some-base-url/',
                               timeout: 1000,
                               headers: {
                                   Authorization: "userTokenGoesHere"
                               }});
```
#### Then call useAxios inside of your component. 
```jsx
import {useAxios} from 'useful-react-hooks';

function Component() {
    /*
        useAxios returns an array of items. 
        first item is the request object used to make axios requests.
        second item is the value returned from the axios request.
        thrid item is a string with the error message if there was an error
        fouth item is a boolean indicating if the axios request is running
     */
    const [request, value, error, isloading] = useAxios();
    useEffect(() => {
        // default axios request.
        request.get('api/url');
        request.post('api/url', object);
        request.put('api/url', object);
        request.del('api/url/someId', object);
        //axious with auth api request.
        request.get('api/url', true);
        request.post('api/url', object, true);
        request.put('api/url', object, true);
        request.del('api/url/someId', object, true);
    }, []);
    return (
        <>
        {isLoading && <div>is loading</div>}
        {value && value.map(item => <div>{item}</div>)}
        {error && <p>{error}</p>}
        </>
    )
}
```

#### Setup useAxios in component. This does not set the default config for other useAxios calls.
```jsx
// or use config setup in component.
const [request, value, error, isLoading] = useAxios({baseURL:
"https://some-url/", timeout: 1000});

return (
    <>
    {isLoading && <div>loading</div>}
    <button onClick={() => request.post('someUrl', object)}>click me</button>
    <button onClick={() => request.put('someUrl', object)}>click me</button>
    <button onClick={() => request.del('someUrl/SomeId', object)}>click
    me</button>
    {error && <p>{error}</p>}
    </>
)
```

# useForm

```jsx
import React, {useEffect} from "react";
import {useAxios} from "useful-react-hooks"; // be sure to follow useAxios setup.

// Import useForm hook
import { useForm } from "useful-react-hooks";

function App() {
    /*
      useForm returns an array of 2 items
      The first item is a read only value (state)
      The second item is an object that includes 3 handler functions
    
      1) change, handles input changes
      2) submit, (handles form submission)
      3) clear, (clears form inputs)
    
    */
    // folow useAxios guide to set up useAxios.
    const [request, value, error, isloading] = useAxios();
    // useForm accepts two arguments
    const [state, handle] = useForm(
    // First argument is your handle submit function.
    handleAddUser,
    // Second argument is your default state. Optional
        {
          username: "John",
          password: "Dough"
        },
    //third param is your form validate function.
    formValidate
    );

    const useAuth = true;

    function handleAddUser() {
        request.post("/api/users/add", state, useAuth);
        
      // Clears form inputs
      handle.clear();
    }

    // in your form validate function you will recieve the name of the input 
    and the value of the user has input. 
    function formValidate (name, value) {
        if(name ==== "username"){
            if (value.length < 4){
                // return the error string
                return "Username must be longer than 4 characters.";
            }
            
        }else if (name === "password"){
            if (password.length < 8){
                return "Password must be longer than 8 characters.";
            }
        }
        
        return ""; // leave blank for no error. 
    }

    // Do something when the response from the axios request returns. 
    useEffect(() => {
        if(value){
            console.log(value);
        }
    }, [value]);

    return (
      <div className="App">
        <form onSubmit={handle.submit}> 
          <input
            name="username"
            value={state.username && state.username.value}
            onChange={handle.change}
          />
          {state.username && state.username.error && <p>{state.username
          .error}</p> }
    
          <input
            type="password"
            name="password"
            value={state.password && state["password"].value}
            onChange={handle.change}
          />
          {state.password && state.password.error && <p>{state.password
          .error}</p> }
          <button onClick={handle.submit}>Submit</button>
        </form>
      </div>
    );
}
````

# useEncryption && useDecryption

#### First you must setup the encryption config. Please note that keys in a react app are not safe. They end up in the build of the app and the client will have access to them. If you truly want to set up a safe key. I believe you would want to keep it on your backend and do a http request to your server to retrieve it. I am by no means a security expert. 

```jsx
//index.js
import React from 'react';
import {setEncryptionConfig} from 'useful-react-hooks';
setEncryptionConfig(process.env.REACT_APP_USEFUL_HOOKS_ENCRYPTION_KEY ||
                      "This is a totally not secret key");
```

#### Once it has been given a key as early in the app as possible. You are 
#### free to use useEncryption and useDecryption through out your app. 

#### useEncryption
```jsx
import React, {useEffect} from 'react';
import {useEncryption} from 'useful-react-hooks';

function App (props) {
    
    // useEncryption takes one optional argument. 
    // value to be encrypted can be a string or a object. 
    // it returns a array of two items. The encrypted data and a function to 
    // change the value to be encrypted. 
    const [encrypted, setValueToEncrypt] = useEncryption({name: "To Encrypt"});
    
    useEffect(() => {
        if (props.setValueToEncrypt){
            // can call setValue to encrypt anywhere and it will update the 
            //encrypted data
            setValueToEncrypt(props.setValueToEncrypt);
        }
    }, [props.valueToEncrypt]);
    
    return (
        <div>{encrypted}</div>
    )
}
```

#### useDecryption
```jsx
import React, {useEffect} from 'react';
import {useDecryption} from 'useful-react-hooks';

function App (props) {
    
    // useDecryption takes one optional argument. Value to be decrypted. String
    // return two items in a array, The decrypted data and a function to 
    // change the value to be decrypted. 
    const [decrypted, setValueToDecrypt] = useDecryption(props.valueToDecrypt);
    
    useEffect(() => {
        if (props.valueToDecrypt){
            // can call setValue to encrypt anywhere and it will update the 
            //encrypted data
            setValueToDecrypt(props.valueToDecrypt);
        }
    }, [props.valueToDecrypt]);
    
    return (
        <div>{decrypted}</div>
    )
}
```

# useLocalStorage 

```jsx
import React, {useEffect} from 'react';
import {useLocalStorage} from 'useful-react-hooks';

function App ({userId}) {

    // useLocalStorage takes two arguments. The key for local storage and the 
    inital value to use for local storage 
    const [userData, setValue, removeValue] = useLocalStorage('userData');
    const [request, value, error, isloading] = useAxios();
    
    // run use effect to create a axios request to get the userData from backend
    useEffect(() => {
        // only run request for userData if there isn't a stored value in localstorage.
        if(!storedValue){
            request.get(`/userData/${userId}`);
        }
    }, [])
    
    // run use effect when the value changes from the request call. 
    useEffect(() => {
        if (value){
            //call setValue for local storage
            setValue(value);
            
            // or you could encrypt the key and value. 
            // setEncryptionConfig must have been called before this is run. See
            // useEncryption and useDecryption hook setup for instructions. 
            setValue(value, true);
        }
    }, [value]);
    
    
    return (
        {/* to remove the token do */}
        <button onClick={() => removeValue()}>Remove User Data</button>
    );
}

```


## Author

👤 **Jeremiah Tenbrink <jeremiahtenbrink@gmail.com>**

* Twitter: [@CO_Comp_Nerd](https://twitter.com/CO_Comp_Nerd)
* Github: [@jeremiahtenbrink](https://github.com/jeremiahtenbrink)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jeremiahtenbrink/useful-hooks/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Jeremiah Tenbrink <jeremiahtenbrink@gmail.com>](https://github.com/jeremiahtenbrink).<br />
This project is [ISC](https://github.com/jeremiahtenbrink/useful-hooks/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

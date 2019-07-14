<h1 align="center">Welcome to useful-react-hooks 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.1.4-blue
  .svg?cacheSeconds=2592000" />
  <a href="https://github.com/jeremiahtenbrink/useful-hooks#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
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

## Install

```sh
npm install useful-react-hooks
```

## Usage

### useAxios

#### Call setAxiosDefaultConfig and setAxiosAuthConfig to set the default config
#### for all useAxios hooks. 
```javascript
//in index.js
import {setAxiosDefaultConfig, setAxiosAuthConfig} from 'useful-react-hooks';

// use Axios Config to generate default configuration.
setAxiosDefaultConfig({baseURL: "http://some-base-url/", timeout: 1000});

//then use useAxios hook in component. 
const [request, value, error, isloading] = useAxios();
useEffect(() => {
    request.get('api/url');
}, []);
return (
    <>
    {isLoading && <div>is loading</div>}
    {value && value.map(item => <div>{item}</div>)}
    {error && <p>{error}</p>}
    </>
)
```

#### Setup useAxios in component. This does not set the default config for 
#### other useAxios calls. 
```javascript
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
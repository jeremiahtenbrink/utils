import axios, {AxiosRequestConfig, AxiosInstance} from "axios";

const defaultConfig: AxiosRequestConfig = {
    timeout: 1000,
};

class AxiosConfig{
    
    static axiosRequest = axios.create( defaultConfig );
    static axiosAuthRequest = axios.create( defaultConfig );
    
    static setDefaultConfig( config: AxiosRequestConfig ){
        AxiosConfig.axiosRequest = axios.create( config );
    }
    
    static setAuthConfig( config: AxiosRequestConfig ){
        AxiosConfig.axiosAuthRequest = axios.create( config );
    }
    
    static getDefaultAxios(): AxiosInstance{
        return AxiosConfig.axiosRequest;
    }
    
    static getAuthAxios(): AxiosInstance{
        return AxiosConfig.axiosAuthRequest;
    }
    
    static createAxiosRequest( config: AxiosRequestConfig ): AxiosInstance{
        return axios.create( config );
    }
    
}

export default AxiosConfig;
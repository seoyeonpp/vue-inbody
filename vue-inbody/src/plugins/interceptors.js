import axios from "axios";
import store from "@/store"

axios.defaults.baseURL = 'http://18.191.222.197:8080/'

axios.interceptors.request.use(
    (config)=>{
        let {Token, isLogin} = store.state.userState;
        console.log(config)
        if(config.url.indexOf('/login')>-1){

        }else if(isLogin&&Token!=null){
            config.headers = {
                Authorization: `Bearer ${Token}`
            }
        }
        
        return config;        
    },
    (error)=>{
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (config)=>{
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export default axios;
import axios, {AxiosResponse} from "axios";
axios.defaults.headers.get['Authorization'] = `Bearer ${localStorage.access}`;

export const fetchUser = async function (): Promise<any> {
     
    const fetch =  await axios.get('https://dummyjson.com/user/me');
    const response: AxiosResponse  =  await fetch.data;
    
       return response;
}


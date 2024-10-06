import axios, {AxiosResponse} from "axios";
//

export const fetchUser = async function (Bearer_token: string): Promise<any> {
     
    const fetch =  await axios.get('https://dummyjson.com/user/me', {
                    headers: {
                        'Authorization': `Bearer ${Bearer_token}`
                    }
    });
    const response: AxiosResponse  =  await fetch.data;
    
       return response;
}


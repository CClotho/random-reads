import axios, {AxiosResponse} from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;

export const Login = async function (data: any): Promise<any> {
  try {
    const fetch = await axios.post('https://dummyjson.com/user/login', data);
    const response: AxiosResponse = fetch.data;
    // because dummyjson doesnt provide status code if the request is successful
    let status = 200;
    return {response, status: 200};
  } catch (error: any) {
    console.log("Error from dummyjson backend", error.message)
    console.log("Error message from dummyjson backend", error.response.data)
    console.log("Error Status", error.status)
    return {response: error.response.data, status: error.status}
    }
};



export const fetchUser = async function (data:any): Promise<any> {
     
    const fetch =  await axios.post('https://dummyjson.com/user/me', data);
    const response: AxiosResponse  =  await fetch.data;
    
       return response;
}

// store refresh Token in http cookie and access token in context (memory)
// for now store in localStorage
/* Login({username:'emilys', password:"emilyspass"})
.then(data => console.log(data.accessToken));
 */
import axios, {AxiosResponse} from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = true;

export const Login = async function (data: any): Promise<any> {
  try {
    const fetch = await axios.post('https://dummyjson.com/user/login', data);
    const response: AxiosResponse = fetch.data;
    // because dummyjson doesnt provide status code if the request is successful
    let status = 200;
    return {response, status: status};
  } catch (error: any) {
    console.log("Error from dummyjson backend", error.message)
    return {response: error.response.data, status: error.status}
    }
};






// store refresh Token in http cookie and access token in context (memory)
// for now store in localStorage
/* Login({username:'emilys', password:"emilyspass"})
.then(data => console.log(data.accessToken));
 */
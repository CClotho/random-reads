import axios, {AxiosResponse, } from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getBlogs = async function(): Promise<any> {

    try {
        
        const response = await axios.get('https://dummyjson.com/posts?limit=20&skip=10')
        const result = await response.data;
        let status = 200;
        return {result, status: status}
    } catch (error:any) {
        console.log("Error fetching blogs", error.message);
        return {response: error.response.data, status: error.status}
    }
}
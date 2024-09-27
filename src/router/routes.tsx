
import Login from "@pages/Login";
import App from "../App";
import Home from "../pages/Home";
import Stories from "../pages/Stories";
import SignUp from "@pages/SignUp";

export const routes = [

    {  
        /* Layout Element only*/
       element: <App/>,
        children: [
           { path: "/", element: <Home/> },
           { path: "/story", element: <Stories/>},
          
        ],
       
    },
    {   path: '/login',
        element: <Login/>
        
    },
    {   path: '/sign-up',
        element: <SignUp/>
        
    }

 ];



 /**
  * Changed routes.ts to routes.tsx after encountering typescript having type-inference error
  * https://medium.com/@ibraheemosule/resolving-typescript-error-in-react-router-v6-ebfed336bb18
  */
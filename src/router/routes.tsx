
import Login from "@pages/Login";
import App from "../App";
import Home from "../pages/Home";
import Post from "@components/story-feature/Post";
import SignUp from "@pages/SignUp";
import MainPost from "@components/story-feature/MainPost";
import Stories from "@pages/Stories";
import ProtectedRoute from "@pages/ProtectedRoute";
import Profile from "@pages/Profile";

export const routes = [

    {  
      /* Layout Element only */
      element: <App />,
      children: [
          { path: "/", element: <Home /> },
         
          { element: <ProtectedRoute />,
            children: [
                { 
                  path: "/stories",
                  element: <Stories />,
                  children: [
                    { path: "/stories/:id", element: <MainPost /> }
                    ]
                },
                {path: "/profile", element: <Profile/>},
              ]
          }
      ]
    },
    {   path: '/login',
        element: <Login/>
        
    },
    {   path: '/sign-up',
        element: <SignUp/>
        
    }
   /*  {path:"/stories/:id" ,element: <MainPost/>} */

 ];



 /**
  * Changed routes.ts to routes.tsx after encountering typescript having type-inference error
  * https://medium.com/@ibraheemosule/resolving-typescript-error-in-react-router-v6-ebfed336bb18
  */
import { AuthContext, AuthContextType, useAuth } from "features/hooks/AuthProvider";
import {routes} from "./routes";
import { createBrowserRouter,  RouterProvider, Memo, createMemoryRouter } from "react-router-dom";


import Login from "@pages/Login";
import App from "../App";
import Home from "../pages/Home";
import Post from "@components/story-feature/Post";
import SignUp from "@pages/SignUp";
import MainPost from "@components/story-feature/MainPost";
import Stories from "@pages/Stories";
import ProtectedRoute from "@pages/ProtectedRoute";
import Profile from "@pages/Profile";

const router = createBrowserRouter(routes)

export default  router;
const memory_routes =  [

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

const memory_router = createMemoryRouter(memory_routes, {
    initialEntries: 
    ["/profile"], // Start from home page where user is logged in
    initialIndex: 0}
)


export const AppRouter = function(context : AuthContextType ):React.JSX.Element {

  
    return (
        <AuthContext.Provider value={context}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}


export const MemoryApp2 = function({context} :{context: AuthContextType} ):React.JSX.Element {

  
    return (
        <AuthContext.Provider value={context}>
            <RouterProvider router={memory_router} />
        </AuthContext.Provider>
    )
}






//Should use this because it make sure we're using the right values that is returned from our Authprovider

/* 
export const AppRouter2 = function():React.JSX.Element {
        
    const context = useAuth();
    return (
        <AuthContext.Provider value={context}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}
 */
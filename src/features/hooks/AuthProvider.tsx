import { Login } from "features/api/authentication";
import { useEffect, useState , createContext, useContext} from "react";
import { Navigate } from "react-router-dom";
import { fetchUser } from "features/api/user";

// provide the data across the application using React Context Provider
// then store it in localStorage and get the tokens for every request to the server

// check if accessToken exist then proceed otherwise get refresh Token

 const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);


const AuthProvider = function({children}: {children:React.ReactNode}): React.JSX.Element {
    const[loading, setLoading]  = useState(true);
    const [authentication, setAuth] = useState(false);
    const access = localStorage.access?  localStorage.getItem('access') : '';
    
    console.log(access)
    useEffect(()=> {
          console.log("This runs everytime you call Auth provider on a component which is logically to add the refetch of refreshTokens here")
         const fetchData = async function()  {
             
              if(access) {
               // this gets reset
               setAuth(true)
               console.log("User Authenticated Status:", authentication)
               // The refresh route in dummyjson is not available only login and user/me
              /*  fetch('https://dummyjson.com/user/refresh', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({refreshToken: localStorage.refresh})

               })
               .then(res => res.json())
               .then((data)=> {
                  setAuth(true);
                  localStorage.setItem('access', data.accessToken);
                  localStorage.setItem('refresh', data.refreshToken); 
                  console.log("Refreshed", data);
               }); */
           
         }
         else if(access === undefined || access === null) {
            console.log("User Authenticated Status:", authentication)
            console.log("User is logged out.")
            localStorage.clear();
            setAuth(false);
            <Navigate to="/login" replace={true} />
         }
         setLoading(false);
      }
         fetchData();
    },[])

     const context = {
        loading,
        authentication,
        setLoading,
        setAuth,
     }
    

     return (
      <AuthContext.Provider value={context}>
          {loading ? <p>Loading... from AuthProvider</p> : children}
      </AuthContext.Provider>
     )

}

export default AuthProvider;
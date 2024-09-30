import { useEffect, useState , createContext, useContext} from "react";
import { fetchUser } from "features/api/user";

// provide the data across the application using React Context Provider
// then store it in localStorage and get the tokens for every request to the server

// check if accessToken exist then proceed otherwise get refresh Token

 const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);


const AuthProvider = function({children}: {children:React.ReactNode}): React.JSX.Element {

   const[loading, setLoading]  = useState(true); // To make sure the reset authentication gets set before being redirected to login page or home page
   const [authentication, setAuth] = useState(false); 
   const [user, setUser] = useState<any>({});
   const access = localStorage.access?  localStorage.getItem('access') : false;
         useEffect(()=> {
            console.log("This runs everytime you call Auth provider on a component which is logically to add the refetch of refreshTokens here")
           const fetchData = async function()  {
                if(access) {
   
                 try {
                  const response: any = await fetchUser(access);
                  setUser(response);
                   setAuth(true);
                
                  //console.log(response);
                  
                } catch (error : any) {
                  if(error.status === 401) {
                     console.log(error.status)
                     setAuth(false);
                     localStorage.clear();
                     console.log(error)

                  }
                  console.log('Error fetching user:', error);
                } finally {
                  setLoading(false);
                }
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
           else if(!access) {
              console.log("User Authenticated Status:", authentication)
              console.log("User is logged out.")
              localStorage.clear();
              setAuth(false);
           }
           setLoading(false);
        }
           fetchData();
      },[access, authentication])
      

     const context = {
        loading,
        user,
        authentication,
        setLoading,
        setAuth,
        setUser
     }
    
     console.log("User Authenticated After Auth Status:", authentication)
     return (
      <AuthContext.Provider value={context}>
          {loading && access ? <p>Loading... from AuthProvider</p> : children}
      </AuthContext.Provider>
     )

}

export default AuthProvider;
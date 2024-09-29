import React, { useEffect,useState , createContext, useContext} from "react";
import { fetchUser } from "features/api/user";
    

const UserContext = createContext<any>(null);
export const useUser=() => useContext(UserContext);
// Simple caching of user's basic information to render for UI
// Otherwise subsequent request will be implemented if we only store it on a state because state (memory) resets everytime
const UserProvider = function({children}: {children: React.ReactNode}): React.JSX.Element {
   const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const User = {firstName, lastName};
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>(User);
    const access = localStorage.access?  localStorage.getItem('access') : '';
    
    useEffect(()=> {
        const fetchProfile =async function(): Promise<any> {
           // will only fetch if there either local storage values is present
            if (access && firstName === null || undefined || lastName === null || undefined) {
                setLoading(true);
                console.log("It rerendered")
                console.log("Current state of user before fetching", user)
        
                try {
                  const response: any = await fetchUser();
                  localStorage.setItem('firstName', response.firstName);
                  localStorage.setItem('lastName', response.lastName);
                  setUser(response);
                  
                } catch (error) {
                  console.error('Error fetching user:', error);
                } finally {
                  setLoading(false);
                }
              }
            };
            
        fetchProfile();
         
    }, [access])  

    const context = {
        user,
        loading,
        setUser,
        setLoading
    }
       
    return (
        <UserContext.Provider value={context}>
        {loading ? <p>Loading...from UserProvider</p> : children}
       </UserContext.Provider>
    )
    
}

export default UserProvider;
import { useAuth } from 'features/hooks/AuthProvider';
import { useUser } from 'features/hooks/useUser';
import { Outlet,Navigate} from 'react-router-dom';


const ProtectedRoute = function ():React.ReactNode {
    const {authentication, loading} = useAuth(); // keeps running unless you logged out
        
    console.log("Authentication from protected route", authentication)
   
 
    if(loading) {
    return <p>Loading...</p>;
   }

   if(!authentication) {
    return <Navigate to="/" replace={true}/>
    }

   
   if(authentication) {
    return  <Outlet/>

   }
   
  
}


export default ProtectedRoute;
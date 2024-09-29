import { useAuth } from 'features/hooks/AuthProvider';
import { useUser } from 'features/hooks/useUser';
import { Outlet, Navigate} from 'react-router-dom';


const ProtectedRoute = function ():React.ReactNode {
    const {authentication, loading} = useAuth(); // keeps running unless you logged out
    const {user} = useUser();
    console.log("Authentication from protected route", authentication)
   if(loading) {
    return <p>Loading...</p>;
   }
   
   if(authentication) {
    return authentication && user ? <Outlet/> : <Navigate to="/login" replace={true}/>
   }
  
}


export default ProtectedRoute;
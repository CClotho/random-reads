import { useAuth } from 'features/hooks/AuthProvider';
import { useUser } from 'features/hooks/useUser';
import { Outlet, Navigate} from 'react-router-dom';


const ProtectedRoute = function ():React.ReactNode {
    const {authentication, loading} = useAuth(); // keeps running unless you logged out
    const {user} = useUser();

    console.log("Access Token");

   if(loading) {
    return <p>Loading...</p>;
   }

    return authentication && user ? <Outlet/> : <Navigate to="/login"/>
}


export default ProtectedRoute;
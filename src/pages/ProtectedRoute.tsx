import { useAuth } from 'features/hooks/AuthProvider';
import { Outlet, Navigate} from 'react-router-dom';


const ProtectedRoute = function ():React.ReactNode {
    const {authentication, loading} = useAuth(); // keeps running unless you logged out
    //const navigate = useNavigate();
    console.log("Access Token");

   if(loading) {
    return <p>Loading...</p>;
   }

    return authentication ? <Outlet/> : <Navigate to="/login"/>
}


export default ProtectedRoute;
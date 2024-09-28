import LoginForm from "@components/login-feature/LoginForm";
import { useAuth } from 'features/hooks/AuthProvider';
import { redirect } from 'react-router-dom';
import { useEffect } from "react";

const Login = function(): React.JSX.Element {
    
    const {authentication} = useAuth();
 
   
  
    if(!authentication) {
      redirect("/login")
    }
 
    
    return (

        <>
            <nav></nav>
            <div className="form-wrapper">
                <LoginForm/>
            
            </div>
        </>
    )
}


export default Login;
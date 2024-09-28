import SignUpForm from "@components/signup-feature/SignUpForm"
import { useEffect } from "react";
import { useAuth } from 'features/hooks/AuthProvider';
import { useNavigate } from 'react-router-dom';
const SignUp = function(): React.JSX.Element {

    const {authentication} = useAuth();
    const navigate = useNavigate();
    
    useEffect(()=> {
     if(authentication) {
      return navigate('/')
     }
    },[authentication])
    return (
       <>
         <nav></nav>
        <div className="form-wrapper">
            <SignUpForm/>
        
        </div>
       </>
    )
}

export default SignUp;
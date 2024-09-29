// or add the useLoginForm hooks in the same field
// or dnt need to create separate hook for this LoginForm
import { useState } from "react"
import Input from "@components/common/Input";
import Avatar from "@components/common/Avatar";
import { Link } from "react-router-dom";
import { Login } from "features/api/authentication";
import { useAuth } from "features/hooks/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useUser } from "features/hooks/useUser";

interface LoginFormState {
    username: string,
    password: string,
    expiresInMins: number,
}

const LoginForm = function() : React.JSX.Element {
    const [formData, setFormData] = useState<LoginFormState>({username: '', password: '', expiresInMins: 30})
    const {setAuth} = useAuth();
    const {setUser} = useUser();
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) :void {
        const {name, value} = e.target;
    
        setFormData((prevState: LoginFormState) => ({...prevState, [name]:value}));
        //setFormData({...formData, [name]:value});
        return;
    }

    const handleSubmit = async function(e: React.ChangeEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

       
            const result = await Login(formData);
            const {response, status} = result;
            console.log(result)
             if(response && status === 200) { // no status because it doesn't return any status
                console.log(response);
                setAuth(true);
                setUser(response)
                console.log("User after logged in:", response);
                localStorage.setItem('access', response.accessToken);
                localStorage.setItem('refresh', response.refreshToken);
                localStorage.setItem('firstName', response.firstName);
                localStorage.setItem('lastName', response.lastName);
                
                navigate('/stories');
           
            }
            else if(response &&  (status === 400 || status === 401)) {
                setError(response.message);
                console.log("Error from Login", response, status)
            }
     
        

    }
    return(

        <form className="login-form "onSubmit={handleSubmit}>
            {/*This would be the main logo */}
            <Avatar image_link="images/black-cat.png" alt="avatar"/>
            <Input name="username" placeholder="Rhian Jane" title="Username" value={formData.username} onChange={handleChange}/> 
            <Input type="password" name="password" placeholder="******"  title="Password" value={formData.password} onChange={handleChange}/>
            <div> {error ? error : ''}</div>
            <div className="Btn">  <button className="formBtn" type="submit" /* onClick={()=> alert(JSON.stringify(formData))} */> Login</button></div>
            <span id="signup-link"><Link to="/sign-up">Don't have an account? Sign Up</Link></span>

        </form>


    )
}

export default LoginForm;
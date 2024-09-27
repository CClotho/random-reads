// or add the useLoginForm hooks in the same field
// or dnt need to create separate hook for this LoginForm
import { useState } from "react"
import Input from "@components/common/Input";
import Avatar from "@components/common/Avatar";
import { Link } from "react-router-dom";

interface LoginFormState {
    username: string,
    password: string,
}

const LoginForm = function() : React.JSX.Element {
    const [formData, setFormData] = useState<LoginFormState>({username: '', password: ''})

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) :void {
        const {name, value} = e.target;
    
        setFormData((prevState: LoginFormState) => ({...prevState, [name]:value}));
        //setFormData({...formData, [name]:value});
        return;
    }

    const handleSubmit = function(e: React.ChangeEvent<HTMLFormElement>): void {
        e.preventDefault();
    }
    return(

        <form className="login-form "onSubmit={handleSubmit}>
            {/*This would be the main logo */}
            <Avatar image_link="images/black-cat.png" alt="avatar"/>
            <Input name="username" placeholder="Rhian Jane" title="Username" value={formData.username} onChange={handleChange}/> 
            <Input name="password" placeholder="******"  title="Password" value={formData.password} onChange={handleChange}/>
            <div className="Btn">  <button className="formBtn" type="button" onClick={()=> alert(JSON.stringify(formData))}> Login</button></div>
            <span id="signup-link"><Link to="/sign-up">Don't have an account? Sign Up</Link></span>

        </form>


    )
}

export default LoginForm;
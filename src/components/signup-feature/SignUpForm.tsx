import { useState } from "react";
import Input from "@components/common/Input";
import useImageUpload from "@components/hooks/useImageUpload";
import Avatar from "@components/common/Avatar";

interface SignUpFormState {
    username: string,
    email: string,
    password:string,
    confirm_password: string,

   
}




const SignUpForm = function (): React.JSX.Element {

    const {preview, onSelectedFile} = useImageUpload();
     
    const [formData, setFormData] = useState<SignUpFormState>
    ({ username: '',
        email: '',
        password:'',
        confirm_password: ''
    })

    const handleChange = function (e:React.ChangeEvent<HTMLInputElement>): void {
        
        const {name, value}= e.target;

        setFormData((prevState: SignUpFormState)=> ({...prevState, [name]: value}));
        
        
        return;

      
    
    }

    const handleSubmit = function (e: React.ChangeEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form className="signup-form " onSubmit={handleSubmit}>
            <Avatar image_link={preview ? preview :'images/black-cat.png'} alt="avatar"/> 
            <input type="file" onChange={onSelectedFile} className="file" />
            <div className="border-top"></div>
            <Input className="" title="Username" name="username" value={formData.username} onChange={handleChange}/>
            <Input title="Email" name="email" value={formData.email} onChange={handleChange}/>
            <Input title="Password" name="password" value={formData.password} onChange={handleChange}/>
            <Input title="Confirm Password" name="confirm_password" value={formData.confirm_password} onChange={handleChange}/>
           <div className="Btn">  <button className="formBtn" type="button"> Sign Up</button></div>
        </form>
    )
}

export default SignUpForm;
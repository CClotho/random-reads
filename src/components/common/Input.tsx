import '/src/styles/component/form.scss';
// Type of functions
interface InputTypes {
    name: string,
    title: string,
     placeholder?: string,
     type?: string
     value?: string,
     className?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
     
    setState?: React.Dispatch<React.SetStateAction<string>>;
     /** when passing down the state setter function returned by `useState` 
      * to a child component. `number` is an example, swap out
      *  with whatever the type of your state 
      * */

}

const Input = function({className, type, title, value, name, onChange, setState, placeholder}: InputTypes): React.JSX.Element {

    return (
        <div className={`form_controls ${className ? className : ''}`}>
            <label id={name}className="form_label"> {title}</label>
            <input type={type? type : 'text'} className="form_input" value={value}onChange={onChange} name={name}placeholder={placeholder}></input>
        </div>

    )
}



export default Input;
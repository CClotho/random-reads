
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '@components/login-feature/LoginForm';
import SignUpForm from '@components/signup-feature/SignUpForm';
import Avatar from '@components/common/Avatar';

function App() {


  return (
    
    <>
     {/* Not working*/}
     <Link to="/story"> Go to story page</Link>
     <Link to="/"> Go to new</Link>
     <img src="/images/black-cat.png" alt="cat"></img>
      <LoginForm/>
      <SignUpForm/>
      <div> Photo under here</div>
      <Avatar image_link="images/black-cat.png" alt="text"/>
      <Outlet />
    </>
  )
}

export default App;

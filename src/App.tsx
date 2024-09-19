
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '@components/login-feature/LoginForm';
import SignUpForm from '@components/signup-feature/SignUpForm';
import Avatar from '@components/common/Avatar';

function App() {


  return (
    
    <>
     {/* Not working*/}
     <div>
     <Link to="/story"> Go to story page</Link>
     <Link to="/"> Go to new</Link>
     </div>
      <SignUpForm/>
      <LoginForm/>
      <Outlet />
    </>
  )
}

export default App;

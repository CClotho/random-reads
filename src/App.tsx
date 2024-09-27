
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '@components/login-feature/LoginForm';
import SignUpForm from '@components/signup-feature/SignUpForm';
import NavBar from '@components/layout/NavBar';
import '@styles/global/app.scss';

function App() {


  return (
    
    <main>
     {/* Not working*/}
      <NavBar/>
      <br/>
      <Outlet />
     {/*  <SignUpForm/>
      <br/>
      <LoginForm/> */}
    
    </main>
  )
}

export default App;

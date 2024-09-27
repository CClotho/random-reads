
import '@styles/global/app.scss';
import 'App.css';
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '@components/login-feature/LoginForm';
import SignUpForm from '@components/signup-feature/SignUpForm';
import NavBar from '@components/layout/NavBar';


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

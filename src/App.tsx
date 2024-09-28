
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '@components/login-feature/LoginForm';
import SignUpForm from '@components/signup-feature/SignUpForm';
import NavBar from '@components/layout/NavBar';
import '@styles/global/app.scss';
import { useEffect } from 'react';
import { useAuth } from 'features/hooks/AuthProvider';
import {Navigate } from 'react-router-dom';
import MainNav from '@components/layout/MainNav';
function App() {

   const{authentication} = useAuth();
   


  return (
    
    <main>
 
       {authentication ? <MainNav/> : <NavBar/>}
      <br/>
     <Outlet/> 

     
    
    
    </main>
  )
}

export default App;

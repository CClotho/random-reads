
import { Outlet } from 'react-router-dom';
import NavBar from '@components/layout/NavBar';
import '@styles/global/app.scss';
import { useAuth } from 'features/hooks/AuthProvider';
import MainNav from '@components/layout/MainNav';

function App() {

   const{authentication} = useAuth();

   


  return (
    
    <main id="main-app">
 
       {authentication  ?  <MainNav/> : <NavBar/>}
      <br/>

    
      <Outlet/> 

     
    
    
    </main>
  )
}

export default App;


import { Link, Outlet } from 'react-router-dom';
import NavBar from '@components/layout/NavBar';
import '@styles/global/app.scss';
import { useAuth } from 'features/hooks/AuthProvider';
import MainNav from '@components/layout/MainNav';
import MagazineLayout from '@components/layout/Magazine';
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

import HeaderLogo from "@components/common/HeaderLogo";
import { Link } from "react-router-dom"; 
import { useAuth } from "features/hooks/AuthProvider";

const NavBar = function(): React.JSX.Element {
    const {setAuth} = useAuth();
   
    return(
       <header className="main-header">
        <HeaderLogo/>
        <nav className="main-nav">
            <ul className="nav-links"> 
                <li className="links"><Link to="/stories">Stories</Link></li>
                <li className="links"><Link to="/genre">Genre</Link></li>      
            </ul>

            <ul className="nav-links"> 
                <li className="links"><Link to="/">Home</Link></li>
                <li className="links"><Link to="/sign-up">Sign Up</Link></li>
                <li className="links"><Link to="/login">Login</Link></li>            
            </ul>


        </nav>
       </header>
    )
}




export default NavBar;
import HeaderLogo from "@components/common/HeaderLogo";
import { Link, replace } from "react-router-dom"; 
import { useAuth } from "features/hooks/AuthProvider";


const MainNav = function(): React.JSX.Element {
    const {authentication, setAuth} = useAuth();

    const handleLogout = function() {
        setAuth(false);
        localStorage.clear();
        
    }
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
                <li className="links"><Link to="/profile">Profile</Link></li>
                <button className="nav-btn"type="button" onClick={handleLogout} > Logout</button>
                
            </ul>


        </nav>
       </header>
    )
}




export default MainNav;
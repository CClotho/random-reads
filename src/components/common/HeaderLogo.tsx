import {Link} from "react-router-dom";
const HeaderLogo = function():React.JSX.Element {
    return (
        <div id="logo-header">
            <div className="header-design">
                <div className="accessories"></div>
                
                <h2 id="h2"><Link to="/">Random Reads</Link></h2>
                <div className="accessories"></div>
            </div>

            <span className="header-border"></span>
     </div>
    )
}

export default HeaderLogo;
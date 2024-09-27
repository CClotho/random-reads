import HeaderLogo from "@components/common/HeaderLogo";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = function() {

   // Add react-helmet for neta tags (SEO) 
    const [toggle, setToggle] = useState<boolean>(false);
    return (
      
      <>
       {/* <div onClick={() => setToggle(!toggle)}>Browse Stories</div> */}
        <header className="home-header">
          <div className="logo-container"> 
            <HeaderLogo/>
            <h2> Browse Stories</h2>
          </div>
        </header>
        
 
        
      </>
    )
  }
  
  export default Home;
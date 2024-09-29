import HeaderLogo from "@components/common/HeaderLogo";
import Post from "@components/story-feature/Post";
import MagazineLayout from "@components/layout/Magazine";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = function() {

   // Add react-helmet for neta tags (SEO) 
    const [toggle, setToggle] = useState<boolean>(false);
   
    return (
      
      <main className="home">
       {/* <div onClick={() => setToggle(!toggle)}>Browse Stories</div> */}
       {/*  <header className="home-header">
          <div className="logo-container"> 
            <HeaderLogo/>
            <h2> Browse Stories</h2>
          </div>
         
        </header> */}

        <MagazineLayout/>
        
     
 
        
      </main>
    )
  }
  
  export default Home;
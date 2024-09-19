import { useState } from "react";
import { Link } from "react-router-dom";

const Home = function() {
   
    const [toggle, setToggle] = useState<boolean>(false);
    return (
      
      <>
       {/* <div onClick={() => setToggle(!toggle)}>Browse Stories</div> */}
        <div>       <Link to="/story"> Home</Link> </div>
 
        
      </>
    )
  }
  
  export default Home;
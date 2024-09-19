import { useState } from "react";
import { Link } from "react-router-dom";

const Home = function() {
   
    const [toggle, setToggle] = useState<boolean>(false);
    return (
      
      <>
       {/* <div onClick={() => setToggle(!toggle)}>Browse Stories</div> */}
        <div> Home</div>
        <Link to="/story"> Go to story page</Link>
        
      </>
    )
  }
  
  export default Home;
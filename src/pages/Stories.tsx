import '@styles/pages/story.scss';
import Post from "@components/story-feature/Post";
import { Outlet } from "react-router-dom";

const  Stories = function() {
  
  
   
    return (
      
      <main className="story-page">
        <Post/>
        <Outlet/>
        
      </main>
    )
  }
  
  export default Stories;
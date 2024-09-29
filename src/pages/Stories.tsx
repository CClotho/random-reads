import '@styles/pages/story.scss';
import Post from "@components/story-feature/Post";
import { Outlet } from "react-router-dom";
import MagazineLayout from '@components/layout/Magazine';

const  Stories = function() {
  
  
   
    return (
      
      <main className="story-page">
         <Post/> 
        <Outlet/>
        
      </main>
    )
  }
  
  export default Stories;
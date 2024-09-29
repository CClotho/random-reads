import '@styles/pages/story.scss';
import Post from "@components/story-feature/Post";
import { Outlet } from "react-router-dom";
import MagazineLayout from '@components/layout/Magazine';
import PostList from '@components/story-feature/PostList';
import { useRef } from 'react';



const  Stories = function() {

   
    return (
      
      <main className="story-page">
         <div className="scroll">
          <PostList/>
      
         </div>
        <Outlet/>
        
      </main>
    )
  }
  
  export default Stories;
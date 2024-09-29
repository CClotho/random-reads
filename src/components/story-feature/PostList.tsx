import { useEffect, useState } from "react";
import { getBlogs } from "features/api/blogs";
import Post from "./Post";
import { Fragment } from "react";
import { PostSchema } from "./Post";

interface PostListType{
    result: {
        posts: PostSchema[]
    }
}
    const PostList = function(): React.JSX.Element {
        
        const [loading, setLoading] = useState<boolean>(false);
        const [posts, setPosts] = useState<PostListType>({result: {posts:[]}});
        
        useEffect(()=> {

            const fetchBlogs = async function():Promise<any> {
               if(posts.result?.posts?.length === 0) {
                try {
                    setLoading(true)
                   const response = await getBlogs();
                   console.log("Posts", response)
                   setPosts(response);
                  } catch (error: any) {
                   console.log("Error fetching blogs", error.response, error.status);
                  }
                  finally {
                   setLoading(false);
                  }
               }
            }

         fetchBlogs();

        }, [posts])

        if(loading) {
            <h2>Loading ....</h2>
        }

        return (
            
            <section className="Posts">
                {posts.result.posts && posts.result.posts.length > 0 ? (posts.result.posts.map((p: any)=> {
                   return <Fragment key={p.id}><Post  img="/images/black-cat.png" title={p.title} text={p.body}/></Fragment>
                })): ''}
            </section>
            
        )

}



export default PostList;
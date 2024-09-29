import '@styles/component/posts.scss';

export interface PostSchema {
    img: string,
    text: string,
    title: string,
}

const Post = function({img, text, title}: any): React.JSX.Element {
   
     const handleButton = function () {

     }
    return (
        <>
            <article className="post">
              <section className="post-title">
                <figure className="post-figure">
                    <img src={img} 
                    className="post-image"
                    alt="DoA" />
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                </figure>
                <h2>{title}</h2>
              </section>

                <p className="description">
                    {text}
                    <button type="button" onClick={handleButton}>Continue Reading</button>
                </p>
               
            </article>

           
           
        </>
    )
}


export default Post;
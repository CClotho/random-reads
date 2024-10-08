
import '@styles/component/posts.scss';

const MainPost = function(): React.JSX.Element {

    return (
        <>
        <article className="main-article">
        <section className="main-post">
                <figure className="main-figure">
                    <img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0895a81c-b31d-4333-8406-15c7712a1445_840x673.png" 
                    className="main-image"
                    alt="DoA" />
                <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                </figure>
                <h2>Post Title</h2>
              </section>

                <p className="main-story">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Adipisci nesciunt nihil aliquam placeat. Magni, ipsam.
                    <span> Continue Reading</span>
                </p>

        </article>
        </>
    )
}

export default MainPost;
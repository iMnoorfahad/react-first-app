import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const PostView = () => {
    const { id } = useParams();
    const history = useHistory();
    const { data:post, isLoading} = useFetch(`http://localhost:8000/posts/${id}`);
    const handelDelete = (id) => {
        fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Post Deleted");
            history.push('/');
        });
    }

    return ( 
        <div>
            <h1 className="post-title">Post view</h1>
            <div className="post-details">
            <article>
                {isLoading && <h1>Loading...</h1>}
                { post && <h2>{post.title}</h2>}
                { post && <p>{post.body}</p>}
            </article>
            <button onClick={()=> handelDelete(post.id)}> Delete Post</button>
            </div>
        </div>
     );
}
 
export default PostView;
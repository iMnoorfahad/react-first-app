import { Link } from "react-router-dom";

const PostList = ({posts,title, handelDelete}) => {

    // const posts = props.posts;
    // const title = props.title;

    return ( 
        <div className="post-list">
        <h1 className="post-title">{title}</h1>
            {posts.map(post => (
                
                <div className="post-preview" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={'/post-view/' + post.id}> <button className="post-details-button"> View More</button> </Link>
                </div>
            ))}
        </div>
     );
}
 
export default PostList;
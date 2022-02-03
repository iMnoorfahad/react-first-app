import useFetch from '../hooks/useFetch';
import PostList from './PostList';
const Home = () => {

    const {data:posts,isLoading} = useFetch('http://localhost:8000/posts');
    const handelDelete = (id) => {
        fetch('http://localhost:8000/posts/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    

    return ( 
        <div className="home">
           {isLoading && <h1>Loading...</h1>}
           { posts && <PostList posts={posts} title='All User Post' handelDelete={handelDelete} />}
        </div>
     );
}
 
export default Home;
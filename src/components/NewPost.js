import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();
    const HandelSubmit = (e) =>{

        e.preventDefault();
        const blog = { title, body, author };
        setPending(true);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blog)
        }).then((e)=>{
            console.log('Post Created');
            // history.go(-1);
            history.push('/');
            setPending(false);
            setTitle('');
            setBody('');
            setAuthor('');
        })

    }
    
    return ( 
        <div className="new-post">
            <h2>Create New Post</h2>
            <form onSubmit={HandelSubmit}>
                <label> Post Title </label>
                <input 
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post Title"
                />
                <label> Post Description </label>
                <textarea 
                    name="blogbody" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    id="" 
                    cols="30"
                    rows="10"
                    placeholder="Post Description"
                    required/>
                <label> Post Author </label>
                <select 
                    name="author" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="">Select Author</option>
                    <option value="1">Noor</option>
                    <option value="2">Ali</option>
                    <option value="3">Ahmed</option>
                </select>
                { !pending && <button type="submit">Create Post</button> }
                { pending && <button type="submit" disabled>Posting ...</button> }
            </form>
        </div>
     );
}
 
export default NewBlog;
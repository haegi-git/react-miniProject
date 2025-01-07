import { useEffect, useState } from "react";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){
    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
            setIsFetching(false);
        }
        fetchPosts();

    },[]);

    

    const addPostHandler = (post) => {
        fetch('http://localhost:8080/posts',{
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((prevPosts) => {
            return [post, ...prevPosts];
        });
    }
    return(
        <>
            
            
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color: '#fff'}}>
                <h2>No posts available. Start adding some!</h2>
                </div>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post,index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>
            )}
            {isFetching && (
                <div style={{textAlign: 'center', color: '#fff'}}>
                    <h2>Loading...</h2>
                </div>
            )}
            
        </>
    )
}

export default PostsList;
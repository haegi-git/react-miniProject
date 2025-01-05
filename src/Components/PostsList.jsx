import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

function PostsList({isPosting,hideModalHandler}){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
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
            {isPosting && <Modal hideModalHandler={hideModalHandler}>
                <NewPost
                hideModalHandler={hideModalHandler}
                addPostHandler={addPostHandler}/>
                </Modal>}
            
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: '#fff'}}>
                <h2>No posts available. Start adding some!</h2>
                </div>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post,index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>
            )}
            
        </>
    )
}

export default PostsList;
import Post from "./Post";
import classes from './PostsList.module.css';
import { useLoaderData } from "react-router-dom";

function PostsList(){
    const posts = useLoaderData();

    return(
        <>
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: '#fff'}}>
                <h2>No posts available. Start adding some!</h2>
                </div>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                ))}
            </ul>
            )}
            
        </>
    )
}

export default PostsList;
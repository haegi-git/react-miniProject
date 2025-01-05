import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

function PostsList({isPosting,hideModalHandler}){

    const [posts, setPosts] = useState([]);

    const addPostHandler = (post) => {
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
            
            <ul className={classes.posts}>
                {posts.map((post,index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
                <Post author="Haegi" body="HRRRR" />
            </ul>
        </>
    )
}

export default PostsList;
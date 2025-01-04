import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';
import Modal from "./Modal";

function PostsList({isPosting,hideModalHandler}){
    

    return(
        <>
            {isPosting && <Modal hideModalHandler={hideModalHandler}>
                <NewPost
                hideModalHandler={hideModalHandler}/>
                </Modal>}
            
            <ul className={classes.posts}>
                <Post author="Haegi" body="HRRRR" />
            </ul>
        </>
    )
}

export default PostsList;
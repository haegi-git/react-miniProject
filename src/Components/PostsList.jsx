import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){
    return(
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="John" body="Hello, world!" />
                <Post author="Haegi" body="HRRRR" />
            </ul>
        </>
    )
}

export default PostsList;
import { useLoaderData, Link } from 'react-router-dom';
import classes from './PostDetails.module.css';
import Modal from '../Components/Modal';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('https://react-miniproject-2r8o.onrender.com/' + params.id)
  console.log(response)
  const resData = await response.json();
  console.log(resData)
  return resData.post;
}
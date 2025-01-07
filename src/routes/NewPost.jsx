import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../Components/Modal';
import { Link } from 'react-router-dom';

function NewPost({addPostHandler}) {
  
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const changeBodyHandler = (event) => {
      console.log(event.target.value);
      setEnteredBody(event.target.value);
  }
  const changeAuthorHandler = (event) => {
      console.log(event.target.value);
      setEnteredAuthor(event.target.value);
  }

  const submitHandler = (event) => {
      event.preventDefault();
      const postData = {
          body: enteredBody,
          author: enteredAuthor
      }
      console.log(postData);
      hideModalHandler();
      addPostHandler(postData)
    }
      
  return (
    <Modal>
    <form onSubmit={submitHandler} className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler} />
      </p>
      <p className={classes.actions}>
          <button>Submit</button>
          <Link to="/" type='button'>Cancel</Link>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;

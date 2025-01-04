import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost() {
  const [testText, setTestText] = useState('');
  function changeBodyHandler(event) {
    console.log(event.target.value);
    setTestText(event.target.value);
  }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{testText}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;

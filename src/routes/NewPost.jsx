import { useState } from 'react';
import classes from './NewPost.module.css';
import Modal from '../Components/Modal';
import { Form, Link, redirect } from 'react-router-dom';

function NewPost() {
  
      
  return (
    <Modal>
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name='body' id="body" required rows={3}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input name='author' type="text" id="name" required/>
      </p>
      <p className={classes.actions}>
          <button>Submit</button>
          <Link to="/" type='button'>Cancel</Link>
      </p>
    </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}){
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('https://react-miniproject-2r8o.onrender.com/posts',{
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    }
});
return redirect('/');
}
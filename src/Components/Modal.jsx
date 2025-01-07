import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) {

  const navigate = useNavigate();
  function hideModalHandler() {
    navigate('/')
  }

  return (
    <>
        <div onClick={hideModalHandler} className={classes.backdrop}></div>
        <dialog open={true} className={classes.modal}>{children}</dialog>
    </>
  );
}
export default Modal
import { useState } from "react";
import MainHeader from "./Components/MainHeader";
import PostsList from "./Components/PostsList";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const hideModalHandler = () => {
      setModalIsOpen(false);
  }

  const onCreatePost = () => {
      setModalIsOpen(true);
  }
  return (
    <>
    <MainHeader onCreatePost={onCreatePost}/>
    <main>
      <PostsList hideModalHandler={hideModalHandler} isPosting={modalIsOpen}/>
    </main>
    </>
  );
}

export default App;

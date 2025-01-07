import { Outlet } from "react-router-dom";
import PostsList from "../Components/PostsList";

function Posts() {
  return (
    <>
    <Outlet />
    <main>
      <PostsList />
    </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const response = await fetch('https://react-miniproject-2r8o.onrender.com/posts');
  const data = await response.json();

  return data.posts
}

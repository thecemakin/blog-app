import "./Posts.css"
import Post from "../post/Post";
import { useEffect, useState } from "react";

export default function Posts() {

  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=7")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="posts">
      <div className="container">
        {
          users.length > 0 && users.map((post) => <Post key={post.id} data={post} />)
        }
      </div>
    </div>
  )
}

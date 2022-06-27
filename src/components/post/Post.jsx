import "./Post.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Post() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
               // console.log(data);
            });
    }, [setUser]);

    return (
        <div className="container">
        
            {users.map((user) => (
                <>
                <div className="post">{}
                    <img
                        className="post-img"
                        src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg"
                        alt="Pic"
                    />
                    <div className="post-info">
                        <div className="post-cats">
                            <span className="post-cat">Music</span>
                            <span className="post-cat">Life</span>
                        </div>
                        <span className="post-title">
                            <Link
                                style={{ textDecoration: "none", color: "inherit" }}
                                to="/post/:postId"
                            >
                                {user.title}
                            </Link>
                        </span>
                        <hr />
                        <span className="post-date">1 hour ago</span>
                    </div>
                    <p className="post-desc">
                        {user.body}
                    </p>
                    </div>
                </>
            ))}
        
        </div>
    );
}

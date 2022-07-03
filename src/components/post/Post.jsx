import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ data }) {
    return (
        <div className="post">{ }
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
                        {data.title}
                    </Link>
                </span>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-desc">
                {data.body}
            </p>
        </div>
    );
}

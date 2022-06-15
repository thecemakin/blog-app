import "./Post.css";
import {Link} from "react-router-dom";

export default function Post() {
    return (
    <div className="post">  
    <img className="post-img" src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg" alt="Pic" />
    <div className="post-info">
        <div className="post-cats">
            <span className="post-cat">Music</span>
            <span className="post-cat">Life</span>
        </div>
        <span className="post-title">
        <Link style={{textDecoration:"none",color:"inherit"}} to="/post/:postId">Lorem, ipsum dolor.</Link></span>
        <hr />
        <span className="post-date">1 hour ago</span>
    </div>
    <p className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fuga sint aut fugiat, repellendus unde minus odit quas eum illum aperiam officiis minima eaque, atque nulla id accusamus inventore vero.</p>
    </div>
    )
}

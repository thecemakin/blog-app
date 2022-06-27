import {Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
    const user = true;
    return (
    <div className="top">
        <div className="top-left">
            <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-instagram-square"></i></a>
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-facebook"></i></a>
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-twitter"></i></a>
            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-linkedin"></i></a>
        </div>
        <div className="top-center">
            <ul className="top-list">
                <li className="top-list-item">
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/">HOME</Link>
                </li>
                <li className="top-list-item">
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/about">ABOUT</Link>
                </li>
                <li className="top-list-item">
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/albums">ALBUMS</Link>
                </li>
                <li className="top-list-item">
                    <Link style={{textDecoration:"none",color:"inherit"}} to="/write">WRITE</Link>
                </li>
                <li className="top-list-item">{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="top-right">
            {
                user ? (
                    <img className="top-image" src="https://pbs.twimg.com/profile_images/1525578089010536451/YoZAcGOi_400x400.jpg" alt="profile-img" />
                ):
                (
                    <ul className="top-list">
                        <li className="top-list-item">
                        <Link style={{textDecoration:"none",color:"inherit",marginRight:"15px"}} className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="top-list-item">
                        <Link style={{textDecoration:"none",color:"inherit"}} className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                    
                )
            }
            
            <i className="top-search-icon fa-solid fa-magnifying-glass"></i>

        </div>
        
    </div>
    )
}

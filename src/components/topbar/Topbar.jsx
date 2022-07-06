import { Link } from "react-router-dom";
import "./Topbar.css";
import { useEffect, useState,useRef } from "react";

export default function Topbar() {
    const user = true;
    const [clicked, setClicked] = useState(false);
    const clickHandled = () => {
        setClicked(clicked => !clicked); 
    }
    const isFirstRender = useRef(true);

    useEffect(() =>{
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        console.log(clicked);
    },[clicked])

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
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">HOME</Link>
                    </li>
                    <li className="top-list-item">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/about">ABOUT</Link>
                    </li>
                    <li className="top-list-item">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/albums">ALBUMS</Link>
                    </li>
                    <li className="top-list-item">
                        <Link style={{ textDecoration: "none", color: "inherit" }} to="/write">WRITE</Link>
                    </li>
                    <li className="top-list-item">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="top-right">
                {
                    user ? (
                        <>
                    
                            <img className="top-image" src="https://pbs.twimg.com/profile_images/1525578089010536451/YoZAcGOi_400x400.jpg" alt="profile-img" />
                            <input className="input" type="text" placeholder="Search"></input>
                            <button className="btn" onClick={clickHandled()}>
                                <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
                            </button>
                        </>
                    ) :
                        (
                            <ul className="top-list">
                                <li className="top-list-item">
                                    <Link style={{ textDecoration: "none", color: "inherit", marginRight: "15px" }} className="link" to="/login">LOGIN</Link>
                                </li>
                                <li className="top-list-item">
                                    <Link style={{ textDecoration: "none", color: "inherit" }} className="link" to="/register">REGISTER</Link>
                                </li>
                            </ul>

                        )
                }




            </div>

        </div>
    )
}

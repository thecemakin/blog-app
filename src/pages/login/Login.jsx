import "./Login.css"
import {
    Link
    } from "react-router-dom";

export default function Login() {
    return (
    <div className="login">
        <span className="login-title">Login</span>
        <form className="login-form" action="">
            <label htmlFor="">E-mail</label>
            <input className="login-input" type="text" placeholder="Enter your email..." />
            <label htmlFor="">Password</label>
            <input className="login-input" type="password" placeholder="Enter your password..." />
            <button className="login-button">Login</button>
        </form>
        <button className="register-button">
            <Link style={{textDecoration:"none",color:"inherit"}} to="/register">REGISTER</Link>
        </button>
    </div>
    )
}

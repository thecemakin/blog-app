import "./Setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
    return (
    <div className="setting">
        <div className="setting-wrapper">
            <div className="setting-title">
                <span className="setting-update-title">Update Account</span>
                <span className="setting-delete-title">Delete Title</span>
            </div>
            <form className="setting-form" action="">
                <label>Profile Pic</label>
                <img src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg" alt="pic" className="setting-pp-pic" />
                <label htmlFor="file-input">
                <i className="setting-pp-icon fa-solid fa-circle-user">
                </i>
                </label>
                <input id="file-input" type="file" style={{display:"none"}}/>
            
                <label>Username</label>
                <input type="text" placeholder="username" />
                <label>E-mail</label>
                <input type="email" placeholder="mail" />
                <label>Password</label>
                <input type="password" placeholder="pa****" />
                <button className="setting-submit">Update</button>
            </form>
            
            
            
        </div>
        
        <Sidebar/>  
    </div>
    )
}

import "./Sidebar.css"

export default function Sidebar() {
    return (
    <div className="sidebar">
    <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg" alt="pic" />

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti quae rem ad tempore nostrum sint repellendus, repudiandae praesentium aspernatur?</p>
    </div>
    <div className="sidebar-item">
    <span className="sidebar-item">CATEGORIES</span>
        <ul className="sidebar-list">
            <li className="sidebar-list-item">Life</li>
            <li className="sidebar-list-item">Music</li>
            <li className="sidebar-list-item">Cinema</li>
            <li className="sidebar-list-item">Style</li>
            <li className="sidebar-list-item">Sport</li>
            <li className="sidebar-list-item">Tech</li>
        </ul>
    </div>
    <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-instagram-square"></i></a>
            <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-facebook"></i></a>
            <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-twitter"></i></a>
            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="top-icon fa-brands fa-linkedin"></i></a>
        </div>
    </div>
    </div>
    )
}

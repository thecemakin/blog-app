import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      <img className="write-img" src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg" alt="pic" />
        <form action="" className="write-form">
          <div className="write-form-group">
            <label htmlFor="file-input">
            <i class="write-icon fa-solid fa-plus"></i>
            </label>
            <input id="file-input" type="file" style={{display:"none"}}/>
            <input className="write-input" type="text" placeholder="Title" autoFocus={true} />
          </div>
          <div className="write-form-group">
            <textarea className="write-input write-text" placeholder="Write me!" type="text" ></textarea>
          </div>
          <button className="write-submit">Publish</button>

        </form>
    </div>
  )
}

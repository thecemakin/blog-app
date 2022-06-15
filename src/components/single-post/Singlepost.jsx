import "./Singlepost.css";

export default function Singlepost() {
  return (
    <div className="single-post">
        <div className="single-post-wrapper">
            <img className="single-post-img" src="https://p4.wallpaperbetter.com/wallpaper/689/20/945/web-development-minimalism-wallpaper-preview.jpg" alt="img" />
        </div>
        <h1 className="single-post-title">Lorem ipsum dolor sit amet.
        <div className="single-post-edit">
            <i class="single-post-icon fa-solid fa-pencil"></i>
            <i class="single-post-icon fa-solid fa-trash-can"></i>
        </div>
        </h1>
        <div className="single-post-info">
        <span className="single-post-author">
            Author: <b>thecemakin</b>
        </span>
        <span className="single-post-date">2 day ago.</span>
        </div>
        <p className="single-post-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur libero voluptatum atque error similique soluta repellat natus, qui non, accusamus eligendi placeat unde excepturi itaque assumenda dolore nemo. Distinctio dolorum inventore reprehenderit, eveniet tempore deleniti exercitationem commodi magnam vel saepe quos voluptates quae explicabo nostrum minus libero hic laboriosam neque quo! Explicabo deserunt commodi aut mollitia natus eum inventore illum praesentium aliquid? A provident corporis exercitationem molestiae animi, in nesciunt ad voluptatibus laborum excepturi eaque quia totam aliquid atque voluptatem! Officiis ipsum debitis voluptates voluptatum, fugiat modi optio tenetur commodi necessitatibus praesentium esse aperiam voluptatibus assumenda pariatur, reprehenderit quia consectetur.</p>
    </div>
  )
}

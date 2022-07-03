import "./Album.css";
import { AlbumTitle } from "./AlbumTitle";

export default function Album({ item }) {
    return (
        <div className="single-album-item">

            <img src={item.url} alt="" />
            <AlbumTitle className="title" title={item.title} />

        </div>
    )
}

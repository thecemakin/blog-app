import { useState, useEffect } from "react";
import Album from "../../components/album/Album";
import "./Albums.css";

export default function Albums() {
    const [albums, setAlbum] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=25")
            .then((res) => res.json())
            .then((data) => {
                setAlbum(data);
                // console.log(data)
            }
            );
    }, []);

    return (
        <>
            <div className="album-item-wrapper">
                {
                    albums.length > 0 && albums.map((singleAlbumData, index) => {
                        return <Album key={index} item={singleAlbumData} />
                    })
                }
            </div>
        </>
    )
}
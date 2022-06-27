import { useState,useEffect } from "react";

export default function Albums() {
    const [albums,setAlbum] = useState([10]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res) => res.json())
        .then((data) => {
            setAlbum(data);
        });
    },[setAlbum]);

    return (
        <>
        
    <div className='albums'>{albums.id}
        <div className="thumbnail">{albums.title}</div>
        <div className="title">title</div>
    </div>
    </>
    )
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router";


const Albums=()=>{
    const[albums,setAlbums]=useState([]);
    const handleFetchAlbums=async()=>{
        try{
         const response=await fetch("https://jsonplaceholder.typicode.com/albums")
        const albumsData =await response.json();
        // console.log("Album Data",albumsData);
        setAlbums(albumsData);
        }catch(error){
            console.error("Error fetching albums",error);
        }
    };

    useEffect(()=>{
        handleFetchAlbums();
    },[]);


    return(
        <div>
            <center>
            <h1>Image Gallery</h1>
            </center>
           {albums.map((album)=>{
                return(
                    <Link to={`photos/${album.id}`} key={album.id}>
                        <p>Album Id: {album.id}</p>
                        <p> Album title: {album.title}</p>
                        
                    </Link>
                )
           })}
        </div>
    )
};
export default Albums;
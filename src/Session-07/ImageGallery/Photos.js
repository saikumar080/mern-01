import React, { useEffect,useState } from "react";
import { useParams } from "react-router";

const Photos=()=>{
    const [photos,setPhotos]=useState([]);
    const{id}=useParams();
    console.log("Album Id",id);
    const handleFetchPhotos=async()=>{
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/photos")
            const photosData=await response.json();
            // console.log("Photos Data",photosData);
            const filterData=photosData.filter((photo)=>{
                
                 return photo.albumId === Number(id)});
            // console.log("Filtered Data",filterData);
            // setPhotos(photosData);
            setPhotos(filterData);
            // console.log("Filtered Data",filterData);
        }catch(e){
            console.error("Error fetching photos",e);
        }
    }
    useEffect(()=>{
        handleFetchPhotos();
    },[])
    return(
        <div>
            <center>
                <h1>Photos </h1>
            </center>
            {photos.map((photo)=>{
                return(
                    
                        <img  key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
                    
                )
            })}
        </div>
    )
};
export default Photos;
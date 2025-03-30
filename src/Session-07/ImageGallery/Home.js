/*This file is created bcz of  Defining the Routers
=> 1st component the react  render */
import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";
import {Routes,Route} from "react-router-dom";

const Home=()=>{
    return(
        <Routes>
            <Route path="/" element={<Albums/>} />
            <Route path="/photos/:id" element={<Photos/>} />
            
        </Routes>
    )
};
export default Home;
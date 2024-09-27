import React,{ useEffect, useState } from "react";
function FCUseEffect(){
    // const name="Harshini"
    const [IncrementCount,setCountIncrement]=useState(0);
    const [DecrementCount,setCountDecrement]=useState(0);
    //----------condtional rendering--------
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    useEffect(()=>{
        console.log(`Hello, I am useEffect`);
        return ()=>{
            console.log('Hello, I am leaving');
        }
    },[IncrementCount])
    
    return(
        <div>
            <h1>Hello UseEffect</h1>
            <h3>{IncrementCount}</h3>
            <button onClick={()=>setCountIncrement((prev)=>prev + 1)}>Increase Count</button>
            <h3>{DecrementCount}</h3>
            <button onClick={()=>setCountDecrement((prev)=>prev-1)}>Decrease Count</button>
           

        </div>
    )
}
export default FCUseEffect;
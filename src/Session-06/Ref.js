import React,{useEffect, useRef, useState} from "react";
const Ref=()=>{
    const[search,setSearch]=useState('');
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
        console.log("Input Ref:",inputRef);
    },[])
    
    return(
        <div>
            <input ref={inputRef}
             value={search} 
             onChange={(e)=>setSearch(e.target.value)} />
        </div>
    )
};
export default Ref;
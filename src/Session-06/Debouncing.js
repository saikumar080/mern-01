import React, { useEffect, useRef, useState } from "react";
/*=========       creating debouncing function     ================
=>it has 2 parameters:- 1. Funnction, 2. delay time.
=>return the function with args where it can setTimeOut for the function and the delay
=> it timerId already contain timer clearTimeOut()
*/
const debounce=(fn,delay)=>{
    let timerId;
    return function(...args){
        if(timerId){
            clearTimeout(timerId)
        }
        timerId=setTimeout(()=>fn(...args),delay)
    };
}
 /*============        Implementing Debouncing in React       =============
 => intial Create a variable debounceSearch which can Call the debounce()
 => inside the debounce we need to pass function and delay:-    
        1.pass the  fn():- which  is handleSearch()-->which we want to delay the function.
        2. delay time is 500ms
 => create  handleSearch() will pass searchText as argument*/

const Debouncing=()=>{
    const[name,setName]=useState('');
    const handleSearch=(searchText)=>{
        console.log("Search Text:::",searchText);
    }
    /*debounceSearch is a function which will call the handleSearch function with delay of 500ms
       ******** =>useRef will store the debounce function and it will not change the value of debounceSearch *******
    current will get the current value of debounceSearch.*/
    const debounceSearch=useRef(debounce(handleSearch,500)).current;


    //without using useRef
    // const debounceSearch=debounce(handleSearch,500);
    //useEffect will call the debounceSearch function with name as argument
    useEffect(()=>{
        if(name){
            debounceSearch(name);
        }
    },[debounceSearch,name])

    return(
        <div>
            <h1>Debouncing</h1>
            <input value={name} 
                onChange={(e)=>{setName(e.target.value)}} 
                type="text" 
                placeholder="Search Here"
            />
        </div>
    )
}
export default Debouncing;
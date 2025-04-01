import React, { Fragment, useState } from "react";


const ListOFCounter=({counter, handleIncrementCounter})=>{
    return(
        <>
        {counter.map((count,index)=>{
            return(
                <Fragment key={index}>
                    <button type="button" onClick={()=>handleIncrementCounter(index)} > Counter {index + 1}</button>
                    <p>{index + 1}- {count}</p>
                </Fragment>
            )
        })}
        </>
    )
}

const Callback=()=>{
    const [counter,setCounter]=useState([0,0,0])

    const handleIncrementCounter=(index)=>{
    setCounter((prevValue)=>{
        const newCounter=[...prevValue];
        newCounter[index]++;
        return newCounter;
    })
    }
    return(
        <>
            <h1>Hello Callback..!!!</h1>
            <ListOFCounter
            counter={counter}
            handleIncrementCounter={handleIncrementCounter} />
        </>
    )
}
 export default Callback;
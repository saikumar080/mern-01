import React, { Fragment } from "react";

const list_items=[
    {name:"Jr.ntr",
        id:1
    },
    {
        name:"jr.robert",
        id:2
    }
]
const Fragments=()=>{
   
    return(
        <>
            <div> Hello Fragments.!!!</div>
            <div>Hello.!!!</div>
            {list_items.map((item)=>{
                return(
                    <Fragment key={item.name}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                    </Fragment>
                )
            })}
        </>
        
    )
}
export default Fragments;
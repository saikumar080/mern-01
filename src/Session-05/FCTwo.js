import React, { useEffect, useState } from "react";

function FCTwo(){
    const [users,setUsers]=useState([]);
    const handleFetchUSers=async ()=>{
        const url=await fetch("https://jsonplaceholder.typicode.com/users");
        const response=await url.json();
        setUsers(response)
    }
    useEffect(()=>{
        handleFetchUSers();

    },[])
    return (
        <div>
            <h1>User List</h1>
            {
                users.map((user)=>{
                    return <p key={user.id}>{user.name}</p>
                })
            }
        </div>
    )
}
export default FCTwo;
import React, { useEffect, useState } from "react";

function FCTwo(){

    const [users,setUsers]= useState([]);
    const handleFetchUsers=async()=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const users=await response.json();
        setUsers(users);
        
    }

    useEffect(()=>{
        handleFetchUsers();

    },[])
    return(
        <div>
            <h1>User List</h1>
            {users.map((user)=>{
                return(
                    <p key={user.id}>{user.name}</p>
                )
            })}
        </div>
    )
}
export default FCTwo;
import React, { useState } from "react";
import "./Book.css";
const Book=()=>{
    const [name,updatedName]=useState("");
    return(
        <div>
            <h1>Book a Session</h1>
            <p>Fill in the form below to book a virtual session with your doctor</p>
            <p>Basic Info</p>
            <form>
                <div>
                <label style={{margin:'10px'}}>First Name</label>
                <input type="text"></input>
                </div>
                <div>
                <label style={{margin:'10px'}}>Last Name</label>
                <input type='text'></input>
                </div>
                <div>
                    <label style={{margin:'10px'}}>Email</label>
                    <input type='email'></input>
                </div>
                <p>Doctor</p>
                <select>
                    <option value='Select your doctor'>
                        select your doctor
                    </option>
                    <option>
                        Dr.John Hopkins
                    </option>
                </select>
                <div style={{margin:'10px'}}>
                <button style={{borderRadius:'0.5rem'}}>Confirm Booking</button>
                </div>
                
            </form>
        </div>
    )
}
export default Book;
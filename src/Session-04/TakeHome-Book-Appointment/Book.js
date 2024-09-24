import React, { useState } from "react";
import "./Book.css";
const Book=()=>{
    //------Selecting Docotor-----------------------
    const [doctorSelected, setDoctorSelected] = useState(false);
    const [loading,setLoading]= useState(false);
    const [appointmentSubmitted,setAppointmentSubmitted]=useState(false);
    const [formData,setFormData]=useState({
        firstName : "",
        lastName : "",
        Email : "",
        Doctor :  "",
        where : "",
        when : ""
    });
    console.log("formData::: ",formData);

   //------->>>>>>>     SetDoctorSelected should appear (when and where )   <<<<<<<<<<<-----------
   const handleDoctorSelect= (event)=>{
    setDoctorSelected(true);
    setFormData({...formData,Doctor: event.target.value})
   };
   const handleFirstName=(event)=>{
    setFormData({...formData,firstName: event.target.value})
   };
   const handleLastName=(event)=>{
    setFormData({...formData,lastName:event.target.value})
   };
   const handleEmail=(event)=>{
    setFormData({...formData,Email:event.target.value})
   };
   const handleWhereChange=(event)=>{
    setFormData({...formData,where:event.target.value})
   };
   const handleWhenChange=(event)=>{
    setFormData({...formData,when:event.target.value})
   }
    const handleSubmit= async (event)=>{
        event.preventDefault();
        setLoading(true);
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name:formData
                })
            });
            const result=await response.json();
            setLoading(false);
            setAppointmentSubmitted(true);
            return result;

        }catch(error){
            console.error("Error submitting appointment:",error.message)
            setLoading(false);
         }

    };
    const handleCancel=()=>{
        setAppointmentSubmitted(false);
        setDoctorSelected(false);
        setFormData({
            firstName:'',
            lastName:'',
            Email:'',
            Doctor:'',
            where:'',
            when:''
        });
    }

    return(
        <div id="header">
           {loading && <h1>Scheduling the appointment...</h1>}
           {!loading && !appointmentSubmitted && (
              <form onSubmit={handleSubmit}>
              <h1>Book a Session</h1>
              <p>Fill in the form below to book a virtual session with your doctor</p>
              <h3>Basic Info</h3>
              
              <div className="form-handle">
              <label style={{margin:'10px'}}>First Name
              <input type="text" name="firstName" value={formData.firstName} onChange={handleFirstName}  />
              </label>
              </div>
             
              
              
              <div className="form-handle">
              <label style={{margin:'10px'}}>Last Name
              <input type='text' name="lastName" value={formData.lastName} onChange={handleLastName} />
              </label>
              </div>
              
              
              <div className="form-handle">
              <label style={{margin:'10px'}}>Email
                  <input type='email' name="email" value={formData.Email} onChange={handleEmail} />
                  </label>
              </div>
             
                 
                  
             <div className="form-handle">
             <h3>Doctor</h3>
              <select value={formData.Doctor} onChange={handleDoctorSelect}>
                  <option value="">
                      select your doctor
                  </option>
                  <option value="Dr.John">
                      Dr.John Hopkins
                  </option>
                  <option value="Dr.Harshini">
                      Dr.Harshini Reddy
                  </option>
                  <option value="Dr.Vinay">
                      Dr.Vinay Kumar
                  </option>
              </select>
             </div>
          {/* ------While selecting the Doctor!!!!-------- */}
                {doctorSelected && !appointmentSubmitted &&(
                  <div className="form-handle">
                      <h3>Where?</h3>
                    <div className="Where">
                      <label>
                          <input
                          type="radio"
                          id="google_meet"
                          name="fav_language"
                          value="google_meet"
                          onChange={handleWhereChange} />
                          Google Meet
                      </label>
                    </div>
                    <div className="form-handle">
                    <label>
                          <input
                          type="radio"
                          id="phone"
                          name="fav_language"
                          value="phone"
                          onChange={handleWhereChange} />
                         Phone
                      </label>
                    </div>
                      
                  </div>
                )}
                {doctorSelected && !appointmentSubmitted &&(
                  <div className="form-handle">
                      <h3>When?</h3>
                      <input type="date"value={formData.when} onChange={handleWhenChange} />
                  </div>
                )}
             <div className="form-handle" >
             <button type="submit" style={{borderRadius:'0.5rem'}} onChange={(e)=>setFormData(e.target.value)}>Confirm Booking</button>
             </div>
          </form>
           )}
           {appointmentSubmitted &&(
            <div>
                <h1>Appointment booked Successfully</h1>
                <button onClickCapture={handleCancel}>Cancel appointment</button>
            </div>
           )}
          
        </div>
    )
}
export default Book;
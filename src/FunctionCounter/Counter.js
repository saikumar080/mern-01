import React, {useState} from 'react';
import './Counter.css';
function Counter(){
    const [counter,updateCounter]=useState(0);
    const handleIncrement=()=>{
        console.log("Increment Function:::");
        updateCounter((prevState)=> {
            if(prevState>=10){
                return 0;
            }else{
                return prevState +1;
            }
        });
    };
    const handleDecrement=()=>{
        console.log("handle Decrement!!!");
        updateCounter((prevState)=>{
            if(prevState === 0){
                return 0;
            }else{
                return  prevState - 1;
            }
           
        });
    };

    return(
        <div>
            <button style={{borderRadius:'4px'}} onClick={handleIncrement}>Increment</button>
            <span style={{margin:'0 10px'}}>{counter}</span>
            <button style={{borderRadius:'4px'}} onClick={handleDecrement}>Decrement</button>
           
        </div>
    )
};
export default Counter;
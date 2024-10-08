import React,{useState} from 'react';
import './CounterFn.css';
import Button from './Button';
import Display from './Display';
function CounterFn(){
    const [counter,setCounter]=useState(0);
    const increment=()=>{setCounter((prev)=>prev + 1)};
    const decrement=()=>{setCounter((prev)=> {
        if(prev === 0){
            return 0;
        }else{
            return prev - 1;
        }
        })};


    return(
        <div>
            <h1>This is activity in Session-04</h1>
            <Button text={"+"} btnClick={increment} />
            <Display text={counter} />
            <Button text={"-"} btnClick={decrement} />
        </div>
    )  
};
export default CounterFn;
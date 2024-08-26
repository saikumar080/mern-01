import React from "react";
import Display from "./Display";
import Button from "./Button";
import Header from "./Header";
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
            name:'',
            email:''
            
        }
    }
    handleIncrement=()=>{
        this.setState((previousState)=>{
            return {count: previousState.count + 1}
        })
    }
    handleDecrement=()=>{
        this.setState((previousState)=>{
            if(previousState.count===0){
                return {count:0}
            }
            return { count: previousState.count - 1}
        })
    }
    handleUpdateName=(e)=>{
        console.log("name:",e.target.value,e);
        this.setState({name:e.target.value})
    }
    handleUpdateEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    render(){
        return (
            <div>
                  <Header />
                  <Button btnClick={this.handleIncrement} btnText="+" />
                  <Display displayValue={this.state.count} />
                  <Button btnClick={this.handleDecrement} btnText="-" />
                  <div>
                  <label for="name">First name:</label>
                  <input value={this.state.name} onChange={(e)=>this.handleUpdateName(e)}
                   />
                  </div>
                  <div>
                  <label for="Email">Email: </label>
                  <input value={this.state.email} onChange={(e)=>this.handleUpdateEmail(e)}
                   />
                  </div>
                  
            </div>
          


        )
    }
}
export default Counter;
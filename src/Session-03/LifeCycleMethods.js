import React from 'react';

class LifeCycleMethods extends React.Component{
    constructor(){
        super();
        this.state={
            count:0.
        }
    }
    componentDidMount(){
        console.log("Hey,I am component did mount:: ",this.state.count);
    };
    componentDidUpdate(){
        console.log("Component Did Update:: " ,this.state.count)
    };
    componentWillUnmount(){
        console.log("Component will unmount:: ",this.state.count);
    }
    render(){
        return(
            <div>
                <p>Hello World</p>
                <button 
                    onClick={()=>this.setState((prev)=>({count: prev.count + 1}))}>
                    Increment
                </button>
                </div>
        ) 
    }
    
}
export default LifeCycleMethods;
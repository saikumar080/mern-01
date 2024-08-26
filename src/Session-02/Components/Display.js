import React from "react";
class Display extends React.Component{
    render(){
        // console.log(this.props.displayValue)
        return (
            <div>
                <h2>{this.props.displayValue}</h2>
            </div>
        )
    }
}
export default  Display;
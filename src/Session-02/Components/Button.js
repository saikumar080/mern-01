import React from "react";
class Button extends React.Component{
    render(){
        // console.log(this.props.btnText)
        return(
            <div>
                
                  <button onClick={this.props.btnClick}>{this.props.btnText}</button>
                  
            </div>
          
        )
    }
}
export default Button;
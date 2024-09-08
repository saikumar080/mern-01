import React from 'react';
function Button({text,btnClick}){
    return(
        <div>
            <button onClick={btnClick} >{text}</button>
        </div>
    )
};
export default Button;
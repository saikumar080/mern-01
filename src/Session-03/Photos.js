import React from 'react';
class Photos extends React.Component{
    constructor(){
        super();
        this.state={
            photos:[],
        }
    }
    handleFetchData=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/photos");
        const data= await response.json();
        console.log("Photos data:: ",data);
      return this.setState({photos:data});
    }
    componentDidMount(){
        this.handleFetchData();
    };
    handleButton=()=>{
        {this.state.photos.map((photos)=>{
            return(
               <div>
                 <h4>Photo Title:<p>{photos.title}</p> </h4>
                 
                 <img src={photos.url}></img>
               </div>
            )
        })}
    }

    render(){
        return(
            <div>
                <h1>Photos:</h1> {''}
                <button onClick={this.handleButton}>Photos Button</button>
               </div>
        )
    }
}
export default Photos
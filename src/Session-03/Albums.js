import React from 'react';
class Albums extends React.Component{
    constructor(){
        super();
        this.state={
            album: [],
        }
    }
    handleFetchData=async()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/albums");
        const data=await response.json();
        console.log("data:: ",data);
       return  this.setState({album: data });
    };
    componentDidMount(){
       this.handleFetchData(); 
    }
    render(){
        return(
            <div>Albums{''}
                 {this.state.album.map((album)=>{
                return(
                   <div>
                     <h2>{album.id}</h2>
                     <p>{album.title}</p>
                   </div>
                )
            })}</div>
        )
    }
}
export default Albums;
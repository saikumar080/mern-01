import React from 'react';
import './App.css';

import LifeCycleMethods from './Session-03/LifeCycleMethods';
import ImageGallery from './Session-03/ImageGallery';
import FCOne from './Session-03/FCOne';
import Counter from './FunctionCounter/Counter';
import CounterFn from './Session-04/Activity-01/CounterFn';
import Book from './Session-04/TakeHome-Book-Appointment/Book';
import FCUseEffect from './Session-05/FCUseEffect';
import FCTwo from './Session-05/FCTwo';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      showComponent:true,
    }
  }
  render(){
    return(
      <div>
        {/* <button 
        onClick={()=>this.setState((prev)=>
          ({showComponent:!prev.showComponent}),console.log("Component Did Update from Show/Hide Component:: ",this.state.showComponent))}>Show/Hide Component
          </button> */}
          {/* Here if this.state.component is true then only it will excute LifeCycleMethod component*/}
      {/* {this.state.showComponent &&
        <LifeCycleMethods />} */}
       
        {/* <ImageGallery /> */}
       {/* <FCOne /> */}
        {/* <CounterFn /> */}
        {/* <Counter /> */}
        {/* <Book /> */}
        
        {/* <button 
        onClick={()=>this.setState((prev)=>
          ({showComponent:!prev.showComponent,}))}>Show/Hide Component
          </button>
        {this.state.showComponent && < FCUseEffect />} */}

        <FCTwo />

      </div>
        
      
    )
  }
}
export default App;

import React, { Fragment } from 'react';
import './App.css';

import LifeCycleMethods from './Session-03/LifeCycleMethods';
import ImageGallery from './Session-03/ImageGallery';
import FCOne from './Session-03/FCOne';
import Counter from './FunctionCounter/Counter';
import CounterFn from './Session-04/Activity-01/CounterFn';
import Book from './Session-04/TakeHome-Book-Appointment/Book';
import FCUseEffect from './Session-05/FCUseEffect';
import FCTwo from './Session-05/FCTwo';
import Ref from './Session-06/Ref';
import Debouncing from './Session-06/Debouncing';
import Home from './Session-07/ImageGallery/Home';
import Fragments from './Session-08/Fragment';
import Callback from './Session-08/Callback';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      showComponent:true,
    }
  }
  render(){
    return(
      <>

        {/* -------------------THis is session-02 File for Counter Display
        =>THis component is used to display the counter value and increment and decrement the counter value
        -=> THis code is from Class Based- Component----------------
        ----------------- */}
        {/* <Counter /> */}
          {/* ================ This file is from session-03 ImageGallery which can render both file(<Albums/> , <Photos/>) */}
                    {/* {<ImageGallery /> } */}



        {/* -------------------THis is session-03 File for LifeCycleMethods
        =>THis component is used to display the counter value and increment and decrement the counter value
        -=> THis code is from Class Based- Component----------------
        ----------------- */}
        {/* <LifeCycleMethods /> */}


          {/* -----------------This  */}
          {/* <button 
        onClick={()=>this.setState((prev)=>
          ({showComponent:!prev.showComponent}),console.log("Component Did Update from Show/Hide Component:: ",this.state.showComponent))}>{this.showComponent ? "showComponent" : "hideComponent"}
          </button> */}


          {/* Here if this.state.component is true then only it will excute LifeCycleMethod component*/}
                  {/* {this.state.showComponent &&
                  <LifeCycleMethods />} */}


                
       
        
       {/* <FCOne /> */}
        {/* <CounterFn /> */}
        {/* <Counter /> */}
        {/* <Book /> */}
        
        {/* <button 
        onClick={()=>this.setState((prev)=>
          ({showComponent:!prev.showComponent,}))}>Show/Hide Component
          </button>
        {this.state.showComponent ? < FCUseEffect />: null}

        <FCTwo /> */}


        {/* <FCTwo /> */}


        {/* ===================         Session-06        =================== */}
        {/* <Ref /> */}

        {/* <Debouncing /> */}

        {/* ============   Session-07               ============== */}
        {/* <Home /> */}

        {/* ============ Session-08    =========== */}
        {/* <Fragments /> */}

        <Callback />

      </>
        
      
    )
  }
}
export default App;

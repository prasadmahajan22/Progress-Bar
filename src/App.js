import React, { useEffect, useState } from "react";
import Progressbar from "./component/Progressbar";
export default function App() {
  const[progress,setProgress]= useState(0);

  useEffect(()=>{
   setInterval( ()=>{ 
    setProgress( (val)=>val+1);
   },100);
  },[]);
   return (
    <React.Fragment>
    <div className="App">  
    <div className="container">
    <h1 className="mt-3 mb-3">Progress Bar</h1>
      <div className="row justify-content-md-center">
        <div className="col-md-6">
           <Progressbar value={ progress} />
        </div>
      </div>
      </div>    
     
    </div>
    </React.Fragment>
  );
}


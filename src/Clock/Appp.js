import React,{useState} from 'react';
import './clstyles.css'

const Appp=()=>{

   let time =new Date().toLocaleTimeString();
     
   const [ctime,setCtime]= useState(time);

const UpdateTime=()=>{
    time =new Date().toLocaleTimeString();
     setCtime(time);
     
};
  setInterval(UpdateTime,1000);
  // componentDidUpdate() {
  //   if (UpdateTime == 60) 
  //   {
  //       alert("break")

  //   };
  //  }

    return(
        <>
        <div className="tym">
        <h1>Current Time</h1>
       <p>{ctime}</p>
        {/* <button onClick={UpdateTime}>get time</button> */}
        </div>
        </>
    )
}
export default Appp;
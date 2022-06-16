import React from "react";
import { useState } from "react";
const App = () => {
    const purple= "#8e44ad";
    const[bg, setbg]=useState(purple);
    const [name,setName]=useState("click me");


    const bgChange=()=>{
      let newBg = "#34495e";
      setbg(newBg);
      setName("ouch!!")
    
  };
  const bgBack=()=>{
    setbg(purple);
    setName("Ayyyo")

  };
  return(
    <>
    <div style={{backgroundColor: bg}}>  
      <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
    </div>
    </>
  );
}
export default App;
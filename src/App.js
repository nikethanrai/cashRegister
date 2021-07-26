import React, { useState } from "react";
import './App.css';

function App() {
  const [billAmt,setbillAmt]= useState('')

  function inputHandler(input){
    setbillAmt(input)
    
  }
  return (
    <div className="App">
      <h1>Monay Monay!!</h1>
      <p>Enter the bill amount and the cash given by the customer and know the minimum number of notes to return</p>
    <div className='label'> Bill Amount:
    <input onInput={()=>inputHandler()} type='number' id='billAmt'/>
    <button id='next'>Next</button>
    <h3>{billAmt}</h3>

    </div>
    </div>
  );
}

export default App;

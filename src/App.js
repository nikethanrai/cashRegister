import React, { useState } from "react";
import './App.css';
import Cash from './components/cash'
import Table from "./components/table";

function App() {
  const [billAmt, setbillAmt] = useState('')
  const [cash,setCash]=useState('')

  function billInputHandler(input) {
    setbillAmt(input.target.value)


  }
  return (
    <div className="App">
      <h1>Monay Monay!!</h1>
      <p>Enter the bill amount and the cash given by the customer to know the minimum number of notes to return</p>
      <div className='label'> Bill Amount:
        <input onInput={billInputHandler} type='number' id='billAmt' />
        {/* <button id='next'>Next</button> */}
    
      </div>
      <Cash setCash={setCash}/>
      <Table/>
      
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import Cash from './components/cash'
import Table from "./components/table";

function App() {
  const [billAmt, setbillAmt] = useState('')
  const [cash, setCash] = useState('')
  const [text, setText] = useState('')
  const [compare, setCompare] = useState('')

  function billInputHandler(input) {
    setbillAmt(input.target.value)
  }
  
  function validateAmt() {
    if (billAmt > 0) {
      setText('')

    } else {
      setText('the bill amount should be greater than 0')
    }
    if (billAmt < cash) {
      setCompare('')
      console.log('all good')
    } else {
      setCompare('Cash lesser than bill')
    }
  }

  return (
    <div className="App">
      <h1>Monay Monay!!</h1>
      <p>Enter the bill amount and the cash given by the customer to know the minimum number of notes to return</p>
      <div className='label'> Bill Amount:
        <input onInput={billInputHandler} type='number' id='billAmt' />
        {/* <button id='next'>Next</button> */}
        <p id='error-msg'>{text}</p>

      </div>
      <Cash setCash={setCash} cash={cash} billAmt={billAmt} />
      <p id='error-msg'>{compare}</p>
      <button onClick={() => { validateAmt()}} id='submit'>Submit</button>

      <Table />

    </div>
  );
}

export default App;

import React, { useState } from "react";
import './App.css';
import Cash from './components/cash'
import Table from "./components/table";

function App() {
  const [billAmt, setbillAmt] = useState('')
  const [cash, setCash] = useState('')
  const [text, setText] = useState('')
  const [compare, setCompare] = useState('')
  const [num,setNum]=([])

  function billInputHandler(input) {
    setbillAmt(input.target.value)
  }
  
  function validateAmt() {
    console.log(num)
    if (billAmt > 0) {
      setText('')

    } else {
      setText('Tf are you putting amount lesser than 0')
    }
    if (Number(billAmt) < Number(cash)) {
      setCompare('')
      
    } else {
      setCompare('Do you wanna wash plates?')
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

      <Table num={num} setNum={setNum}/>

    </div>
  );
}

export default App;

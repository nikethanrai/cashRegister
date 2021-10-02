import React, { useState } from "react";
import './App.css';
import Cash from './components/cash'



function App() {
  const [billAmt, setbillAmt] = useState('')
  const [cash, setCash] = useState('')
  const [text, setText] = useState('')
  const [compare, setCompare] = useState('')
  const [num,setNum]=useState([])
  const [diff,setDiff]=useState('')

  let v = []
 

  const notesAvbl = [2000, 500, 100, 20, 10, 5, 1]


  function billInputHandler(input) {
    setbillAmt(input.target.value)
  }


  let returnedCash = cash - billAmt
  notesAvbl.map(n => (
    v.push(Math.floor(returnedCash / n)),
    returnedCash %= n

  ))
  

  function r(){
    if (Number(cash)>=Number(billAmt) && billAmt>=0 ){
      setNum(v)
      console.log(num)
    }else{
      setNum([])
    }
    
  }
  function differ(){
    if (Number(cash)>=Number(billAmt) && billAmt>=0){
      setDiff(cash-billAmt)
    }else{
      setDiff('')
    }
   
  }
 






  function validateAmt() {



    if (billAmt > 0) {
      setText('')

    } else {
      setText('Amount lesser than 0')
    }

    if (Number(billAmt) < Number(cash)) {
      setCompare('')

    } else {
      setCompare('Do you wanna wash plates? Cash is lesser than Bill !!!')
    }
  }



  return (
    <div className="App">
      <h1>Monay Monay!!</h1>
      <p>Enter the bill amount and the cash given by the customer to know the minimum number of notes to return</p>
      <div className='label'> Bill Amount:
        <input onInput={billInputHandler} type='number' id='billAmt' />

        <p id='error-msg'>{text}</p>

      </div>
      <Cash setCash={setCash} cash={cash} billAmt={billAmt} />
      <p id='error-msg'>{compare}</p>
      <button onClick={() => { validateAmt();r();differ() }} id='submit'>Submit</button>

      <table className='change-table'>
        <caption>Return Change:&ensp; {diff} </caption>
        <tr>
          <th>No. of Notes</th>
          {num.map(item => <td>{item}</td>)}


        </tr>
        <tr>
          <th> Notes </th>
          {notesAvbl.map(item => <td>{item}</td>)}


        </tr>

      </table>

    </div>
  );
}

export default App;

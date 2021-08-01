import React from 'react'

const Cash =({setCash})=>{

function cashInputHandler(input){
    setCash(input.target.value)
    

}

    return(
        <div className='cashGiven'> Cash Given:
        <input onInput={cashInputHandler} type='number' id='cashAmt' />
        <button onClick={console.log('clicked')} id='submit'>Submit</button>
        </div>
    )


}
export default Cash
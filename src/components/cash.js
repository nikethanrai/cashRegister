import React from 'react'

const Cash =({setCash,cash,billAmt})=>{

function cashInputHandler(input){
    setCash(input.target.value)
}



    return(
        <div className='cashGiven'> Cash Given:
        <input onInput={cashInputHandler} type='number' id='cashAmt' />
        </div>
    )


}
export default Cash
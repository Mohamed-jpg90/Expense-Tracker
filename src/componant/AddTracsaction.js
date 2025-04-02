import React from 'react'
import { useState ,useContext ,useRef } from 'react'
import { GlobalContext } from '../context/GlobalState'
function AddTracsaction() {
    const[x,setX] =useState('')
    const[amount,setAmount] =useState(0)

    const {addTransaction} =useContext(GlobalContext)
  const inputref = useRef();
  const inputref1 = useRef();

    const Onsubmit=e =>{

        e.preventDefault()

const amount = inputref.current.value;
const value = inputref1.current.value;

if (amount === '' || amount === 0 || value=== '') {
    alert('Please enter a valid text and amount');
    return;
}
else{
    const newTransaction = {
        id:Math.floor(Math.random()*100000),
        text: x,
        amount: +amount 
    
    }
    addTransaction(newTransaction)
    inputref.current.value=''
    inputref1.current.value=''
  
}

    }


    return (
        <>

            <h3>Add new transaction</h3>
            <form onSubmit={Onsubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"  ref={inputref1} onChange={(e)=>setX(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" ref={inputref}  onChange={(e)=>setAmount(e.target.value)}   placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTracsaction
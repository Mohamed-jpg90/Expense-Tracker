import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext); // Fix: Use 'transactions'
  const amount = transactions.map(e => e.amount)

  const Income = amount.filter(e => e > 0).reduce((acc, add) => (acc += add), 0).toFixed(2)
  const Expense = (amount.filter(e => e < 0).reduce((acc, add) => (acc += add), 0) * -1).toFixed(2)
  return (

    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Expense}</p>
      </div>
    </div>


  )
}

export default IncomeExpenses
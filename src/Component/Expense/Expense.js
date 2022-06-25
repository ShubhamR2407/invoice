import React from 'react'
import './Expense.css'
import Part from './ExpenseFiles/Part'
import Amount from './ExpenseFiles/Amount'

function Expense() {
  return (
    <div className='expense'>
      <Part />
      <Amount />
    </div>
  )
}

export default Expense
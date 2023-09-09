import React from 'react'
import { useBudgetContext } from '../context/Context'
import Expense from './Expense'
import { ExpenseListProps, } from '../interface/Interfaces'

export default function Expenses() {
    const {expenseList}=useBudgetContext()

  return (
    <div className='expenses'>
      <div className="header">Expenses</div>
      {expenseList.map((expense:ExpenseListProps)=>{
        const {id}=expense
        return  <Expense key={id} {...expense} />
      })}
    </div>
  )
}

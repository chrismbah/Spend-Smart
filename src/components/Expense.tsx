import React from 'react'
import { ExpenseListProps } from '../interface/Interfaces'

export default function Expense({name,amount}:ExpenseListProps) {
  return (
    <div className='expense'>Expense of {name} and price of {amount}</div>
  )
}

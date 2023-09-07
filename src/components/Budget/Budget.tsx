import React,{useEffect} from 'react'
import { useBudgetContext } from '../../context/Context'


export default function Budget() {

    const budgetName=localStorage.getItem("budget-name")
    const budgetAmount=localStorage.getItem("budget-amount")

  return (
    <div>
      {budgetName}
      {budgetAmount}
    </div>
  )
}

// import React,{useEffect} from 'react'
// import { useBudgetContext } from '../../context/Context'
import "./Budget.css"
import Trash from "../../icons/Trash"
import Add from "../../icons/Add"

export default function Budget() {

    const budgetName=localStorage.getItem("budget-name")
    const budgetAmount=localStorage.getItem("budget-amount")

  return (
    <div className="budget">
      <div className="overview-title">
       <span>{budgetName}</span> Overview
      </div>
      <div className="overview">
        <div className="overview-info">
          <div className="name">
            {budgetName}
          </div>
          <div className="amount">
            ${Number(budgetAmount).toLocaleString()}
          </div>
        </div>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
        <div className="clear-btn">
          <button className="btn clear">Clear <Trash /></button>
        </div>
      </div>
      <div className="overview new-expense">
        <div className="title">
          Add New <span>{budgetName}</span> Expense
        </div>
        <form action="">
          <div className="info">
            <div className="name">
              <label>Expense Name:</label>
              <input type="text" />
            </div>
            <div className="amount">
              <label >Expense Amount:</label>
              <input type="number" />
            </div>
          </div>
          <div className="add">
            <button className="add-btn">Add <Add /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

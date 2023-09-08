// import React,{useEffect} from 'react'
// import { useBudgetContext } from '../../context/Context'
import "./Budget.css"
import Trash from "../../icons/Trash"


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
          <button className="clear">Clear <Trash /></button>
        </div>
      </div>
    </div>
  )
}

import {useRef,KeyboardEvent} from 'react'
import { useBudgetContext } from '../../context/Context'
import "./Budget.css"
import Trash from "../../icons/Trash"
import Add from "../../icons/Add"
import Expenses from '../Expenses'

export default function Budget() {

    const budgetName=localStorage.getItem("budget-name")
    const budgetAmount=localStorage.getItem("budget-amount")
    const {handleExpenseChange,handleExpenseSubmit,name,amount,expenseList}=useBudgetContext()

    const amountInputRef=useRef(null)

  
    function handleInputEnter(e: KeyboardEvent<HTMLInputElement> 
      ,ref: React.RefObject<HTMLInputElement | null>){ 
      if(e.key==="Enter"){
        e.preventDefault();
       if(ref.current){
        ref.current.focus()
      //*Changes to the next input box on clicking "enter"
       }   
      }
    }


  return (
    <div className="budget">
      <div className="overview-title">
       <span>{budgetName}</span> Overview
      </div>
      <div className="overview overview-box">
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
        <form action="" onSubmit={handleExpenseSubmit}>
          <div className="info">
            <div className="name">
              <label>Expense Name:</label>
              <input type="text" 
                id="name"
                required 
                placeholder="e.g. Cereals"
                value={name} 
                onKeyPress={(e)=>{handleInputEnter(e,amountInputRef)}}
                onChange={handleExpenseChange}/>
            </div>
            <div className="amount">
              <label >Expense Amount:</label>
              <input type="number"
                id="number"
                required
                placeholder="e.g. $50"
                value={amount}
                ref={amountInputRef}
                onChange={handleExpenseChange} />
            </div>
          </div>
          <div className="add">
            <button className="add-btn">Add <Add /></button>
          </div>
        </form>
      </div>
      {expenseList.length >0 && <Expenses/>}
    </div>
  )
}

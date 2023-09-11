import { useBudgetContext } from '../../context/Context'
import Expense from './Expense'
import { ExpenseListProps, } from '../../interface/Interfaces'
import "./Expenses.css"

export default function Expenses() {
    const {expenseList}=useBudgetContext()

  return (
    <div className='expenses'>
      <div className="header">Your Expenses</div>
        <div className="all">
          <div className="categories">
            <div className="category expense">Expense</div>
            <div className="category amount">Amount</div>
            <div className="category icons"></div>
          </div>
          <div className="category-info">
          {expenseList.map((expense:ExpenseListProps)=>{
             const {id}=expense
             return  <Expense key={id} {...expense} />
          })}
          </div>
   
        </div>
    </div>
  )

}

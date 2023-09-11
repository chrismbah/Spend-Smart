import { ExpenseListProps } from '../../interface/Interfaces'
import Edit from '../../icons/Edit'
import Trash from '../../icons/Trash'
import "./Expense.css"
import { useBudgetContext } from '../../context/Context'

export default function Expense({name,amount,id}:ExpenseListProps) {

  const {handleDelete,handleEdit}=useBudgetContext()

  return (
    <div className='expense'>
      <div className="info expense-name">
       <p> {name}</p>
      </div>
      <div className="info expense-amount">
       <p>${amount}</p> 
      </div>
      <div className="info expense-icons">
        <div className="edit">
          <button onClick={()=>handleEdit(id)}>
            <Edit />       
          </button>
        </div>
        <div className="delete">
          <button onClick={()=>handleDelete(id)}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  )
}

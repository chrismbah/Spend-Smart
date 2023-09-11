import {useState,createContext,useContext, ChangeEvent,FormEvent,KeyboardEvent} from 'react'
import { BudgetProviderProps,FormDataProps,ExpenseListProps } from '../interface/Interfaces'
import { v4 as uuid } from "uuid";

export const BudgetContextApp=createContext<any>(null); //*Creating the context provider

export function useBudgetContext(){   //*Function for getting data from context provider
  return useContext(BudgetContextApp)
}

export default function BudgetProvider({children}:BudgetProviderProps) {
  
  const [userName,setUsername]=useState<string>("")
  const [firstname,setFirstname]=useState<string>("")
  const [formData,setFormData]=useState<FormDataProps>({
    name:"",
    amount:0
  })
  const [name,setName]=useState<string>("")
  const [amount,setAmount]=useState<number|string>("")
  const [expenseList,setExpenseList]=useState<ExpenseListProps[]>([])
  const [edit,setEdit]=useState<boolean>(false)
  const [editId,setEditId]=useState<number|string>(0)

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

  function handleExpenseChange(e:ChangeEvent<HTMLInputElement>){
    const {value,id}=e.target
    if(id==="name"){
      setName(value)
    }
    else{
      setAmount(value)
    }
  }
  function handleExpenseSubmit(e:FormEvent):void{
    e.preventDefault();
    if(edit){
     let updatedExpenseList:ExpenseListProps[]= expenseList.map((expense)=>{
        return expense.id === editId ? {...expense,name:name,amount:amount} : expense
      })
      setExpenseList(updatedExpenseList)
      setEdit(false)
      setName("")
      setAmount("")
    }
   else{ 
    const newExpense={
      name:name,
      amount:amount,
      id:uuid(),
    }
    setExpenseList([...expenseList,newExpense])
    setName("")
    setAmount("")
   }
  }

  function handleClear(){
    setExpenseList([])
  }

  function handleDelete(id:string){
    const newExpenseList=expenseList.filter((expense)=>{
      return expense.id!==id
    })
    setExpenseList(newExpenseList)
  }

  function handleEdit(id:string){
    const editingExpense:ExpenseListProps|undefined= expenseList.find((expense)=>{
      return expense.id===id
    })
    if(editingExpense){
      const {name,amount}=editingExpense
      setName(name)
      setAmount(amount)
      setEdit(true)
      setEditId(id)
    }
  }

  const contextValue:any={
    userName,
    setUsername,
    firstname,
    setFirstname,
    formData,
    setFormData,
    name,setName,amount,setAmount,expenseList,setExpenseList,handleExpenseChange,handleExpenseSubmit,
    handleClear,
    handleDelete,
    handleEdit,
    handleInputEnter
  }

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

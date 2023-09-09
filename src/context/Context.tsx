import {useState,createContext,useContext, ChangeEvent,FormEvent} from 'react'
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

  function handleExpenseChange(e:ChangeEvent<HTMLInputElement>){
    const {value,id}=e.target
    if(id==="name"){
      setName(value)
    }
    else{
      setAmount(value)
    }
    console.log(name+amount)
  }
  function handleExpenseSubmit(e:FormEvent):void{
    e.preventDefault();
    const newExpense={
      name:name,
      amount:amount,
      id:uuid(),
    }
    setExpenseList([...expenseList,newExpense])
    setName("")
    setAmount("")
    console.log("Submitted")
    console.log(expenseList)
  }
 
  const contextValue:any={
    userName,
    setUsername,
    firstname,
    setFirstname,
    formData,
    setFormData,
    name,setName,amount,setAmount,expenseList,setExpenseList,handleExpenseChange,handleExpenseSubmit
  }

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

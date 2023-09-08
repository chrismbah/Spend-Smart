import {useState,createContext,useContext, ChangeEvent,FormEvent} from 'react'
import { BudgetProviderProps,FormDataProps,ExpenseListProps } from '../interface/Interfaces'

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
  const [expenseList,setExpenseList]=useState<ExpenseListProps[]|null>([])

  function handleExpenseChange(e:ChangeEvent<HTMLInputElement>){
    const {value,id}=e.target
    if(id==="name"){
      setName(value)
    }
    else{
      setAmount(Number(value))
    }
    console.log(name+amount)
  }
  function handleExpenseSubmit(e:FormEvent):void{
    e.preventDefault();
    setName("")
    setAmount("")
    console.log("Submitted")
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

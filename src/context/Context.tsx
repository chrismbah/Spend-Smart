import {useState,createContext,useContext} from 'react'
import { BudgetProviderProps } from '../interface/Interfaces'

export const BudgetContextApp=createContext<any>(null); //*Creating the context provider

export function useGlobalContext(){   //*Function for getting data from context provider
  return useContext(BudgetContextApp)
}

export default function BudgetProvider({children}:BudgetProviderProps) {
  
  const [userName,setUsername]=useState<string>("")
  const [firstname,setFirstname]=useState<string>("")
  const [budgetName,setBudgetName]=useState<string>("")
  const [budgetAmount,setBudgetAmount]=useState<number>(0)
 
  const contextValue:any={
    userName,
    setUsername,
    firstname,
    setFirstname,
    budgetAmount,
    setBudgetAmount,
    budgetName,
    setBudgetName
  }

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

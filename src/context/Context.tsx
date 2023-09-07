import {useState,createContext,useContext} from 'react'
import { BudgetProviderProps,FormDataProps } from '../interface/Interfaces'

export const BudgetContextApp=createContext<any>(null); //*Creating the context provider

export function useBudgetContext(){   //*Function for getting data from context provider
  return useContext(BudgetContextApp)
}

export default function BudgetProvider({children}:BudgetProviderProps) {
  
  const [userName,setUsername]=useState<string>("")
  const [firstname,setFirstname]=useState<string>("")
  const [formData,setFormData]=useState<FormDataProps>({
    name:"",
    amount:""
  })
 
  const contextValue:any={
    userName,
    setUsername,
    firstname,
    setFirstname,
    formData,
    setFormData
  }

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

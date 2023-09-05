import {useState,createContext,useContext} from 'react'
import { BudgetProviderProps } from '../interface/Interfaces'

export const BudgetContextApp=createContext<any>(null); //*Creating the context provider

export function useGlobalContext(){   //*Function for getting data from context provider
  return useContext(BudgetContextApp)
}

export default function BudgetProvider({children}:BudgetProviderProps) {
  
  const [userName,setUsername]=useState<string>("")
  const [firstname,setFirstname]=useState<string>("")

  const contextValue:any={userName,setUsername,firstname,setFirstname}

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

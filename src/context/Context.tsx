import {useState,createContext,useContext, useEffect} from 'react'
import { BudgetProviderProps } from '../interface/Interfaces'

export const BudgetContextApp=createContext<any>(null); //*Creating the context provider

export function useGlobalContext(){   //*Function for getting data from context provider
  return useContext(BudgetContextApp)
}

export default function BudgetProvider({children}:BudgetProviderProps) {
  
  const [userName,setUsername]=useState<string>("")
  const [firstname,setFirstname]=useState<string>("")

  function updateUser(fullName:string):void{
    setUsername(fullName)
    const fullNameParts=fullName.split(" ")
    setFirstname(fullNameParts[0])
    localStorage.setItem("firstname",fullNameParts[0])
  }
 
  const contextValue:any={userName,setUsername,firstname,setFirstname,updateUser}

  return (
    <BudgetContextApp.Provider value={contextValue} >
      {children}
    </BudgetContextApp.Provider >
  )
}

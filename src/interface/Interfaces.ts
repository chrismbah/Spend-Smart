import {ReactNode} from "react"

export interface BudgetProviderProps{
    children:ReactNode;
}
export interface FormDataProps{
    name:"";
    amount:number;
    // amount:number|string
}
export interface ExpenseListProps{
    id:number
    name:""
    amount:number
    
}
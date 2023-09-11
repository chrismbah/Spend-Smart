import {ReactNode} from "react"

export interface BudgetProviderProps{
    children:ReactNode;
}
export interface FormDataProps{
    name:"";
    amount:number|string;
}
export interface ExpenseListProps{
    id:string
    name:string
    amount:number|string
}

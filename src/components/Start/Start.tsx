import {ChangeEvent, useEffect,FormEvent} from "react"
import { useGlobalContext } from "../../context/Context"
import "./Start.css"
export default function Start() { 
  
  const {setFirstname,firstname,formData,setFormData}=useGlobalContext();

    useEffect(()=>{
      const storedName=localStorage.getItem("firstname") //*Gets first name stored in local storage
      setFirstname(storedName) //*Sets first name as the name stored in local storage
    },[])

    // function handleBudgetName(e:ChangeEvent<HTMLInputElement>):void{
    //   setBudgetName(e.target.value)
    //   console.log(budgetName)
    // }
    // function handleBudgetAmount(e:ChangeEvent<HTMLInputElement>):void{
    //   setBudgetAmount(e.target.value)
    //   console.log(budgetAmount)
    // }
    function handleChange(e:ChangeEvent<HTMLInputElement>){
      const {name,value}=e.target
      setFormData({...formData,[name]:value})
     
    }

    function handleSubmit(e:FormEvent){
      e.preventDefault()
      console.log("hello")
    }
   
  return (
    <div className="start">
      <div className="start-header">
       <div className="start-title">
         <h2>Hello, <span>{firstname}</span></h2>
        </div>
        <div className="start-p">
         <p>Create a budget to get started</p>
        </div>
      </div>
      <div className="start-box">
        <h3>Create Budget</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="budget-name">
            <label htmlFor="budgetName">Budget Name</label>
            <input type="text"
            id="name" 
            name="name"
            placeholder="e.g. Groceries" 
            required
            title="Please fill out this field"
            onChange={handleChange}
            /> 
           
          </div>
          <div className="amount">
            <label htmlFor="amount">Amount</label>
            <input type="number"
            id="amount" 
            name="amount"
            placeholder="e.g. $500"
            required
            title="Please fill out this field"
            onChange={handleChange}
             />
          </div>
        
        </form>
      </div>
    </div>
  )
}

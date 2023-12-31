import { ChangeEvent, useEffect,FormEvent,useRef,KeyboardEvent } from "react"
import { useBudgetContext } from "../../context/Context"
import "./Start.css"
import { useNavigate } from "react-router-dom";
import Create from "../../icons/Create";

export default function Start() { 
  
  const { setFirstname,firstname,formData,setFormData}=useBudgetContext(); //*Getting info from context api
  const amountInputRef=useRef(null)
  const navigate =useNavigate()

    useEffect(()=>{
      const storedName=localStorage.getItem("firstname") //*Gets first name stored in local storage
      setFirstname(storedName) //*Sets first name as the name stored in local storage
    },[])

    function handleInputEnter(e: KeyboardEvent<HTMLInputElement>  //*Takes in keyboard event and ref
      ,ref: React.RefObject<HTMLInputElement | null>){ 

      if(e.key==="Enter"){   
        e.preventDefault();
       if(ref.current){
        ref.current.focus()
        //*If enter key is clicked it changes to the next input box
       }   
      }
    }

    function handleChange(e:ChangeEvent<HTMLInputElement>):void{
      const {name,value}=e.target //*Gets name and value from input element
        if(name==="name"){
          localStorage.setItem("budget-name",value) //*If input name is "name" store value as "budget-name"
          setFormData({...formData,[name]:value})
          return 
        }
        localStorage.setItem("budget-amount",value) //*Else store the value as "budget-amount"
        setFormData({...formData,[name]:value})
    }

    function getStoredValue(name:string){
      
        const storedValue=localStorage.getItem(name)
        if(storedValue){
          return storedValue
        }
        return ""
    }

    function handleSubmit(e:FormEvent){
        e.preventDefault()
        navigate("/budget") //*Navigates to budget component
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
        <h3>Your Budget</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="budget-name">
            <label htmlFor="budgetName">Budget Name</label>
            <input type="text"
              id="name" 
              name="name"
              placeholder="e.g. Groceries" 
              required
              title="Budget Name"
              value={getStoredValue("budget-name")}
              onChange={handleChange}
              onKeyPress={(e)=>handleInputEnter(e,amountInputRef)}
            /> 
          </div>
          <div className="budget-amount">
            <label htmlFor="amount">Amount</label>
            <input type="number"
              id="amount" 
              name="amount"
              placeholder="e.g. $500"
              required
              min="1"
              title="Budget Amount"
              value={getStoredValue("budget-amount")}
              onChange={handleChange}
              ref={amountInputRef}
             />
          </div>
          <button className="create-btn"> Create <Create /></button>
        </form>
      </div>
    </div>   
  )
}

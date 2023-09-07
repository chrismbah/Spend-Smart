import {ChangeEvent, useEffect,FormEvent,useRef,KeyboardEvent} from "react"
import { useGlobalContext } from "../../context/Context"
import "./Start.css"
import { useNavigate } from "react-router-dom";

export default function Start() { 
  
  const {setFirstname,firstname,formData,setFormData}=useGlobalContext();
  const amountInputRef=useRef(null)
  const navigate =useNavigate()

    useEffect(()=>{
      const storedName=localStorage.getItem("firstname") //*Gets first name stored in local storage
      setFirstname(storedName) //*Sets first name as the name stored in local storage
    },[])

    function handleInputEnter(e: KeyboardEvent<HTMLInputElement>
      ,ref: React.RefObject<HTMLInputElement | null>){

      if(e.key==="Enter"){
        e.preventDefault();
       if(ref.current){
        ref.current.focus()
       }
      }
    }

    function handleChange(e:ChangeEvent<HTMLInputElement>):void{
      const {name,value}=e.target
      setFormData({...formData,[name]:value})
        if(name==="name"){
          localStorage.setItem("budget-name",value)
          return 
        }
        localStorage.setItem("budget-amount",value)
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
      navigate("/budget")
      
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
              // value={formData.name}
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
              title="Budget Amount"
              value={getStoredValue("budget-amount")}
              // value={formData.amount}
              onChange={handleChange}
              ref={amountInputRef}
             />
          </div>
          <button className="create-btn"> Create <i className='bx bxs-plus-circle'></i></button>
        </form>
      </div>
    </div>
  )
}

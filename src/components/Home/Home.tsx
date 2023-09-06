import {useState,useEffect,useRef,FormEvent,ChangeEvent} from "react"
import header from "../../assets/header.png"
import "./Home.css"
import { useGlobalContext } from "../../context/Context"
import {useNavigate} from "react-router-dom"

export default function Home() {

  const navigate=useNavigate()
  const inputRef=useRef<HTMLInputElement>(null)
  const {setUsername,userName}=useGlobalContext()
  const [errorMsg,setErrorMsg]=useState("")

  function handleSubmit(e:FormEvent){
    e.preventDefault()
    if(!userName){
      setErrorMsg("*Please fill out your name*")
      return 
    }
    navigate("/start")
  }
  function handleChange(e:ChangeEvent<HTMLInputElement>){

    const fullName=e.target.value //*Gets full name from user input
    const nameParts=fullName.split(" ") //*Splits full name to collect first name
    localStorage.setItem("firstname",nameParts[0]) //*Stores firstname in local storage
    setUsername(fullName) //*Sets username as initial full name
    setErrorMsg("") 
  }
  
  useEffect(() => {
     if(inputRef.current){
      inputRef.current.focus()  //*Focuses on input box when page initially renders
     }
  }, []);
  return (
    <div className="home">
      <div className="header-title">
        <div className="header-1">
          <h1 className="wisely">Budget Wisely,</h1> 
          <h1 className="thrive">Thrive Financially</h1>
        </div>
          <p>Budgeting is the compass that guides us toward financial freedom. 
           <br /> Begin your journey today
          </p>
        <form action="" onSubmit={handleSubmit}  >
          <div className="box">
            <input type="text" placeholder="Enter name here..." 
            value={userName} 
            className="name-box"
            ref={inputRef}
             onChange={handleChange}/>
             <div className="error">
              <p>{errorMsg}</p>
             </div>
          </div>
          <div className="start">
            <button className="start-btn">Start Now <i className="fa-solid fa-piggy-bank"></i></button>
          </div> 
         
        </form>
      </div> 
      <div className="header-img">
        <img src={header} alt="header-image" />
      </div>

    </div>
  )
}

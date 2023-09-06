import {useEffect} from "react"
import { useGlobalContext } from "../../context/Context"
import "./Start.css"
export default function Start() {
  const {setFirstname,firstname}=useGlobalContext();

    useEffect(()=>{
      const storedName=localStorage.getItem("firstname") //*Gets first name stored in local storage
      setFirstname(storedName) //*Sets first name as name stored in local storage
    },[])
   
  return (
    <div className="start">
      <div className="start-title">
        <h2>Hello, <span>{firstname}</span></h2>
      </div>
    </div>
  )
}

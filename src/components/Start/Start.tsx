import {useEffect} from "react"
import { useGlobalContext } from "../../context/Context"
export default function Start() {
  const {setFirstname,firstname}=useGlobalContext();

    useEffect(()=>{
      const storedName=localStorage.getItem("firstname")
      setFirstname(storedName)
    },[])
   
  return (
    <div className="start">
      <div className="start-title">
        <h2>Hello, {firstname}</h2>
      </div>
    </div>
  )
}

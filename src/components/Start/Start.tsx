import {useEffect} from "react"
import { useGlobalContext } from "../../context/Context"
export default function Start() {
  const {userName,setFirstname,firstname,updateUser}=useGlobalContext();

  useEffect(()=>{
    const storedName=localStorage.getItem("firstname")

    if(storedName){
      setFirstname(storedName)
      return
    }
    const fullNameParts=userName.split(" ")
    const newName=fullNameParts[0]
    setFirstname(newName)
    localStorage.setItem("firstname",newName)

  },[])


  return (
    <div className="start">
      <div className="start-title">
        <h2>Hello, {firstname}</h2>
      </div>
    </div>
  )
}

import { useGlobalContext } from "../../context/Context"
export default function Start() {

  const {userName,setFirstname,firstname}=useGlobalContext()
  let newName=userName.split(" ")
  setFirstname(newName)

  return (
    <div className="start">
      <div className="start-title">
        <h2>Hello, {firstname}</h2>
      </div>
    </div>
  )
}

import logo from "../../assets/logo.svg"
import "./Nav.css"
import Moon from "../../icons/Moon"
import Sun from "../../icons/Sun"
import { useBudgetContext } from "../../context/Context"

export default function Navbar() {

  const {lightMode,setLightMode}=useBudgetContext()

  return (
    <div className='nav'>
        <div className="logo">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="name">
            <h2>SpendSmart</h2>
          </div>
        </div>
        <div className="theme" onClick={()=>setLightMode(!lightMode)}>
            {lightMode?<Moon />:<Sun/>}
        </div>
    </div>
  )
}

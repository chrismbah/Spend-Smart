import logo from "../../assets/logo.svg"
import "./Nav.css"
import {Link} from "react-router-dom"

export default function Navbar() {
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
        <div className="link">
          <Link to={"https://github.com/chrismbah/Spend-Smart"}>
            <i className='bx bx-moon'></i>
          </Link>
        </div>
    </div>
  )
}

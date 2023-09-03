import header from "../../assets/header.png"
import "./Home.css"
export default function Home() {

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
        <form action=""  >
          <div className="box">
            <input type="text" placeholder="Enter name here..." className="name-box" />
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

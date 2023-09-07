import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Start from './components/Start/Start'
import Budget from './components/Budget/Budget'

function App() {

  return (
    <div className='App'>
       <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/start' element={<Start/>} />
          <Route path='/budget' element={<Budget/>} />
        </Routes>
      </Router>
    </div>
     
   
  )
}

export default App

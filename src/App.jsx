import './App.css'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import Dashboard from './Pages/Dashboard'
import Taskboard from './Pages/Taskboard'
// import Navbar from './Components/Navbar'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'

function App() {
 return (
    <div>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home /> } />
        <Route path='/signin' element = { <SignIn/> } />
        <Route path='/signup' element = { <SignUp/> } />
        <Route path='/dashboard' element = { <Dashboard/> } />
        <Route path='/taskboard/:id' element = { <Taskboard/> } /> 
        {/* <Route path='/notifications/:id' element = { <Notification/> } />  */}



      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App

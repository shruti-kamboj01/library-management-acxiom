import { Route, Router, Routes } from 'react-router-dom'
import  Login from './pages/Login'
import './App.css'
import User from './pages/User'
import Admin from './pages/Admin'

function App() {
 

  return (
    <>
    <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/user' element={<User/>}/>
          <Route path='/admin' element={<Admin/>} />
    </Routes>
     
    </>
  )
}

export default App

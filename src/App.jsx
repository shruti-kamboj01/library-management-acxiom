import { Route, Router, Routes } from 'react-router-dom'
import  Login from './pages/Login'
import './App.css'
import User from './pages/User'
import Admin from './pages/Admin'
import Logout from './pages/Logout'
import Maintenance from './pages/Maintenance'
import Reports from './pages/Reports'
import Transactions from './pages/Transactions'

function App() {
 

  return (
    <>
    <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/user' element={<User/>}/>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/maintenance' element={<Maintenance/>}/>
          <Route path='/reports' element={<Reports/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
    </Routes>
     
    </>
  )
}

export default App

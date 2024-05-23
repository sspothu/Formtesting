import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import RegForm from './components/RegForm'
import { useState } from 'react'
import UsersTable from './components/UsersTable'
import Home from './Pages/Home'

function App() {
  const [info,setInfo] = useState()
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<UsersTable usersdata={info}/>} path='/Userstable'/>
      <Route element={<RegForm setdata={setInfo} />} path='/RegForm' />
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App

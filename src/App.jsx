import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Example from './pages/HomePage'
import Ap from './pages/AnimText'
import Main from './pages/Main'
import {Routes, Route } from 'react-router-dom';
import { MyContextProvider } from './context/GlobalContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <MyContextProvider>
      
    <Routes>
      
      <Route path='/' element={<Main/>}/>
      <Route path='/:nav' element={<Main/>}/>
      <Route path='/:nav/:store/:collection/' element={<Main/>}/>
      <Route path='/:nav/:productid' element={<Main/>}/>
      
      
    </Routes>
    </MyContextProvider>
      
    
  )
}

export default App

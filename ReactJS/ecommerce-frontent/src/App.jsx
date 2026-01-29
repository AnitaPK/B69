import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
              <Route path='/' element={<LoginPage />}></Route>
              <Route path='/register' element={<Register />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    // <Register />
    //   <LoginPage />
  )
}

export default App

import { useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import ProductInfo from './components/ProductInfo'
import { cartReducer, initialCartState } from './cartReducer/cartReducer'
import CartPage from './pages/CartPage'
import Navbar from './components/Navbar'

function App() {
const [user,setUser] = useState()  

  return (
    
    <BrowserRouter>
    <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<LoginPage setUser={setUser}/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<Dashboard user={user} />} ></Route>
        <Route path='/dashboard/:ID' element={<ProductInfo />}></Route>
        <Route path='/cart' element={<CartPage  />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


// <BrowserRouter >
// <Routes>
// <Route path='/' element={<Dashboard />} ></Route>
// <Route path='/:ID' element={<ProductInfo />}></Route>
// </Routes>
// </BrowserRouter>


    // <Register />
    //   <LoginPage />
  )
}

export default App

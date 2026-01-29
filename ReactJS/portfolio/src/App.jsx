import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
import AboutsUs from './pages/AboutsUs'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/about-us' element={<AboutsUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

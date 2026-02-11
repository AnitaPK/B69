import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Greetings from './components/Greetings'
import Collections from './components/Collections'
import CounterReducer from './components/CounterReducer'
import CoinCollector from './components/CoinCollector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CoinCollector />
    <CounterReducer />


<div style={{height:"50px"}}></div>
    <hr />

      <Greetings user11=" Kiran" age={20} />
      <Greetings user11="Ramesh" age={21} />

      Hello World
      <HeroSection />
<hr />
<Collections />
    </>
  )
}

export default App

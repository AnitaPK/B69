import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Greetings from './components/Greetings'
import Collections from './components/Collections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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

import React, { useEffect, useState } from 'react'
import './GototTOp.css'

const GototTOp = ({gotToTopRef}) => {

const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 130);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  function handleTop(){
gotToTopRef.current.scrollIntoView({ behavior: "smooth" })
  }

  if (!show) return null; // hide button

  return (
    <button className='gotoTop' 
    onClick={()=>handleTop()}
    >⬆ TOP</button>
  )
}

export default GototTOp
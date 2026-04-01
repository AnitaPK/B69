import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TotalPopulation = () => {
    const [totalpop, setTotalPop] = useState()

    async function getTotalPop(){
        const res = await axios.get('http://localhost:7000/totalPopulation')
        if(res){
            setTotalPop(res.data.TotalPopulation)
        }
    }

    useEffect(()=>{
        getTotalPop()
    },[])
  return (
    <div>TotalPopulation {totalpop}</div>
  )
}

export default TotalPopulation
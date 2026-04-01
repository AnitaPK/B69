import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const TotalCountry = () => {
    const [totalCountryCounts, settotalCountryCounts] = useState()

    async function fetchData(){
        const res = await axios.get('http://localhost:7000/TotalCountryCount')
        if(res.data.success){
            settotalCountryCounts(res.data.totalCountryCounts)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(totalCountryCounts)
  return (
    <div>TotalCountry : {totalCountryCounts?.countCountry}</div>
  )
}

export default TotalCountry
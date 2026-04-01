import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TopTenCountry = () => {
    const [top10CountryPop, setTop10CountryPop] = useState([])

    async function fetchData(){
        const res = await axios.get('http://localhost:7000/topTenPopCountry')
        if(res.data.success){
setTop10CountryPop(res.data.topTenCountry)
        }
    }

    useEffect(()=>{
fetchData()
    },[])

  return (
    <>
    <div>TopTenCountry</div>
    <table className='table '>
    {top10CountryPop.map((c, i)=>(
        <tr key={i}>
            <td>{c.name}</td>
            <td>{c.population}</td>
        </tr>
    ))}
    </table>
    </>
  )
}

export default TopTenCountry
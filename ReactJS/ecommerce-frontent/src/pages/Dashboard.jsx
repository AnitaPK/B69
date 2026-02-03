import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Dashboard = () => {
    const [products, setProducts] = useState([])
    const [searchKey,setSearchKey] = useState("")
    const [filterProducts,setFilterProducts] = useState([])

    // fetchData from api 
    async function fetchData() {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setProducts(res.data.products)
        setFilterProducts(res.data.products)
    }

    // one time fetchData on component mount 
    useEffect(() => {
        fetchData()
    }, [])

// search products 
// const handleSearchKey =(e)=>{
//     e.preventDefault()
//     const value1 = (e.target.value)
//     console.log(value1)
//     setSearchKey(value1)
// console.log(searchKey,"searchKey")
//     const filterProd = products.filter((p)=>{
//         console.log(p.id, searchKey)
//         return p.title.toLowerCase().includes(searchKey.toLowerCase())
// })
//     setFilterProducts(filterProd)
// }


useEffect(()=>{
            const filterProd = products.filter((p)=>{
        console.log(p.id, searchKey)
        return p.title.toLowerCase().includes(searchKey.toLowerCase())
})
    setFilterProducts(filterProd)
},[searchKey])

    return (
        <>
            <nav>
                <div className='ms-5'>
                    <input 
                    type="search" 
                    // onChange={handleSearchKey}
                    onChange={(e)=>setSearchKey(e.target.value)}
                    placeholder='search'
                    // value={searchKey}

                    />
                    <span className='badge rounded-pill text-bg-primary'>{filterProducts.length}</span>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    {filterProducts.map((prod, index) => (
                        <Card prod={prod} key={prod.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { FaFilter } from "react-icons/fa";

const Dashboard = ({user}) => {
    const [products, setProducts] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [brands, setBrands] = useState([])
    const [brandInput, setBrandInput] = useState()
    const [loggeddUser, setLoggedUser] = useState()

    // fetchData from api 
    async function fetchData() {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setProducts(res.data.products)
        setFilterProducts(res.data.products)
    }

    // one time fetchData on component mount 
    useEffect(() => {
        setLoggedUser(user)
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


    useEffect(() => {
        const filterProd = products.filter((p) => {
            console.log(p.id, searchKey)
            return p.title.toLowerCase().includes(searchKey.toLowerCase())
        })
        setFilterProducts(filterProd)

    }, [searchKey])

    function handleFilter() {
        console.log("234567890")
        const filterByPrice = products.filter((p) => {
            return p.price >= minPrice && p.price <= maxPrice
        })
        setFilterProducts(filterByPrice)
    }



    function getBrandNames() {
        const b = products.map((p) => p.brand)
        const uniqueBrands = [...new Set(b)];
        setBrands(uniqueBrands);
    }

    useEffect(() => {
        getBrandNames()
    }, [products])

    console.log(brands)
function handleFilterByBrand(){
    const filterByBrand = products.filter((p)=>{
        return p.barnd == brandInput
    })
    setFilterProducts(filterByBrand)
}

    return (
        <>
            <nav>
                <div className='ms-5 d-flex justify-content-between'>
                    <div>
                    <input
                        type="search"
                        // onChange={handleSearchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        placeholder='search'
                    // value={searchKey}
                    />
                    <span className='badge rounded-pill text-bg-primary'>{filterProducts.length}</span>
                </div>
                <div>
                    <h3>{loggeddUser && (<span>{loggeddUser.name}</span>) }</h3>
                </div>
                </div>

            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 bg-secondary">
                        Min price:
                        <input type="range" min={0} max={500}
                            onChange={(e) => setMinPrice(e.target.value)} />
                        Max price:
                        <input type='range' min={0} max={500}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <button onClick={() => handleFilter()}
                            className='btn btn-primary'
                        ><FaFilter />Filter</button>
                        <hr />
                        <select class="form-select"
                        onChange={(e)=>setBrandInput(e.target.value)}
                        >
                            <option selected>Select Brand</option>
                            {brands?.map((bName)=>(
                            <option value={bName}>{bName}</option>
                            ))}
                        </select>
                        <button onClick={()=>handleFilterByBrand()}>Filter By Brand</button>
                    </div>
                    <div className="col-md-10">
                        <div className="container">
                            <div className="row">
                                {filterProducts.map((prod, index) => (
                                    <Card prod={prod} key={prod.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [products, setProducts] = useState([])

    async function fetchData() {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setProducts(res.data.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>Product List</h1>
            <div className="container">
                <div className="row">
                    {products.map((prod, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={prod.id}>
                            <div class="card" style={{width: "18rem;"}}>
                                <img src={prod.thumbnail} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{prod.title}</h5>
                                        <p class="card-text text-truncate">{prod.description}</p>
                                        <a href="#" class="btn btn-primary">Get More Info</a>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dashboard
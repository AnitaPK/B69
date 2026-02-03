import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const [product,setProduct] = useState({})

    const {ID} = useParams()

    console.log(ID)

    async function fetchDataObject(){
        const res = await axios.get('https://dummyjson.com/products')
        const tempProducts = res.data.products
        const idProd = tempProducts.filter(p=> p.id == ID) 
        setProduct(idProd[0])
    }
useEffect(()=>{
    fetchDataObject()
},[])

    console.log(product)
  return (
    <>
    <div>ProductInfo</div>
    <h3>{product?.title}</h3>
    <p>{product.description}</p>
    </>
  )
}

export default ProductInfo
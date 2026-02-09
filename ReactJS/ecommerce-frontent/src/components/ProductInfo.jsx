import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductInfo = () => {
  const [product, setProduct] = useState(null)
  const { ID } = useParams()
  const [isLoading,setIsLoading] = useState(true)

  async function fetchDataObject() {
    const res = await axios.get('https://dummyjson.com/products')
    const tempProducts = res.data.products
    const idProd = tempProducts.find(p => p.id == ID)
    setProduct(idProd)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchDataObject()
  }, [])

  // if (!product) {
  //   return <div className="text-center mt-5">Loading...</div>
  // }

  if(isLoading){
    return <div className='spinner-border text-primary' role='status'>
      <span className='visually hiddden'>Loading...</span>
    </div>
  }

console.log(product.images)
  return (
    <div className="container my-5">
      <div className="container">
        <Link to='/' >Back</Link>
      </div>
      <div className="row g-4">
        
        {/* Images Section */}
        <div className="col-md-5">
          <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={img}
                    className="d-block w-100 rounded"
                    alt={product.title}
                    style={{ height: '350px', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>

            {product.images.length > 1 && (
              <>
                <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="col-md-7">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.brand} • {product.category}</p>

          <span className={
            `badge ${product.stock > 0 ? 'bg-success' : 'bg-danger'}`
            }>
            {product.availabilityStatus}
          </span>

          <p className="mt-3">{product.description}</p>

          <h4 className="text-primary">
            ${product.price}
            <small className="text-success ms-2">
              ({product.discountPercentage}% OFF)
            </small>
          </h4>

          <p>
            ⭐ <strong>{product.rating}</strong> / 5
          </p>

          <p>
            <strong>Stock:</strong> {product.stock} units
          </p>

          <p>
            <strong>Warranty:</strong> {product.warrantyInformation}
          </p>

          <p>
            <strong>Return Policy:</strong> {product.returnPolicy}
          </p>

          <p>
            <strong>Shipping:</strong> {product.shippingInformation}
          </p>

          {/* Tags */}
          <div className="mb-3">
            {product.tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {tag}
              </span>
            ))}
          </div>

          <button className="btn btn-dark btn-lg me-3">
            Add to Cart
          </button>
          <button className="btn btn-outline-primary btn-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo

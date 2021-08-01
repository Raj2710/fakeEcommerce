import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
export default function ProductComponents() {
    const products = useSelector((state)=>state.allProducts.products);
    return <>
        <div className="ProductContainer">
        {
        products.map((product,id)=>{
        return <Link to={`/product/${id}`} key={id}>
                    <div  className="product-card">
                        <div className="image-container">
                            <img className="image" src={product.image} alt=""></img>
                        </div>
                        <div className="content">
                            <div className="header">{product.title}</div>
                            <div className="price">$ {product.price}</div>
                            <div className="meta">{product.category}</div>
                        </div>
                    </div>
                </Link>
        }
        
        )}
        </div>
    </>
}

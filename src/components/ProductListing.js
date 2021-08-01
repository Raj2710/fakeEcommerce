import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponents from './ProductComponents';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';
import '../App.css'
export default function ProductListing(){

    const products = useSelector((state)=>state);   
    const dispatch = useDispatch();
    const fetchProducts=async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>console.log(err))

        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    },[])
    console.log("Products ",products);
    return <>
        <div className="ui grid container">
            <br></br>
            <ProductComponents />
        </div>
    </>
}
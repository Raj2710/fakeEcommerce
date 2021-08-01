import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useDispatch,useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productAction';

export default function ProductDetails() {
    const product = useSelector((state)=>state.product);
    let {productId}=useParams();
    const dispatch = useDispatch();

    const fetchProduct = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${parseInt(productId)+1}`)
                                    .catch(error=>console.log(error))
        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId) 
            fetchProduct();
        return ()=>{
            dispatch(removeSelectedProduct());
        }
    },[productId,dispatch])
    return Object.keys(product).length===0? <div style={{marginTop:"50px",marginLeft:"50px"}}>...Loading</div>:<>
    <div style={{marginTop:"50px",marginLeft:"50px", fontSize:"xx-large"}}>{product.title}</div>
    <div style={{marginTop:"20px",marginLeft:"50px"}}>
        <img src={product.image} alt="" >
    </img></div>
</>
}

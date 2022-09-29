import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import'./Home.css'
const Home = () => {
    const[products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='home-container'>
            <div className='ml-16'>
                <h3 className='text-xl font-medium'>Select today’s exercise</h3>
                <div className='product-container'>
                    {
                        products.map(product=><Product product={product} key={product.id}></Product>)
                    }
                </div>
            </div>
            <div>
                <h1>Cart</h1> 
                </div>
        </div>
    );
};

export default Home;
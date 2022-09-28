import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import'./Home.css'
const Home = () => {
    const[products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div className='home-container'>
            <div>
                <h3>Select today’s exercise</h3>
                <div className='product-container'>

                </div>
            </div>
            <div><h1>Cart</h1></div>
        </div>
    );
};

export default Home;
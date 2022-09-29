import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Exercice from '../Exercice/Exercice';
import Product from '../Product/Product';
import Qus from '../Qus/Qus';
import'./Home.css'
const Home = () => {
    const[products, setProducts]=useState([]);
    const[addToCart,setAddToCart]=useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    
    const handleClickBtn=(product)=>{
        const newArray=[...addToCart,product];
       setAddToCart(newArray);

    };


    const[data,setData]=useState("");
    useEffect(()=>{},[data])
    const setDataLocalStorage=brake=>{
        setData(brake);
        localStorage.setItem("value", brake);
    }
    const local=localStorage.getItem("value");

    return (
        <div className='home-container '>
           
            <div className='ml-16  '>
                <h3 className='text-xl font-medium'>Select today’s exercise</h3>
                <div className='product-container grid grid-cols-1  gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        products.map(product=><Product product={product} key={product.id}
                            handleClickBtn={handleClickBtn}
                        ></Product>)
                    }
                </div>
            </div>
          
            <div className=''>
                <Exercice addToCart={addToCart} setDataLocalStorage={setDataLocalStorage} local={local} ></Exercice>
             </div>
             <Qus></Qus>
        </div>
    );
};

export default Home;
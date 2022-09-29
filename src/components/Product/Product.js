import React, { useState } from 'react';
import'./Product.css'
const Product = (props) => {
    // console.log(props)
    // const[totaTime,setTotalTime]=useState(0);
    const {product,handleClickBtn}=props;
    // console.log(product);
    const{img,body,title,age,time}=props.product;
    return (
        <div className='product p-5'>
           <img src={img} alt="" /> 
           <div className='info'>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p>{body}</p>
            <p>For Age : {age}</p>
            <p className='font-medium'>Time required : {time}m</p>
            <button onClick={()=>handleClickBtn(product)}  className='mt-3'>Add to list</button>
           </div>
        </div>
    );
};

export default Product;
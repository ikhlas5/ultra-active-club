import React from 'react';
import'./Product.css'
const Product = (props) => {
    console.log(props);
    const{img,body,title,age,time}=props.product;
    return (
        <div className='product'>
           <img src={img} alt="" /> 
           <div className='info'>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>For Age : {age}</p>
            <p>Time required : {time}</p>
            <button>Add to list</button>
           </div>
        </div>
    );
};

export default Product;
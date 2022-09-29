import React from 'react';
import'./Header.css'
import img from './1048219_OL3O6X0.jpg'
const Header = () => {
    
    return (
        <div className='header flex items-center'>
            <div>
                <img className='w-20' src={img}alt="" />
            </div>
            <div className='ml-5'>

            <h1 className='text-3xl font-bold'>Our <span className='header-color'>Gym Center</span></h1>
            </div>
        </div>
    );
};

export default Header;
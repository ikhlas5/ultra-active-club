import React from 'react';
import'./Header.css'
const Header = () => {
    
    return (
        <div className='header'>
            <div>
                <img src="1048219_OL3O6X0.jpg"alt="" />
            </div>
            <div>

            <h1 className='text-3xl font-bold'>Our <span className='header-color'>Gym Center</span></h1>
            </div>
        </div>
    );
};

export default Header;
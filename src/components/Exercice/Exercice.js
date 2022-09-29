import React from 'react';
import'./Exercice.css'
import img from'./1607273343467-01-01.jpeg'
const Exercice = () => {
    return (
        <div className='ml-4 bg-gray-300 p-3'>
            <div className='details-img flex'>
                <img className='rounded-full w-12' src={img} alt="" />
                <div className='ml-2 text-xl font-medium'>
                    <h1>Mohammad Ikhlas</h1>
                    <p>Barishal</p>
                </div>
            </div>
            <div className='flex'>
                <div className='m-2'>
                <h3><span className='font-semibold'>75</span>kg</h3>
                <p> <small>Weight</small> </p>
                </div>
                <div className='m-2'>
                <h3> <span className='font-semibold'>5.6</span></h3>
                <p><small>Height</small></p>
                </div>
                <div className='m-2'>
                <h3><span className='font-semibold'>20</span>year</h3>
                <p><small>Age</small></p>
                </div>
            </div>
        </div>
    );
};

export default Exercice;
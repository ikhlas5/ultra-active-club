import React, { useState } from 'react';
import'./Exercice.css'
import img from'./1607273343467-01-01.jpeg'
import Swal from 'sweetalert2'

const Exercice = (props) => {
    // console.log(props)

    const[addTime,setAddTime]=useState(0);

    const{addToCart}=props;

    let totalTime=0;
    for(const product of addToCart){
        totalTime=totalTime+product.time;
    }
    const handle=(props)=>{
        setAddTime(props);
    };
    const btnSucces=()=>{
        Swal.fire(
            'Good job!',
            'You are success!',
            'success'
          )
    }
    return (
        <div className='ml-4 bg-gray-300 p-3 parent-div'>
            <div className='details-img flex'>
                <img className='rounded-full w-12' src={img} alt="" />
                <div className='ml-2 text-xl font-medium'>
                    <h1>Mohammad Ikhlas</h1>
                    <p>Barishal</p>
                </div>
            </div>
            <div className='flex bg-gray-200 rounded p-2 mt-3 mb-2'>
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
            <div >
                <h1 className='text-xl font-semibold'>Add A Break</h1>
            </div>
            <div className='bg-gray-200 rounded p-2 font-medium mt-3 '>
                <button onClick={()=>handle('10m')}  className='mr-2 p-1 bg-white border rounded-full'>10m</button>
                <button onClick={()=>handle('20m')} className='mr-2 p-1  bg-white border rounded-full'>20m</button>
                <button onClick={()=>handle('30m')} className='mr-2 p-1 bg-white border rounded-full'>30m</button>
                <button onClick={()=>handle('40m')} className=' p-1 bg-white border rounded-full'>40m</button>
               
            </div>
            <div className='m-3 text-xl font-medium'> 
                <h1>Exercise Details</h1>
                </div>
            <div className='bg-gray-200 rounded p-2 font-medium mb-4'>
                <h3>Exercise time:{totalTime}</h3>
                </div>
            <div className='bg-gray-200 rounded p-2 font-medium'>
                <h3>Break time:{addTime}</h3>
                </div>
                <div className='bg-sky-600 text-xl font-medium text-white text-center mt-10 px-2 py-2 rounded-xl'>
                <button onClick={btnSucces} >Activity Completed</button>
                </div>
        </div>
    );
};

export default Exercice;
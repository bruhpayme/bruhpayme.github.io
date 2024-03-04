import React from 'react'
import Laptop from '../assets/laptop.gif'
const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold '>I need it.</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>The money. You pay. I take.</h1>
                    <p>I need a lot.</p>
                    <button className='bg-black text-[#00df9a] w-[275px] rounded-md font-medium my-6 mx-auto md:mx-0 py-5 px-4'>Just pay me with money, bruh.</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
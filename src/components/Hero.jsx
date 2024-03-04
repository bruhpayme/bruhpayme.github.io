import React from 'react'
import { ReactTyped } from "react-typed";


const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Fuck you.</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>PAY ME.</h1>
                <div className='flex justify-center items-center '>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>I need </p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' strings={['money', 'dollars', 'moola', 'scrilla', 'cheese']} typeSpeed={50} backSpeed={100} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Give me everything.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Pay me now</button>
            </div>
        </div>
    )
}

export default Hero
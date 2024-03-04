import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Did you pay me?</h1>
                <p className='py-4'>I just need money. That's all</p>
                {/* <div className='flex justify-between md:w-[75%] my-6 '>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div> */}
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>About</h6>
                    <ul>
                        <li className='py-2 text-sm'>Money?</li>
                        <li className='py-2 text-sm'>I need it</li>
                        <li className='py-2 text-sm'>I'll take it</li>
                        <li className='py-2 text-sm'>I can has money now?</li>
                    </ul>
                </div>
                {/* <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                    </ul>
                </div> */}
                {/* <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                        <li className='py-2 text-sm'>analytics</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
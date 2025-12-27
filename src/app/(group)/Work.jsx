'use client'
import React, { useEffect } from 'react';
import webDeb from '../../../public/webd.json'
import Lottie from 'lottie-react';
import { GoArrowRight } from 'react-icons/go';
import {Saira ,Nunito} from 'next/font/google';

const saira = Saira({
  subsets: ['latin'],
})
const Work = () => {

    return (
        <>

            <div>
                <div className='relative w-full h-60 flex flex-col justify-center items-center bg-black text-black'>
                    <img src="https://i.ibb.co.com/svWpL6XS/468941298-477763798666948-5824128802546079987-n.jpg" className=' h-[100%]  object-contain' alt="" />
                    <div className=' absolute w-full h-full'></div>
                </div>

            </div>

            <div className="w-full py-16 bg-white">

                <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

                    {/* Left div */}
                    <div>
                        <div className='sm:flex gap-x-12'>
                            <div className="flex flex-col   items-baseline gap-4">
                                <h1 className="text-9xl font-bold font-uniquifier text-[#fd6e0a]">03</h1>
                                <div className="text-lg -mt-5 tracking-[19px] font-medium text-gray-700">Years</div>
                            </div>


                            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                                <span className={saira.className}>OF WORKING EXPERIENCE AS A <br /> WEB DESIGNER & DEVELOPER  </span>
                                
                            </h2>
                        </div>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam
                            rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit
                            sanctus dolor eos.
                        </p>

                        {/* Features */}
                        <ul className="mt-6 space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="text-purple-600 border rounded-full text-sm h-5 w-5 flex justify-center items-center">✓</span> Afordable Prices
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-purple-600 border rounded-full text-sm h-5 w-5 flex justify-center items-center">✓</span> High Quality Product
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-purple-600 border rounded-full text-sm h-5 w-5 flex justify-center items-center">✓</span> On Time Project Delivery
                            </li>
                        </ul>


                       
                    </div>


                    {/* Right div */}
                    <div className="">
                        <div className='grid grid-cols-2 w-full justify-end items-center'>
                            <div></div>
                            <Lottie style={{width:'100%'} }  animationData={webDeb}></Lottie>
                        </div>


                        {/* Stats */}
                        <div className="col-span-2 mt-6 text-end">
                            <div className="flex items-center justify-end gap-3 text-xl font-semibold text-gray-800">
                                Happy Clients <span className="text-purple-600">| 1234</span>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            
        </>
    );
};

export default Work; 
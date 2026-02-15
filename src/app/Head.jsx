'use client'
import Lottie from 'lottie-react';
import React from 'react';
import Developer1 from '../../public/ani.json'
import Develop from '../../public/Developer.json'
import {Saira ,Nunito} from 'next/font/google';
import { GoArrowRight } from "react-icons/go";


const saira = Saira({
  subsets: ['latin'],
})
const nuniton= Nunito({
    subsets:['latin'],
})


const Head = () => {
    return (
        <div>
            <div className='pt-12 md:pt-0'>
                <div className='bg-[url(https://i.ibb.co.com/99Jb9QvL/578-5782721-technology-background-white-png-tech-background-image-for.png)] w-full   text-black'>
                    <div className='bg-[#fffffff8]  w-fulll h-[90vh]   '>
                        <div className='w-10/12 md:flex h-full  justify-around items-center relative mx-auto'>
                            <div className='flex flex-col gap-y-2'>
                                <div className='flex items-end'>
                                    <span className='text-2xl '> <span className={nuniton.className}>HELLO I AM</span></span>
                                </div>

                                <p className={ saira.className } ><span className='text-5xl'><span className='text-[#fd6e0a]'>NILOY PAUL</span></span></p>
                                <p className='text-2xl '>FRONTEND DEVELOPER </p>
                                <p className='text-gray-500'>I am a frontend developer based in Bangladesh, I will help you build beautiful websites your users will love.  </p>
                                <button className='btnDsing2 flex items-center gap-x-2 w-60 justify-center'>See Resume <GoArrowRight /></button>
                            </div>
                            <div >
                            <Lottie style={{ height: "250px" }} animationData={Develop}></Lottie>
                        </div>
                        </div>

                    </div>
                </div>


                {/* <div className='bg-[url(https://i.ibb.co.com/99Jb9QvL/578-5782721-technology-background-white-png-tech-background-image-for.png)] w-full h-full mt-0 flex flex-col justify-center items-center text-black'>

                    <div className='pt-10 md:pt-0 bg-[#fffffff5] h-full w-full flex leading-12 justify-center items-center relative flex-col'>
                        <div className='h-50 w-50 left-0 top-0 absolute bg-amber-500/50 z-10 rounded-full blur-3xl'></div>
                        <p className='text-black text-[40px] md:text-[90px] font-uniquifier  relative'><span className='tracking-[4px]'>GRAPHICS </span><span className='absolute top-6 text-sm leading-3.5 text-[#fd6e0a]'>BOX</span></p>
                        <p className='text-gray-600  '>Create fast & powerful websites for Protfolio !</p>
                         <div >
                            <Lottie style={{ height: "250px" }} animationData={Develop}></Lottie>
                        </div> 
                    </div>

                </div> */}

                <div className='w-10/12 mx-auto '>
                    <div className='grid grid-cols-1 mt-0 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-4'>
                        <div className='flex border rounded md:border-0 border-amber-600 py-4 flex-col gap-y-1.5 justify-center items-center'>
                            <img src="admin.svg" className='mb-2' alt="" />
                            <p className='text-5xl font-uniquifier'>434</p>
                            <p className='text-gray-400 text-center text-lg'>Client testimonials received in the year 2025</p>
                        </div>
                        <div className='flex border rounded md:border-0 border-amber-600 py-4 flex-col gap-y-1.5 justify-center items-center'>
                            <img src="star.svg" className='mb-2' alt="" />
                            <p className='text-5xl font-uniquifier'>2145</p>
                            <p className='text-gray-400 text-center text-lg'>Out of 5 stars from 3896 reviews on Google platform</p>
                        </div>
                        <div className='flex border rounded md:border-0 border-amber-600 py-4 flex-col gap-y-1.5 justify-center items-center'>
                            <img src="bag.svg" className='mb-2' alt="" />
                            <p className='text-5xl font-uniquifier'>45M+</p>
                            <p className='text-gray-400 text-center text-lg'>Revenue generated through new projects & marketing</p>
                        </div>
                    </div>
                </div>

                <div className='sm:grid w-10/12 mx-auto grid-cols-2 md:gap-x-6 mt-30 md:mt-10 items-center justify-between '>
                    <div>
                        <p className='text-2xl md:text-4xl uppercase'>Build amazing websites and landing pages with ease ....</p>
                        
                    </div>
                    {/* <img src="hero-app_development_02.svg" className='h-70 w-full' alt="" /> */}
                    <Lottie animationData={Developer1}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default Head;
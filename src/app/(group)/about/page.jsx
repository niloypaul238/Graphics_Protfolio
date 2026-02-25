import React from 'react';
import { Saira, Nunito } from 'next/font/google';
// import { GoArrowUpRight } from "react-icons/go";
import { FaJs, FaFigma } from "react-icons/fa";
import { GrReactjs ,GrJs } from "react-icons/gr";
import { SiAdobephotoshop } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { HiArrowDown } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';
import AboutMid from '@/Component/AboutMid';

export const metadata ={
    title:'About'
}

const saira = Saira({
    subsets: ['latin'],
})

const experince = [
       
        {
            id: 2,
            title: 'Frontend Developer',
            post: 'JR. Frontend Developer',
            company: 'Allion Coders',
            data: '2023 - 2025',
            disc: 'Developed responsive and high-performance UIs using React, Next.js, and Tailwind CSS. Focused on pixel-perfect design and smooth user experience.'
        }
    ]

const About = () => {
    return (
        <div>
            <div className=' relative'>
                <span className='text-[150px] transform top-[30%] left-[30%] fixed  block text-gray-600/5'>ABOUT</span>
                <div className='md:grid grid-cols-2 w-10/12 mx-auto justify-around items-center'>
                    <AboutMid/>
                    <div className='  flex justify-center '>
                        <img className='h-90 border border-amber-600 rounded shadow-md ' src="https://i.ibb.co.com/HTV0YHZv/1766690709181.jpg" alt="" />
                    </div>
                </div>

            </div>

            <div className='w-10/12 mx-auto  mt-10'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl flex flex-col items-center  gap-y-2 relative'>Technical Skill <HiArrowDown className='text-amber-600 animate-bounce' /><span className='w-10 absolute bottom-0 border-b border-amber-600'></span></p>
                    <div className='sm:grid grid-cols-2 md:grid-cols-4  gap-x-6  mt-10'>
                        <div className='flex flex-col gap-y-2 justify-center items-center'>
                          
                            <FaJs className='text-3xl w-20 border h-20 border-amber-600 rounded-full p-2' />
                            <span className={saira.className}>JS</span>
                        </div>
                        <div className='flex flex-col gap-y-2 justify-center items-center'>
                            <GrReactjs className='text-3xl w-20 border h-20 border-amber-600 rounded-full p-2' />
                            <span className={saira.className}>React</span>
                            <span ></span>
                        </div>
                        <div className='flex flex-col gap-y-2 justify-center items-center'>
                            <RiNextjsLine className='text-3xl w-20 border h-20 border-amber-600 rounded-full p-2' />
                            <span className={saira.className}>Next JS</span>
                            <span ></span>
                        </div>
                        
                        <div className='flex flex-col gap-y-2 justify-center items-center'>
                            <SiAdobephotoshop className='text-3xl w-20 border h-20 border-amber-600 rounded-full p-2' />
                            <span className={saira.className}>Adove Photoshop</span>
                            <span ></span>
                        </div>

                    </div>
                </div>
                <div className='mt-25 border rounded border-amber-600/30 p-2'>
                    <div>
                        <p className='text-4xl flex flex-col items-center mb-7  gap-y-2 relative'>Experence<HiArrowDown className='text-amber-600 animate-bounce' /><span className='w-10 absolute bottom-0 border-b border-amber-600'></span></p>

                        <div className=''>
                            {
                                experince.map(singleCard => {
                                    return (
                                        <div key={singleCard.id} className='sm:grid grid-cols-6 gap-x-3 pb-4'>

                                            <p className='text-2xl  '>{singleCard.title} </p>
                                            <div className='col-span-5 border-l pl-3 border-amber-600 '>
                                                <p className='font-semibold'><span className={saira.className}>{singleCard.title}</span></p>
                                                <p className='text-sm text-amber-600'>{singleCard.company}</p>
                                                <p className='text-gray-600'>{singleCard.data}</p>
                                                <p  className='text-gray-600'>{singleCard.disc}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";


const Nav = () => {
    const pathName = usePathname()
    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <div className='fixed shadow w-full z-200 bg-white/90 top-0'>

                <nav className="bg-neutral-primary  relative  w-10/12 mx-auto  start-0 ">

                    <div className="flex items-center justify-between   p-2">
                        <Link href={"/"} className="flex md:basis-1/5 items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co.com/fdcWGgWv/348495330-283561640759688-9100644232326295430-n.jpg" className="h-13 w-13  rounded-full object-cover overflow-hidden border border-[#fd6e0a] p-1" alt="Logo" />

                            <span className="self-center flex flex-col text-[17px] md:text-[20px] text-heading font-semibold whitespace-nowrap"><span className='font-uniquifier text-[#fd6e0a]'>Graphics</span><span className='font-typo1 text-sm'>Box</span></span>
                        </Link>


                        <div className=' basis-1/5 md:flex justify-center items-center'>
                            <div className="hidden  basis-3/5 w-full md:block md:w-auhref" id="navbar-default">
                                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-15  md:mt-0 md:border-0 md:bg-neutral-primary text-center sm:justify-center items-center">
                                    <Link href={'/'} className={`text-lg ${pathName == "/" && 'text-amber-600'}`} >Home</Link>
                                    <Link href={'/about'} className={`text-lg cursor-pointer ${pathName == "/about" && 'text-amber-600'}`}>About</Link>
                                    <Link href={'/projects'} className={`text-lg ${pathName == "/projects" && 'text-amber-600'}`}>Projects</Link>
                                    <Link href={'/service'} className={`text-lg ${pathName == "/service" && 'text-amber-600'}`}>Services</Link>
                                    <Link href={"/contucts"} className="btnDsing justify-center hidden  md:flex">Contuct </Link>
                                </ul>
                            </div>
                            
                        </div>
                        <FiMenu onClick={() => setToggle(!toggle)} className='md:hidden' />
                    </div>
                    {/* sm slide */}
                    <div className={`md:hidden pb-3  w-full ${toggle == true ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0   rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-15    ">
                            <Link onClick={() => setToggle(!toggle)} href={'/'} className={`text-lg ${pathName == "/" && 'text-amber-600'}`} >Home</Link>
                            <Link onClick={() => setToggle(!toggle)} href={'/service'} className={`text-lg ${pathName == "/service" && 'text-amber-600'}`}>Services</Link>
                            <Link onClick={() => setToggle(!toggle)} href={'/projects'} className={`text-lg ${pathName == "/projects" && 'text-amber-600'}`}>Projects</Link>
                            <Link onClick={() => setToggle(!toggle)} href={'/about'} className={`text-lg cursor-pointer ${pathName == "/about" && 'text-amber-600'}`}>About</Link>
                            <Link onClick={() => setToggle(!toggle)} href={'/contucts'} className={`text-lg ${pathName == "/contucts" && 'text-amber-600'}`}></Link>

                        </ul>
                        <div className=' '>
                            <Link href={"/contucts"} className="btnDsing w-full  md:hidden">Contuct </Link>

                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Nav;
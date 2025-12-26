import Link from 'next/link';
import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaSquareUpwork } from "react-icons/fa6";
import { CiFacebook } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';


const Footer = () => {
    return (
        <div>
            <div className=''>

                <footer className="relative bg-blueGray-200 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-blueGray-700">Let &apos;s keep in touch!</h4>
                                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </h5>
                                <div className="mt-6 flex gap-x-4 lg:mb-0 mb-6">
                                    <CiFacebook className="social hover:text-blue-500" />

                                    <AiOutlineYoutube className="social hover:text-red-500" />

                                    <FaGithub className="social hover:text-gray-500" />

                                    <Link href={'https://www.upwork.com/freelancers/~01f7f7dbd23e44718c?viewMode=1'}><FaSquareUpwork  className="social hover:text-green-500"  /></Link>
                                    
                                    <SiFiverr className="social hover:text-green-500" />

                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-blueGray-500  font-semibold mb-2 text-md">Useful Links</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="cursor-pointer hover:text-[#fd6e0a] hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >About Us</a>
                                            </li>
                                            <li>
                                                <a className="cursor-pointer hover:text-[#fd6e0a] hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Blog</a>
                                            </li>
                                            <li>
                                                <a className="cursor-pointer hover:text-[#fd6e0a] hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Github</a>
                                            </li>
                                            <li>
                                                <a className="cursor-pointer hover:text-[#fd6e0a] hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Free Products</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2">Other Resources</span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a className="text-blueGray-600 hover:text-[#fd6e0a] cursor-pointer hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm">MIT License</a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-[#fd6e0a] cursor-pointer hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Terms &amp; Conditions</a>
                                            </li>
                                            <li>
                                                <a className="text-blueGray-600 hover:text-[#fd6e0a] cursor-pointer hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Privacy Policy</a>
                                            </li>
                                            <li>
                                                <Link href={'/contucts'} className="text-blueGray-600 hover:text-[#fd6e0a] cursor-pointer hover:ml-2 transition-all duration-150 font-semibold block pb-2 text-sm" >Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
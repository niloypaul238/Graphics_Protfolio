'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import {Saira ,Nunito} from 'next/font/google';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const saira = Saira({
  subsets: ['latin'],
})

const Testimonial = () => {
        const [testimonial, setTestimonial] = useState([])

        useEffect(()=>{
        fetch("testmonial.json").then(res =>res.json().then( daat => setTestimonial(daat)))
    },[])
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-30 px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold  mb-4">
                        <span className={saira.className}> Testimonials</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto flex">
                        <FaQuoteLeft className="text-2xl" />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<FaQuoteRight className="text-2xl" />

                    </p>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".service-next",
                        prevEl: ".service-prev",
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {testimonial.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-[#fefeff] border h-70 border-amber-600 relative hover:shadow-2xl  rounded-2xl p-7 text-center shadow-lg hover:scale-110 transition  duration-300 ">
                                <div className="w-12 h-15 mx-auto mb-4 rounded-full border border-amber-600 flex items-center justify-center  text-xl p-1">
                                    <img src={item.image}  className="w-full h-full object-cover rounded-full" alt="" />
                                </div>
                                <p className="my-1 text-amber-600"><span className={saira.className}>{item.name} <span className="text-[9px]">( {item.role})</span></span></p>
                                <h3 className=" w-full  absolute top-0 left-1/2 -translate-x-1/2  text-center text-gray-400/30  text-lg font-semibold mb-3 ">
                                    {item.company}<br/>
                                </h3>

                                <p className=" text-sm mb-6">
                                    {item.review}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows */}
                <div className="flex justify-center gap-6 mt-12 text-gray-400 text-xl">
                    <button className="service-prev cursor-pointer hover:text-amber-600 hover:text-xl transition">
                        <GoArrowLeft />
                    </button>
                    <button className="service-next cursor-pointer hover:text-amber-600 hover:text-xl transition">
                        <GoArrowRight />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
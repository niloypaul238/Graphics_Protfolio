"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Saira ,Nunito} from 'next/font/google';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

const saira = Saira({
  subsets: ['latin'],
})
const courses = [
    {
        id: 1,
        tag: "JavaScript",
        title: "E-Plants ",
        image: "https://i.ibb.co.com/xqYV46PF/Natural-Mockup-Freebie-Lead-Magnet-Facebook-Post.jpg",
        price: 5000,
        rating: 5,
        reviews: 50,
        src:'https://plantsproject-gamma.vercel.app/'
    },
    {
        id: 2,
        tag: "React JS",
        title: "Admin Panel ",
        image: "https://i.ibb.co.com/VYfFhBvG/New-Website-Blue-Mockup-Instagram-Laptop.png",
        price: 5000,
        rating: 5,
        reviews: 50,
        src:'https://spectacular-croquembouche-945fd8.netlify.app/'
    }
];

const MostProject = () => {
    return (
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8  items-center">

                    {/* Left Text */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900">
                           <span className={saira.className}>
                             Most <br />
                            <span className="text-amber-600">Popular</span> <br />
                            Projects
                           </span>
                        </h2>
                    </div>

                    {/* Slider */}
                    <div className="lg:col-span-3">
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            breakpoints={{
                                320: { slidesPerView: 1.1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="pb-12"
                        >
                            {courses.map((course) => (
                                <SwiperSlide key={course.id}>
                                    <Link href={`${course.src}`} target='_'
                                        className={`bg-white rounded-2xl cursor-pointer p-4 shadow-md transition ${course.faded ? "opacity-40" : ""
                                            }`}
                                    >
                                        {/* Image */}
                                        <div className="relative">
                                            <img
                                                src={course.image}
                                                alt={course.title}
                                                className="rounded-xl h-44 w-full object-cover"
                                            />
                                            <span className="absolute top-3 left-3 bg-white text-sm px-3 py-1 rounded-full shadow">
                                                {course.tag}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="mt-4">
                                            <h3 className="font-semibold text-gray-900 mb-2">
                                                {course.title}
                                            </h3>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                                                {"★".repeat(course.rating)}
                                                <span className="text-gray-500 ml-1">
                                                    ({course.reviews})
                                                </span>
                                            </div>

                                            {/* Price */}
                                            {/* <div className="flex items-center justify-between">
                                                {/* <p className="text-lg font-bold text-gray-900">
                                                    ${course.price}
                                                </p> 
                                                <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                                                    ↗
                                                </button>
                                            </div> */}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
    );
};

export default MostProject;
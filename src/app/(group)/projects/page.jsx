'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {Saira ,Nunito} from 'next/font/google';
import "swiper/css";
import "swiper/css/pagination";
import Work from "../Work";
import AllProjects from "../AllProjects";

const saira = Saira({
  subsets: ['latin'],
})
const courses = [
    {
        id: 1,
        tag: "React js",
        title: "Online Shop",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        price: 600,
        rating: 5,
        reviews: 18,
    },
    {
        id: 2,
        tag: "React js",
        title: "School Managment ",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        price: 5000,
        rating: 5,
        reviews: 50,
    },
    {
        id: 3,
        tag: "HTML",
        title: "Mastering HTML5...",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        price: 3000,
        rating: 5,
        reviews: 12,
    },
    {
        id: 4,
        tag: "JavaScript",
        title: "JavaScript for Beginners",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        price: 4500,
        rating: 4,
        reviews: 25,
        faded: true,
    },
];

const Projects = () => {
    return (
        <section className="bg-[#f2fbf7]">
            <Work/>
            <div className="w-10/12 mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

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
                                    <div
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
                                            <div className="flex items-center justify-between">
                                                <p className="text-lg font-bold text-gray-900">
                                                    ${course.price}
                                                </p>
                                                <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                                                    ↗
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>


            <AllProjects/>
        </section>
    );
};

export default Projects;

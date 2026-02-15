"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import {Saira ,Nunito} from 'next/font/google';
import "swiper/css";
import "swiper/css/navigation";

const saira = Saira({
  subsets: ['latin'],
})



const services = [
  {
    id: 1,
    title: "Dashboard (Admin panel)",
    desc: "Custom dashboards and admin panels with real-time data visualization, easy management tools, and responsive design for smooth operations.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Protfolio & Business Web",
    desc: "Creacting elegant, custom websites that highlight personal brands, startups, and businessess effectively",
    icon: "🅣",
  },
  {
    id: 3,
    title: "Figma to React, Next.js",
    desc: "Convert your Figma or design files into fully functional, pixel-perfect React or Next.js applications with responsive UI and clean code.",
    icon: "📐",
  },
  {
    id: 4,
    title: "Web design",
    desc: "The process of creating visually appealing and user-friendly interfaces using HTML, CSS and JavaScritpt focusing on layout, typography, and responsive design principles.",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Application development",
    desc: "Developing dynamic, feature-rich applications using technologies like React.js, Next.js for front-end, Firebase for authentication and hosting, and MongoDB for database management.",
    icon: "✏️",
  },
  {
    id: 6,
    title: "E-commerce Project",
    desc: "Adding dynamic functionality, interactivity, and smooth user experiences using Next js",
    icon: "📱d",
  },
  {
    id: 7,
    title: "Front-End Development",
    desc: "Transforming UI designs into interactive, high-performance web pages with HTML, CSS and JavaScript frameworks.",
    icon: "🖥️",
  }
];

const Services = () => {
    return (
        <div>
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
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#fefeff] hover:shadow-2xl  rounded-2xl p-6 text-center shadow-lg hover:scale-110 transition duration-300 h-70 border border-amber-600/60">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-amber-600 flex items-center justify-center  text-xl">
                    {item.icon}
                  </div>

                  <h3 className="text-black text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6">
                    {item.desc}
                  </p>

                  {/* <button className="border btnDsing px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                    View more
                  </button> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    );
};

export default Services;
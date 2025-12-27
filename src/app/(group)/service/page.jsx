'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {Saira ,Nunito} from 'next/font/google';
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Teams from "../Team";






const saira = Saira({
  subsets: ['latin'],
})

const services = [
  {
    id: 1,
    title: "UX Design",
    desc: "Crafting seamless user experiences with elegant and intuitive design.",
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
    title: "Website Maintenance",
    desc: "Ensuring your website stays secure, updated and optimized for performance",
    icon: "📐",
  },
  {
    id: 4,
    title: "Web design",
    desc: "The process of creating visually appealing and user-friendly interfaces using HTML, CSS and JavaScritpt focusing on layout, typography, and responsive design principles.",
    icon: "✏️",
  },
  {
    id: 4,
    title: "Web design",
    desc: "The process of creating visually appealing and user-friendly interfaces using HTML, CSS and JavaScritpt focusing on layout, typography, and responsive design principles.",
    icon: "✏️",
  },
  {
    id: 5,
    title: "Application development",
    desc: "Developing dynamic, feature-rich applications using technologies like React.js, Next.js for front-end, Firebase for authentication and hosting, and MongoDB for database management.",
    icon: "✏️",
  },
  {
    id: 5,
    title: "UI Design",
    desc: "Modern interfaces built with precision and creativity.",
    icon: "🖥️",
  },
  {
    id: 6,
    title: "Front-End Development",
    desc: "Transforming UI dESIGNS into interactive, high-performance web pages with HTML, CSS and JavaScript frameworks.",
    icon: "🖥️",
  }
];

const Service = () => {
  return (
    <section className="bg-[url(https://i.ibb.co.com/99Jb9QvL/578-5782721-technology-background-white-png-tech-background-image-for.png)]">
      <div className="bg-white/94">
        <div className="max-w-7xl  mx-auto px-4">

          {/* Heading */}
          <div className="text-center pt-10 mb-14">
            <h2 className="text-4xl font-bold  mb-4">
            <span className={saira.className}> Our Services</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tailored solutions for your success. Elevate your experience with our
              exceptional and comprehensive services today.
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
      
      

        <div className="mt-10">
            <Teams/>
        </div>
      </div>
    </section>
  );
};

export default Service;

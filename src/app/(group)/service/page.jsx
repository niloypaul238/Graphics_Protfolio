import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Teams from "../Team";
import Services from "@/Component/Services";
import { Saira } from "next/font/google";

export const metadata={
    title:'Service'
}



const saira = Saira({
  subsets: ['latin'],
})

const Service = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

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

         <Services/>

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

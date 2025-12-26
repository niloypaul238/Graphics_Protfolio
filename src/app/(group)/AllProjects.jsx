"use client"
import React, { useState } from 'react';
import { projects } from '../../../public/projects';


const AllProjects = () => {

    const [active, setActive] = useState("ALL");
    const filters = ["ALL", "WEB DESIGN", "BRANDING", "MOBILE APP", "MOTION"];
    const filtered =
        active === "ALL"
            ? projects
            : projects.filter(item => item.category === active);


    return (
        <div>
            <div className="bg-black min-h-screen text-white px-6 py-14">

                {/* Filter Buttons */}
                <div className="flex justify-center gap-8 mb-12 text-sm uppercase tracking-widest">
                    {filters.map(item => (
                        <button
                            key={item}
                            onClick={() => setActive(item)}
                            className={`transition ${active === item ? "text-yellow-400" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {filtered.map(pro => (
                        <div key={pro.id} className = "relative cursor-pointer group overflow-hidden bg-neutral-900 rounded-xl">
                        
                        {/* Image */ }
                        < img src = { pro.image } className = "w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110" />

                        {/* Overlay */ }
                        < div className = "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6" >
                                <h3 className="text-xl font-semibold"></h3>
                            <p className="text-sm text-gray-300 mt-1"> {pro.tag}</p>
                        </div>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
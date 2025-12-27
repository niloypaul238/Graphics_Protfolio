import React from 'react';

const Teams = () => {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-medium text-slate-800 text-center">Meet Our Team</h1>
                <p className="text-slate-500 text-center">The people behind the product, passionate about what they do.</p>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
                    
                    <div className="max-w-80 bg-black text-white rounded-2xl">
                        <div className="relative -mt-px overflow-hidden rounded-2xl">
                            <img src="https://i.ibb.co.com/rRFrqN8G/Chat-GPT-Image-Dec-8-2025-10-21-14-PM.png" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                        </div>
                        <div className="px-4 pb-6 text-center">
                            <p className="mt-4 text-lg">Niloy Pual</p>
                            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Front-End Developer</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Teams;
"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Saira, Nunito } from 'next/font/google';

const saira = Saira({
    subsets: ['latin'],
})

const AboutMid = () => {

    return (
        <div>
            <p className='sm:text-3xl'>Hello There 👋 I’m <span> </span></p>
            <p className={saira.className}>
                <span className='text-[20px] sm:text-[50px] flex gap-x-3 '>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Frondend Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Designer',
                            1000,
                            'React JS Developer',
                            1000,
                            'Next JS Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    /></span>
            </p>
            <p className='text-gray-400'>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces  . My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
        </div>
    );
};

export default AboutMid;
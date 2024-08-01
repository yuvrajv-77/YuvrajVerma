'use client'
import React, { Component } from 'react'
import { motion } from "framer-motion";
import { DockerIcon, ExpressIcon, GitIcon, HtmlIcon, JsIcon, NextIcon, ReactIcon, TailwindIcon, } from './icons';
import { HoverBorderGradient } from './ui/hover-border-gradient';

function Tech() {
    const icons = [
        { id: '1', component: NextIcon },
        { id: '2', component: ReactIcon },
        { id: '3', component: JsIcon },
        { id: '4', component: TailwindIcon },
        { id: '5', component: GitIcon },
        { id: '6', component: HtmlIcon },
        { id: '7', component: ExpressIcon },
        { id: '8', component: DockerIcon },

    ]
    return (
        <div>
            <div id='techstack' className="  py-64  bg-black   bg-grid-white/[0.2] relative  w-full">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className='flex flex-col items-center justify-center gap-20  h-full'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.4, 0.0, 0.2, 1],
                        }} className='space-y-9 text-center  z-20'
                    >
                        <h1 className='text-4xl md:text-6xl font-bold'>My Tech Stack</h1>
                        <p className='tracking-wide'>What makes me best to make your product stand out</p>
                    </motion.div>

                    <motion.div className='grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-14'
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}>

                        {icons.map(({ id, component: IconComponent }) => (
                            <HoverBorderGradient
                                key={id}
                                containerClassName='rounded-2xl'
                                as='div'
                                className='bg-zinc-800 h-[100px] w-[100px] md:h-[120px] md:w-[120px] flex items-center justify-center'
                            >
                                <IconComponent />
                            </HoverBorderGradient>
                        ))}

                    </motion.div>
                </div>


            </div>
        </div>
    )
}

export default Tech
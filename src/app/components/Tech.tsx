'use client'
import React, { Component, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion";
import { DockerIcon, TypescriptIcon,NodeIcon, ExpressIcon, GitIcon, HtmlIcon, JsIcon, NextIcon, ReactIcon, TailwindIcon, } from './icons';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const iconVariants = (duration: number,i:number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            delay: i*0.6
        }
    }
});

function Tech() {
    const icons = [
        { id: '1', component: NodeIcon },
        { id: '2', component: ReactIcon },
        { id: '3', component: JsIcon },
        { id: '4', component: TailwindIcon },
        { id: '5', component: GitIcon },
        { id: '6', component: HtmlIcon },
        { id: '7', component: ExpressIcon },
        { id: '8', component: TypescriptIcon },

    ]

    // const ref = useRef(null);
    // const isInView = useInView(ref,{once:true});
    // const maincontrol = useAnimation();

    // useEffect(() => {
    //     if(isInView){
    //         maincontrol.start('visible')
    //     }
    // },[isInView])

    

    return (
        <div>
            <div id='techstack' className="  py-64  bg-black   bg-grid-white/[0.2] relative  w-full">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className='flex flex-col items-center justify-center gap-20  h-full'>
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -60 }}
                        transition={{ duration: 0.3 }}
                        className='space-y-9 text-center z-20'>
                        <h1 className='text-4xl md:text-6xl font-bold'>My Tech Stack</h1>
                        <p className='tracking-wide'>What makes me best to make your product stand out</p>
                    </motion.div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-14'>

                        {icons.map(({ id, component: IconComponent },i) => (
                            <motion.div
                            key={id}
                            initial={{opacity:0, scale:0}}
                            whileInView={{opacity:1, scale:1}}
                            transition={{duration:0.2, delay: i*0.1}}>
                                <HoverBorderGradient
                                    key={id}
                                    containerClassName='rounded-2xl'
                                    as='div'
                                    className='bg-zinc-800 h-[100px] w-[100px] md:h-[120px] md:w-[120px] flex items-center justify-center'
                                >
                                    <IconComponent />
                                </HoverBorderGradient>
                            </motion.div>

                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tech
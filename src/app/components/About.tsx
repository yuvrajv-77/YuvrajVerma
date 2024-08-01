"use client";
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Button } from './ui/moving-border';
import { HoverBorderGradient } from './ui/hover-border-gradient';

function About() {
    return (
        <motion.div className='lg:my-28 lg:mx-72' id='aboutme'
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
            }}
        >
            <div className='text-center space-y-4 '>
                <h1 className='text-4xl md:text-7xl font-bold'>About Me</h1>
                <p className='tracking-wide text-sm'>A Frontend Developer, developing interaction between humans & brands</p>
            </div>

            {/* Contents */}
            <div className='grid  lg:grid-cols-10 lg:my-20 my-10  '>

                <section className='  col-span-6 flex flex-col items-start justify-between p-6 gap-9'>
                    <h1 className='text-2xl  lg:text-5xl font-semibold'>A versatile designer with a passion for pixel-perfection</h1>
                    <p className='text-sm text-justify lg:text-xl'>As a digital creative designer, who loves to create stunning and flawless products, I have a passion for both design and development.
                        <br /><br />I have worked on a variety of products across various industries such as E-commerce, blockchain , and complex AI Saas dashboards.
                    </p>
                    <div className='flex flex-col md:flex-row gap-5 mx-auto md:mx-0'>
                        <HoverBorderGradient
                            containerClassName="rounded-[1.75rem]"
                            as='button'
                            className="text-sm bg-black border rounded-[28px] px-6 py-5">
                            Download CV
                        </HoverBorderGradient>
                        <Button
                            borderRadius="1.75rem"
                            className=" bg-slate-800 text-white  border-slate-800"
                        >
                            Contact Me
                        </Button>
                    </div>
                </section>

                {/* Image */}
                <section className=' col-span-4'>
                    <CardContainer className="inter-var py-0">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black border-white/[0.2] w- sm:w-[30rem] h-auto rounded-xl p-6 border">

                            <CardItem translateZ="100" className="w-full ">
                                <Image
                                    src="/photo.jpg"
                                    height="500"
                                    width="500"
                                    className="h-90  w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>

                        </CardBody>
                    </CardContainer>
                </section>

            </div>

        </motion.div>
    )
}

export default About
import React, { useEffect, useRef } from 'react'
import { BackgroundGradient } from './ui/backgroung-gradient'

import { Github } from './icons'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Project {
    name: string;
    img: string;
    description: string;
    tech: string[];
    url: string;
    source: string;
}

const Projects: React.FC = () => {

    let linksvg = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 hover:stroke-violet-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>

    )

    const myprojects: Project[] = [
        {
            name: "SkyCast",
            img: '/skycast.png',
            description: "SkyCast is a weather Forecasting React app. Built with React JS and uses Third Party API to show Weather information",
            tech: ['React', 'JavaScript', 'Tailwind CSS'],
            url: 'https://sky-cast-pi.vercel.app/',
            source: 'https://github.com/yuvrajv-77/SkyCast'
        },
        {
            name: "Skill Swap Landing Page",
            img: '/skillswap.png',
            description: "A Landing Page of Skill Exchange Platform",
            tech: ['React', 'HTML', 'JavaScript', 'Tailwind CSS'],
            url: 'https://skill-swap-landing-page.vercel.app',
            source: 'https://github.com/yuvrajv-77/Skill-Swap-Landing-Page'

        },
        {
            name: "Portfolio",
            img: '/portfolio.png',
            description: "Sleek, responsive portfolio showcasing projects with Next.js and Tailwind CSS.",
            tech: ['Next', 'React', 'TypeScript', 'Tailwind CSS'],
            url: '',
            source: ''
        },
        {
            name: "Note.it",
            img: '/note.it.png',
            description: "Note.it is a sleek and intuitive web-based note-taking application built with HTML CSS and JavaScript with responsive design.",
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            url: 'https://yuvrajv-77.github.io/Note.it/',
            source: 'https://github.com/yuvrajv-77/Note.it'
        },
        {
            name: "Lets Chat !",
            img: '/letschat.png',
            description: "Lets Chat is a Chatting app. Built with React JS and Node js and implemented Socket.io",
            tech: ['React JS', 'TailwindCSS', 'JavaScript', 'Next UI', 'Socket.io', 'Node JS', 'Express JS', 'MongoDB'],
            url: 'https://lets-chat-k4dr.onrender.com/app',
            source: 'https://github.com/yuvrajv-77/Note.it'
        },
    ]



    return (
        <div>
            {/* <Spotlight/> */}
            <div className='lg:my-28 lg:mx-80 mx-6 relative bg-black/[0.96]  bg-grid-white/[0.03]' id='projects'>

                <motion.h1 initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-4xl md:text-6xl  font-bold text-center '>My Projects</motion.h1>

                <div className='grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-10 my-36'>

                    {myprojects.map((project, index) => (
                        <motion.div
                            onClick={() => window.open(project.url, '_blank')}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }} // Adjust the delay as needed for each project 
                            key={index} className='max-w-[500px] cursor-pointer border bg-zinc-900 rounded-3xl hover:border-blue-500 overflow-hidden'>
                            <div className='w-full h-[280px]'>
                                <img src={project.img} alt="" className='object-cover w-full h-full ' />
                            </div>
                            {/* -------Details----- */}
                            <div className='px-7 py-6 '>
                                <div className='space-y-3'>
                                    <a className='flex items-center gap-2 '><h1 className='lg:text-2xl hover:text-violet-400 cursor-pointer text-lg font-bold '>{project.name}</h1>{linksvg}</a>
                                    <p className='lg:text-sm text-xs my-2'>{project.description}</p>
                                </div>
                            </div>

                            <div className='flex px-7 pb-5 justify-between items-center'>
                                <div className='flex flex-wrap gap-2 lg:text-sm text-xs text-'>
                                    {project.tech.map((tech, i) => (
                                        <p className='bg-slate-700 p-1 rounded-lg ' key={i}>{tech}</p>
                                    ))}


                                </div>
                                <div className='flex gap-3'>
                                    <a href={project.source} target="_blank" rel="noopener noreferrer" className='cursor-pointer border p-1 rounded-full' ><Github /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}





                </div>
            </div>
        </div>
    )
}

export default Projects
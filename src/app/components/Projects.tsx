import React from 'react'
import { BackgroundGradient } from './ui/backgroung-gradient'

import { Github } from './icons'

const Projects = () => {


    const myprojects = [
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
            description: "SkyCast is a weather Forecasting React app. Built with React JS and uses Third Party API to show Weather information",
            tech: ['Next', 'React', 'TypeScript', 'Tailwind CSS'],
            url: '',
            source: ''
        },
        {
            name: "Note.it",
            img: '/note.it.png',
            description: "SkyCast is a weather Forecasting React app. Built with React JS and uses Third Party API to show Weather information",
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            url: 'https://yuvrajv-77.github.io/Note.it/',
            source: 'https://github.com/yuvrajv-77/Note.it'
        },
    ]

    return (
        <div>
            {/* <Spotlight/> */}
            <div className='lg:my-28 lg:mx-80 mx-6 relative bg-black/[0.96]  bg-grid-white/[0.03]' id='projects'>

                <h1 className='text-4xl md:text-6xl  font-bold text-center '>My Projects</h1>

                <div className='grid lg:grid-cols-2 grid-cols-1  gap-10 my-36'>

                    {myprojects.map((project, index) => (
                        <div key={index} className=' cursor-pointer border bg-zinc-900 rounded-3xl overflow-hidden'>
                            <div className='w-[full] h-[360px]'>
                                <img src={project.img} alt="" className='object-cover w-full h-full ' />
                            </div>
                            {/* -------Details----- */}
                            <div className='px-7 py-6 '>
                                <div className='space-y-3'>
                                    <a href={project.url}><h1 className='lg:text-2xl hover:text-violet-400 cursor-pointer text-lg font-bold'>{project.name}</h1></a>
                                    <p className='lg:text-sm text-xs my-2'>{project.description}</p>
                                </div>
                            </div>

                            <div className='flex px-7 pb-5 justify-between items-center'>
                                <div className='flex flex-wrap gap-2 lg:text-sm text-xs text-'>
                                    {project.tech.map((tech,i) =>(
                                        <p className='bg-slate-700 p-1 rounded-lg ' key={i}>{tech}</p>
                                    ))}
                                    

                                </div>
                                <div className='flex gap-3'>
                                    <a href={project.source} target="_blank" rel="noopener noreferrer" className='cursor-pointer border p-1 rounded-full' ><Github /></a>
                                </div>
                            </div>
                        </div>
                    ))}





                </div>
            </div>
        </div>
    )
}

export default Projects
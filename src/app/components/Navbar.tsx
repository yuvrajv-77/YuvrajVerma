'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from 'react'
import { Github, GitIcon, Leetcode, Linkedin, Twitter } from './icons';
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Button } from './ui/moving-border'
import { HoverBorderGradient } from './ui/hover-border-gradient';

interface NavItem {
    name: string;
    link: string;
    icon: React.ReactNode;
  }
function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navItems: NavItem[] = [
        {
            name: "Home",
            link: "/#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/#aboutme",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Skills",
            link: "/#techstack",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "/#projects",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    const navList = (
        <ul className=' flex gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            <li className='px-4 py-3 hover:rounded-lg hover:bg-zinc-800'>
                <Link href={"#home"} className='text-lg  '>Home</Link>
            </li>
            <li className='px-4 py-3 hover:rounded-lg hover:bg-zinc-800'>
                <Link href={"#aboutme"} className='text-lg  '>About</Link>
            </li>
            <li className='px-4 py-3 hover:rounded-lg hover:bg-zinc-800'>
                <Link href={"#techstack"} className='text-lg'>Skills</Link>
            </li>
            <li className='px-4 py-3 hover:rounded-lg hover:bg-zinc-800'>
                <Link href={"#projects"} className='text-lg  '>Projects</Link>
            </li>
        </ul>
    )

    // to prevent scrolling on the nav menu 
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    return (
        <nav className='relative z-20 text-white  w-full py-2 lg:px-8 lg:py-2'>
            <div className='mx-auto flex items-center justify-around'>
                <a href="" className='text-3xl p-3 font-extrabold text-blue-500'>
                    Yuvraj
                </a>
                <div className='hidden lg:block'>
                    {navList}
                </div>

                <HoverBorderGradient
                    containerClassName="rounded-[1.75rem]"
                    as='div'
                    className="text-sm bg-black  rounded-[20px] px-6 py-2 lg:block hidden">
                    <ul className='flex gap-5 items-center'>
                        <li ><a href="https://www.linkedin.com/in/yuvraj-verma-441ba2233/" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Linkedin /></a></li>
                        <li ><a href="https://github.com/yuvrajv-77" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Github /></a></li>
                        <li ><a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Twitter /></a></li>
                        {/* <li ><a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Leetcode /></a></li> */}
                    </ul>
                </HoverBorderGradient>

                <button className='flex flex-col justify-between items-start gap-1 lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <span className={`bg-white h-0.5 w-6 rounded-2xl block transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
                    <span className={`bg-white h-0.5 w-6 rounded-2xl block transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-1'} `}></span>
                    <span className={`bg-white h-0.5 w-6 rounded-2xl block transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'} `}></span>
                </button>

            </div>

            <AnimatePresence>
                {isOpen && <motion.div initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }}
                    className='absolute h-[calc(100vh-7rem)] w-full lg:hidden overflow-hidden backdrop-blur-2xl'>
                    <ul className='h-full items-center justify-center flex flex-col gap-24 '>
                        <li className=''>
                            <Link href={"#home"} onClick={() => setIsOpen(false)} className='text-2xl  px-10'>Home</Link>
                        </li>
                        <li className=''>
                            <Link href={"#aboutme"} onClick={() => setIsOpen(false)} className='text-2xl  px-10'>About</Link>
                        </li>
                        <li className=''>
                            <Link href={"#techstack"} onClick={() => setIsOpen(false)} className='text-2xl  px-10'>Skills</Link>
                        </li>
                        <li className=''>
                            <Link href={"#projects"} onClick={() => setIsOpen(false)} className='text-2xl  px-10'>Project</Link>
                        </li>
                    </ul>
                </motion.div>}
            </AnimatePresence>




            <div className="relative hidden lg:block w-full">
                <FloatingNav navItems={navItems} />

            </div>
        </nav>
    )
}

export default Navbar
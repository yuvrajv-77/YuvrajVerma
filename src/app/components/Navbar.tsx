'use client'
import Link from 'next/link'
import React from 'react'
import { Github, GitIcon, Leetcode, Linkedin, Twitter } from './icons';
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Button } from './ui/moving-border'
import { HoverBorderGradient } from './ui/hover-border-gradient';

function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Projects",
            link: "/projects",
            icon: (
                <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    const navList = (
        <ul className=' flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
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
    return (
        <nav className=' z-10 text-white  w-full px-4 py-2 lg:px-8 lg:py-2'>
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
                    className="text-sm bg-black  rounded-[20px] px-6 py-2">
                    <ul className='flex gap-5 items-center'>
                        <li ><a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Linkedin /></a></li>
                        <li ><a href="https://github.com/yuvrajv-77" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Github /></a></li>
                        <li ><a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Twitter /></a></li>
                        <li ><a href="" target="_blank" rel="noopener noreferrer" className='cursor-pointer' ><Leetcode /></a></li>
                    </ul>
                </HoverBorderGradient>


            </div>

            <div className="relative  w-full">
                <FloatingNav navItems={navItems} />

            </div>
        </nav>
    )
}

export default Navbar
"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/moving-border";
import Link from "next/link";


export function Hero() {
    const words = [
        {
            text: "Hello,",
            className: "text-white text-2xl md:text-4xl",
        },
        {
            text: "I'm",
            className: "text-white text-2xl md:text-4xl",
        },
        {
            text: "Yuvraj Verma",
            className: "text-blue-500 dark:text-blue-500 text-2xl md:text-4xl",
        },
    ]
    return (
        <HeroHighlight className="" id="home" >
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
                }}
                className=" text-2xl space-y-6 px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-loose text-center mx-auto "
            >
                <div className="flex flex-col items-center justify-center -mb-5">
                    <TypewriterEffectSmooth words={words} />
                </div>
                An Energetic and Passionate{" "}
                <Highlight className="text-black dark:text-white">
                    Frontend Web Developer.
                </Highlight>
                <p className="text-sm md:text-lg tracking-wide">I specialize in crafting Web3 and AI digital products that prioritize user-centric design</p>

                <div className="flex items-center justify-center gap-5 ">
                    <HoverBorderGradient
                        containerClassName="rounded-[1.75rem]"
                        as='button'
                        className="text-sm bg-black border rounded-[28px] px-6 py-5">
                        Download CV
                    </HoverBorderGradient>

                    <Link href='#contactme'>
                        <Button
                            borderRadius="1.75rem"
                            className=" bg-slate-800 text-white  border-slate-800"
                        >
                            Contact Me
                        </Button>
                    </Link>
                </div>

            </motion.div>


        </HeroHighlight>

    );
}

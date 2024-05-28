"use client"
import React, {useRef} from 'react';
import {motion, useInView, useScroll} from "framer-motion"
import Brain from "@/components/brain";

const AboutPage = () => {
    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container: containerRef});
    const skillRef = useRef()
    // const isSkillRefInView = useInView(skillRef, {once:true})
    const isSkillRefInView = useInView(skillRef, {margin: "-100px"})
    const ExperienceRef = useRef()
    const isExperienceRefInView = useInView(ExperienceRef, {margin: "-100px"})
    return (
        <motion.div
            className="h-full "
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            <div className="h-full   relative lg:flex" ref={containerRef}>
                <div
                    className="p-4 overflow-scroll no-scrollbar sm:p-8 md:p-12  lg:p-20 xl:p-48 flex flex-col  gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">Hello my dears. My name is Murod Shakhriddinov, I am 23 years old and I
                            was born and raised in Samarkand and currently live in Tashkent. I entered the field of
                            programming in 2021 and studied at PDP IT academy.</p>
                        <span className="italic">Currently, I am a programmer and freelancer in an online internet magazine, teaching programming to students online.</span>

                        <div className="">
                            <motion.svg
                                initial={{opacity: 0.2, y: 0}}
                                animate={{opacity: 1, y: "10px"}}
                                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                className="hidden md:block"
                                style={{opacity: 0.258664, transform: " translateY(0.733297px)"}}>
                                <path
                                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                    stroke="#000000" strokeWidth="1"></path>
                                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
                            </motion.svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <motion.h1
                            initial={{x: "-300px"}}
                            animate={isSkillRefInView ? {x: 0} : {}}
                            transition={{delay: 0.2}}
                            className="font-bold text-2xl">
                            SKILLS
                        </motion.h1>
                        <motion.div
                            initial={{x: "-300px"}}
                            animate={isSkillRefInView ? {x: 0} : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">BOOTSTRAP
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind.css
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">API
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">GitHub
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux
                                Toolkit
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Rest
                                API
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer
                                Motion
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS
                            </div>
                            <div
                                className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript
                            </div>
                        </motion.div>
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            className="hidden md:block"
                            style={{opacity: 0.258664, transform: " translateY(0.733297px)"}}>
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000" strokeWidth="1"></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
                        </motion.svg>
                    </div>
                    <div className="flex flex-col gap-12 justify-centerpb-48" ref={ExperienceRef}>
                        <motion.h1
                            initial={{x: "-300px"}}
                            animate={isExperienceRefInView ? {x: "0"} : {}}
                            transition={{delay: 0.2}}
                            className="font-bold text-2xl"
                        >EXPERIENCE
                        </motion.h1>
                        <motion.div
                            initial={{x: "-300px"}}
                            animate={isExperienceRefInView ? {x: "0"} : {}}
                            className=""
                        >
                            <div className="flex justify-between h-48">
                                <div className="w-1/3 ">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior Java
                                        Script
                                        Developer
                                    </div>
                                    <div className="p-3 text-sm italic">Creation and implementation of start-up projects
                                        at the Ministry of Innovation, i.e. creation of "Game lessons and exercises for
                                        children to help school textbooks"
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">2021 - 6-month</div>
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">Startup project
                                    </div>
                                </div>
                                {/*center*/}
                                <div className="w-1/6 ">
                                    {/*line*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*right*/}
                                <div className="w-1/3 ">

                                </div>
                            </div>
                            <div className="flex justify-between h-48">
                                <div className="w-1/3 ">

                                </div>
                                {/*center*/}
                                <div className="w-1/6 ">
                                    {/*line*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*right*/}
                                <div className="w-1/3 ">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Junior +
                                        React js
                                    </div>
                                    <div className="p-3 text-sm italic">I worked at OKS Technologies, where we created
                                        projects for non-governmental and state enterprises and successfully delivered
                                        many projects.
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">2022 - 9 month</div>
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">OKS Technologies
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-48">
                                <div className="w-1/3 ">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Middle Reactjs
                                        Developer
                                    </div>
                                    <div className="p-3 text-sm italic">NAPA Automotive is a private company where I
                                        started working as a programmer and participated in more than 10 projects and
                                        later started teaching here.
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023</div>
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">NAPA Avtomotive</div>
                                </div>
                                {/*center*/}
                                <div className="w-1/6 ">
                                    {/*line*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*right*/}
                                <div className="w-1/3">

                                </div>
                            </div>
                            <div className="flex justify-between h-48">
                                <div className="w-1/3 ">

                                </div>
                                {/*center*/}
                                <div className="w-1/6 ">
                                    {/*line*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*right*/}
                                <div className="w-1/3 ">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Middle +
                                        React js and Teacher
                                    </div>
                                    <div className="p-3 text-sm italic">Currently, I am working as a main programmer at Teaching and Online Internet magazine
                                    </div>
                                    <div className="p-3 text-red-400 text-sm font-semibold">2024 - present</div>
                                    <div className="p-3 rounded bg-white text-sm font-semibold w-fit">Teacher
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
                <div className="hidden lg:block w-1/3 xl:1/2 sticky  z-50 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
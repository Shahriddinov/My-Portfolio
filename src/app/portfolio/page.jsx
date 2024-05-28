"use client"
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioItems = [
    {
        id: 1,
        title: "React.js Medium Blog",
        img: "/vatandosh.png",
        desc: "This project is designed to help our compatriots abroad to learn Uzbek traditions and the Uzbek language and to help our compatriots who are helpless to find a job.",
        link: "https://vatandoshlarfondi.uz/",
        color: "from-red-300 to-blue-300",
    },
    {
        id: 2,
        title: "React.js ",
        img: "/mgareklama.png",
        desc: "This MgaReklama site is a project belonging to a company that produces advertising banners in Turkey, and it allows you to familiarize yourself with its work by reviewing its services.",
        link: "http://mgareklama.com/",
        color: "from-blue-300 to-violet-300",
    },
    {
        id: 3,
        title: "React.js and TypeScript ",
        img: "/shaffofYul.png",
        desc: "This project of ours provides information about all the roads in the country, that is, the roads that are being repaired or need to be repaired.",
        link: "https://shaffofyul.uz/oz",
        color: "from-purple-300 to-red-300",
    },
    {
        id: 4,
        title: "React.js",
        img: "/Inst.png",
        desc: "This is the official website of Tashkent State Technical University named after Islam Karimov. You can get information about the university here",
        link: "https://tdtu.uz/",
        color: "from-blue-300 to violet-300",
    },
    {
        id: 5,
        title: "React.js",
        img: "/map.png",
        desc: "This is to give a brief information about our project Cartography Center",
        link: "https://mapmarkaz.uz/",
        color: "from-blue-300 to violet-300",
    }
]

const PortfolioPage = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {PortfolioItems.map((item, index) => (
                            <div key={item.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                                <div className="">
                                    <h1 className="text-xl tfont-bold md:text-4xl lg:text-6xl xl:text-6xl mb-4">{item.title}</h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img}  alt={item.title} fill />
                                    </div>
                                    <p className="w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px] mt-4">{item.desc}</p>
                                    <Link href={item.link} className=" flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-6xl mt-4">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{rotate: 360}}
                        transition={{duration:8, ease:"linear", repeat:Infinity}}
                        viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px]">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">Front-end Developer and Teacher </textPath>
                        </text>
                    </motion.svg>
                    <Link href="/contact"
                          className="w-16 h-16 md:w-28 md:h-20 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire
                        Me</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;

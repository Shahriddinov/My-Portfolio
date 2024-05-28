"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/navLink";
import {motion} from "framer-motion"

const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},
]

function Navbar(props) {
    const [open, setOpen] = useState(false);
    const topVariants = {
        close: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        }
    };
    const centerVariants = {
        close: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    };
    const bottomVariants = {
        close: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        }
    };

    const listVariants = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            }
        }
    }
    const listItemVariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        }
    }
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="/"
                      className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Murod</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">.dev</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/Shahriddinov">
                    <Image src="/github.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://t.me/murod2909">
                    <Image src="/telegram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.instagram.com/murod.2909">
                    <Image src="/instagram.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="#">
                    <Image src="/facebook.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.pinterest.com/mshahriddinov/">
                    <Image src="/pinterest.png" alt="" width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/murod-shahriddinov/">
                    <Image src="/linkedin.png" alt="" width={24} height={24}/>
                </Link>
            </div>
            <div className="md:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
                        onClick={() => setOpen((prev) => !prev)}>
                    <motion.div
                        animate={open ? "opened" : "closed"}
                        variants={topVariants}
                        className="w-10 h-1 rounded bg-black origin-left">
                    </motion.div>
                    <motion.div
                        animate={open ? "opened" : "closed"}
                        variants={centerVariants}
                        className="w-10 h-1 rounded bg-black">
                    </motion.div>
                    <motion.div
                        animate={open ? "opened" : "closed"}
                        variants={bottomVariants}
                        className="w-10 h-1 rounded bg-black origin-left">
                    </motion.div>
                </button>
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                        {links.map(link => (
                            <motion.div
                                variants={listItemVariants}
                                className="" key={link.title}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

        </div>
    );
}

export default Navbar;
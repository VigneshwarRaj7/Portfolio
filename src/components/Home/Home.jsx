import heroImg from "../../assets/animatedPixel8.jpg"
import linkedinLight from "../../assets/linkedinColorLight.svg"
import githubLight from "../../assets/github-icon-1024x1024-lu6cduio.png"
import cv from "../../assets/Vignesh Raj.pdf"
import plus from "../../assets/plus.png"
import gmail from "../../assets/gmail.svg"
import discord from "../../assets/discordLight.svg"
import { motion } from "motion/react"
import { useState } from "react"
import { Menu, X } from "lucide-react";
import vr from "../../assets/vr.jpg"
import { Link } from "react-router-dom"

import { HashLink } from "react-router-hash-link";

import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

const Home = ()=>{
    

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenuBar = () => {
      setIsOpen(!isOpen);
    };


    return(

        
        <div>
    <section id="home">
       <motion.div className=" my-2 mx-20 flex   border-8  font-techno rounded-3xl border-orange-400 mb-16"
       initial={{y:-2050}}
       animate={{y:0}}
       transition={{delay:0.2,duration:1,type:'spring'}}
       >
            <img src={plus}  className="w-10/12 mt-20 -z-10 "></img>
       
            <div className="my-4  flex flex-col mx-36   font-techno w-f">
                <img src={heroImg} className="w-80 h-80 -ml-44 rounded-full" ></img>
                <div className=" -ml-52">
                <h1 className='text-5xl font-bold mt-4 mb-2'>
                Vignesh Raj
                </h1>
                </div>
                <h1 className='text-3xl font-semibold mb-2 -ml-[197px] '>Software Engineer</h1>
                <p className="text-xl -ml-32 text-center -ml-[450px]  ">
                    A passionate software Developer with nearly 2.5 years of professional experience in <span className="font-bold">ReactJS</span>, TypeScript, Javascript, Tailwind and other web development technologies.
                </p>  
                <a href={cv} download> 
                 <motion.button id="btn-mini" className="mt-4 -ml-[78px] text-2xl font-techno "
                  initial={{y:-2050}}
                  animate={{y:0}}
                  transition={{delay:0.4,duration:1,type:'spring'}}
                 >Resume</motion.button>
                </a> 
            </div>

        <div className=" flex flex-col  ">
                <motion.img src={gmail} className="min-w-16 h-16 mt-48 -ml-48  rounded-full  " id="btn-mini" 
                initial={{y:-2050}}
                animate={{y:0}}
                transition={{delay:0.5,duration:1,type:'spring'}}
                ></motion.img>
                <motion.img src={githubLight} className="min-w-16 h-16 mt-4 -ml-[267px]  rounded-full "  id="btn-mini"
                 initial={{y:-2050}}
                 animate={{y:0}}
                 transition={{delay:0.6,duration:1,type:'spring'}}
                ></motion.img>
                <motion.img src={linkedinLight} className="min-w-16 h-16  -mt-[60px] -ml-[115px] rounded-full  " id="btn-mini" 
                 initial={{y:-2050}}
                 animate={{y:0}}
                 transition={{delay:0.7,duration:1,type:'spring'}}
                ></motion.img>
                <motion.img src={discord} className="min-w-16 h-16  mt-[12px]  -ml-[190px] rounded-full  " id="btn-mini" 
                 initial={{y:-2050}}
                 animate={{y:0}}
                 transition={{delay:0.8,duration:1,type:'spring'}}
                ></motion.img>
            
        </div>
       </motion.div>
       </section>   
            <AboutMe id="aboutMe" ></AboutMe>
            <Projects  ></Projects>
            <Experience></Experience>
       </div>
    )
}
export default Home; 

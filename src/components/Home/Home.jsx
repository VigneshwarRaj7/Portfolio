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
import { Typewriter } from "react-simple-typewriter"

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

        
       <section id="home">
       <motion.div className="  mt-12  lg:mx-20 flex flex-row  justify-between z-20 lg:border-8 font-techno rounded-3xl border-orange-400 mb-16  "
       initial={{y:-2050}}
       animate={{y:0}}
       transition={{delay:0.3,duration:1,type:'spring'}}
       >
        
      <div className=" hidden md:block items-center mt-40 w-1/3">
           <motion.img src={plus} className="hidden md:block z-10 w-8/12 ml-8 border-0  2xl:w-80 " 
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:0.3,duration:0.1,type:'spring'}}
           ></motion.img>
       </div>
       <div className=" my-6 flex flex-col  text-center items-start   w-full lg:w-1/3 px-4">
       {/* md:w-80 h-80 -ml-44 rounded-full */}
           <motion.img src={heroImg} className=" mx-auto rounded-full md:-ml-44   " 
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:0.7,duration:1,type:'spring'}}
           ></motion.img>
         
           <motion.h1 className='-ml-52 text-5xl font-bold mt-4 mb-2'
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:0.8,duration:1,type:'spring'}}
           >
             <Typewriter
                     words={[
                     ' Vignesh Raj'
                     ]}
                     
                     cursorStyle="|"
                     typeSpeed={450}
                     deleteSpeed={0}
                     delaySpeed={1}
                    
                   />
           
           </motion.h1>
           
           <motion.h1 className='text-3xl font-semibold mb-2 -ml-[197px] '
             initial={{y:-2050}}
             animate={{y:0}}
             transition={{delay:0.8,duration:1,type:'spring'}}
           > <Typewriter
           words={[
           ' Software Engineer'
           ]}
           
           cursorStyle="|"
           typeSpeed={250}
           deleteSpeed={0}
           delaySpeed={1}
          
         /></motion.h1>
           <motion.p className="text-xl -ml-32 text-center -ml-[450px]  "
             initial={{y:-2050}}
             animate={{y:0}}
             transition={{delay:0,duration:1,type:'spring'}}
           >
            
             <Typewriter
                     words={[
                     'A passionate software Developer with nearly 2.5 years of professional experience in ReactJS, TypeScript, Javascript, Tailwind and other web development technologies.'
                     ]}
                     cursor
                     cursorStyle="|"
                     typeSpeed={50}
                     deleteSpeed={0}
                     delaySpeed={1}
                    
                   />
           
           
           </motion.p>  
           <a href={cv} download> 
            <motion.button id="btn-mini" className="mt-4 -ml-[78px] text-2xl font-techno "
             initial={{y:-2050}}
             animate={{y:0}}
             transition={{delay:0.9,duration:1,type:'spring'}}
            >Resume</motion.button>
           </a> 
       </div>
       
       <div className=" flex flex-col  ">
           <motion.img src={gmail} className="min-w-16 h-16 mt-48 -ml-48  rounded-full  " id="btn-mini" 
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:1.0,duration:1,type:'spring'}}
           ></motion.img>
           <motion.img src={githubLight} className="min-w-16 h-16 mt-4 -ml-[267px]  rounded-full "  id="btn-mini"
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:1.1,duration:1,type:'spring'}}
           ></motion.img>
           <motion.img src={linkedinLight} className="min-w-16 h-16  -mt-[60px] -ml-[115px] rounded-full  " id="btn-mini" 
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:1.2,duration:1,type:'spring'}}
           ></motion.img>
           <motion.img src={discord} className="min-w-16 h-16  mt-[12px]  -ml-[190px] rounded-full  " id="btn-mini" 
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:1.3,duration:1,type:'spring'}}
           ></motion.img>
       
       </div> 
       

       </motion.div>

       
       </section>   
     
    )
}
export default Home; 






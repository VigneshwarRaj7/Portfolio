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
       <motion.div className="  mt-12 2xl:mt-28 lg:mx-20 md:flex md:flex-row  justify-between z-20 lg:border-8 font-techno rounded-3xl border-orange-400  "
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
       <div className=" md:my-6 flex flex-col  text-center items-start   w-full lg:w-1/3 px-4">
       {/* md:w-80 h-80 -ml-44 rounded-full */}
           
        
           <motion.img src={heroImg} className=" mx-auto w-56 md:w-[320px] rounded-full md:-ml-44   " 
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:0.7,duration:1,type:'spring'}}
           ></motion.img>
       
           
         
           <motion.h1 className='text-4xl ml-auto mr-auto md:-ml-52 md:text-5xl font-bold mt-4 mb-2'
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
           
           <motion.h1 className='mx-auto ml-auto text-2xl md:text-3xl font-semibold mb-2 md:-ml-[197px] '
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
           <motion.p className=" justify-center md:text-xl  text-center md:-ml-[450px]  "
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
        
           {/* <a href={cv} target="_blank" > 
            <motion.button id="btn-mini" className="ml-[78%]  mt-6 md:-ml-[78px] text-3xl font-techno transition-transform transform hover:scale-110"
             initial={{y:-2050}}
             animate={{y:0}}
             transition={{delay:0.9,duration:1,type:'spring'}}
            >Resume</motion.button>
           </a>  */}
            <a href={cv} target="_blank">
  <motion.button
    id="btn-mini"
    className="ml-[78%] mt-6 md:-ml-[78px] text-3xl font-techno transform transition-transform duration-300 hover:scale-110"
    initial={{ y: -2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 0.9, duration: 1, type: 'spring' }}
    whileHover={{ scale: 1.1 }} // Motion hover effect
  >
    Resume
  </motion.button>
</a> 

         
       </div>
       
  
       <div className="flex mt-8 gap-6 justify-center  md:flex md:flex-col">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vigneshrajr@outlook.com" 
   target="_blank" 
   rel="noopener noreferrer"><motion.img src={gmail} className="w-16 h-16 md:min-w-16 md:h-16 md:-ml-48 rounded-full md:-mt-[80px] " id="btn-mini"
      initial={{ y: -2050 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.0, duration: 1, type: 'spring' }}
    /></a>
    <a href="https://github.com/VigneshwarRaj7" target="_blank">
    <motion.img src={githubLight} className="w-16 h-16 md:min-w-16 md:h-16 md:-mt-3 md:-ml-[275px] rounded-full" id="btn-mini"
      initial={{ y: -2050 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.1, duration: 1, type: 'spring' }}
    />
    </a>
    <a href="https://www.linkedin.com/in/vigneshwar-raj-rajagopalan-ba9511163/" target="_blank">
    <motion.img src={linkedinLight} className="w-16 h-16 md:min-w-16 md:h-16 md:-mt-[135px] md:-ml-[110px] rounded-full" id="btn-mini"
      initial={{ y: -2050 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.2, duration: 1, type: 'spring' }}
    />
    </a>
    <a className="" href='https://discord.gg/yZepKt29' target="_blank">
    <motion.img src={discord} className="w-16 h-16 md:min-w-16 md:h-16 md:-mt-12  md:-ml-[190px]   rounded-full" id="btn-mini"
      initial={{ y: -2050 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.3, duration: 1, type: 'spring' }}
    />
    </a>
  </div>




       </motion.div>

       
       </section>   
     
    )
}
export default Home; 




{/* <div className=" md:flex md:flex-col  ">
           <motion.img src={gmail} className="   min-w-16 md:h-16 md:mt-48 -ml-48  rounded-full  " id="btn-mini" 
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
       
       </div>  */}

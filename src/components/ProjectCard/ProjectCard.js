import React, { useState } from 'react'
import { motion } from 'motion/react'

import { Typewriter } from 'react-simple-typewriter';


import footballPlayerSalary from '../../assets/Projects/FootballPlayerSalary.jpg';
import musicMental from '../../assets/Projects/musicMental.jpg';
import pythonSvg from "../../assets/python-svg.svg";
import swiggy from '../../assets/Projects/Swiggy.jpg';
import reactSvg from '../../assets/reactSVG.svg';
import covid from '../../assets/Projects/covid.jpg';
import ors from '../../assets/ors.jpg';
import snap from '../../assets/Projects/snap.jpg';

function ProjectCard(props) {

   
     let data = props.data;
  return (
    <motion.div class="   w-11/12 md:max-w-7xl mx-auto bg-white border border-gray-200 rounded-3xl md:rounded-full shadow-2xl 
    dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row items-center  md:w-11/12
    md:p-6 mb-10"  
          initial={{ opacity: 0, translateX:"-2050" }}
                      whileInView={{ opacity: 1, translateX:"0"}}
                      transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                      viewport={{ once: true, amount: 0.2 }} 
   >
   
           <motion.div 
              //  initial={{x:4050}}
              //  animate={{x:0}}
              //  transition={{delay:0.5,duration:1,type:'spring'}}
              initial={{ opacity: 0, translateX:"-50%" }}
                      whileInView={{ opacity: 1, translateX:"0"}}
                      transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                      viewport={{ once: true, amount: 0.2 }} 

           >
           <img class="px-3 mt-3 rounded-3xl md:rounded-full md:max-w-[100%]  md:min-w-[576px] md:max-h-[384px] md:my-[20px]  md:ml-[36px]" src={data[0]}  />
           </motion.div>   
              <div className="mt-[10px] px-4 md:ml-6" >
          
                   <h5 class="md:mb-2  md:mr-28 text-lg md:text-2xl font-bold  text-gray-900 dark:text-white font-techno md:text-center ">{data[1]}</h5>
              

               <div className="flex md:mb-2">
                   <p class=" md:mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                   <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno md:mr-4"> 
                   <Typewriter
            words={[
                data[2]
            ]}
            
            cursorStyle="|"
            typeSpeed={10}
            deleteSpeed={0}
            delaySpeed={1000}

                    />
                       </p>
               </div>
               <div className="flex mb-2 ">
                   <p class=" md:mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                   <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">
                  {  <Typewriter
 words={[
   data[3]
 ]}
 cursor
 cursorStyle="|"
 typeSpeed={50}
 deleteSpeed={0}
 delaySpeed={1000}
/>}
                         
                         </p>
                   
               </div>
               <div className="md:mb-2 ml-5 flex items-center">
               <img src={data[4]} className="w-24 "></img>
               <button id="btn" className="md:-mt-1 ml-4 font-techno min-h-[38px] max-h-[38px]">
               Github Link
               </button>
               </div>
               </div>
       
      
   </motion.div>
  )
}

export default ProjectCard
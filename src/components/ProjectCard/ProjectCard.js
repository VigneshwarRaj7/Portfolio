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
    <motion.div class="  w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-full shadow-2xl 
    dark:bg-gray-800 dark:border-gray-700 flex flex-col sm:flex-row items-center w-11/12
    p-6 mb-10"
          initial={{x:-2050}}
          animate={{x:0}}
          transition={{delay:0.3,duration:1,type:'spring'}}
   >
   
           <motion.div 
               initial={{x:4050}}
               animate={{x:0}}
               transition={{delay:0.5,duration:1,type:'spring'}}
           >
           <img class=" rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] my-[20px]  ml-[36px]" src={data[0]}  />
           </motion.div>   
              <div className="mt-[10px] ml-6" >
              <a href="#">
                   <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center ">{data[1]}</h5>
               </a>

               <div className="flex mb-2">
                   <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                   <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno mr-4"> 
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
                   <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
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
               <div className="mb-2 ml-5 flex items-center">
               <img src={data[4]} className="w-24 "></img>
               <button id="btn" className="-mt-1 ml-4 font-techno min-h-[38px] max-h-[38px]">
               Github Link
               </button>
               </div>
               </div>
       
      
   </motion.div>
  )
}

export default ProjectCard
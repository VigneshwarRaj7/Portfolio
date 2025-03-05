import React from 'react'
import { motion } from 'motion/react';

import js from '../../assets/skills/js.png';
import java from '../../assets/skills/java.png';
import jest from '../../assets/skills/jest.png';
import node from '../../assets/skills/nodejs.png';
import postman from '../../assets/skills/postman.svg';
import react from '../../assets/skills/react.png';
import python from '../../assets/skills/python.png';
import sql from '../../assets/skills/sql.webp';
import tailiwind from '../../assets/skills/tailiwind CSS.png';
import Cypress from '../../assets/skills/Cypress.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/github-light.svg';
import { Typewriter } from 'react-simple-typewriter';

function Experience() {
  return (
    <div>
          <h1 className="font-techno md:mt-8 mb-1 text-center text-4xl md:text-5xl font-extrabold"    
                              >
                                <Typewriter
                              words={[
                              'Experience'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={200}
                              deleteSpeed={0}
                              delaySpeed={10}
                              /></h1>


          {/* <div class="flex  justify-center   ">
              <div class="grid grid-cols-4 md:gap-y-10 border-2 border-black min-w-[900px] pl-24 mt-4 mb-6">
                  <div>
                  <img src={js} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={react} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={java} className='w-28 mt-12' ></img> 
                  </div>

                  <div>
                  <img src={python} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={node} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={postman} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={git} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={jest} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={sql} className='w-28 mt-12' ></img>
                  </div>
                    
                  <div>
                  <img src={tailiwind} className='w-28 mt-12' ></img>
                  </div> 

                  <div>
                  <img src={Cypress} className='w-28 mt-12' ></img>
                  </div>

                  <div>
                  <img src={git} className='w-28 mt-12' ></img>
                  </div>
              </div>
</div>                     */}
          <div class="flex justify-center">
  <motion.div class="m-2 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-y-10 border-2 border-black px-4 sm:px-12 py-6 mt-4 mb-6"
  initial={{ opacity: 0, translateX:"-50%" }}
  whileInView={{ opacity: 1, translateX:"0"}}
  transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
  viewport={{ once: true, amount: 0.2 }} 
  >
    <motion.div
       initial={{ y: -2050 }}
       animate={{ y: 0 }}
       transition={{ delay: 1.3, duration: 1, type: 'spring' }}
    ><img src={js} className='w-20 sm:ml-3 md:mx-8  sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: -2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.4, duration: 1, type: 'spring' }}
    ><img src={react} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: -2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.5, duration: 1, type: 'spring' }}
    ><img src={java} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: -2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.6, duration: 1, type: 'spring' }}
    ><img src={python} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ x: -2050 }}
    animate={{ x: 0 }}
    transition={{ delay: 1.7, duration: 1, type: 'spring' }}
    ><img src={node} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ x: -2050 }}
    animate={{ x: 0 }}
    transition={{ delay: 1.0, duration: 1, type: 'spring' }}
    ><img src={postman} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ x: 2050 }}
    animate={{ x: 0 }}
    transition={{ delay: 1.1, duration: 1, type: 'spring' }}
    ><img src={git} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ x: 2050 }}
    animate={{ x: 0 }}
    transition={{ delay: 1.8, duration: 1, type: 'spring' }}
    ><img src={jest} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: 2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 1.9, duration: 1, type: 'spring' }}
    ><img src={sql} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: 2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 2.0, duration: 1, type: 'spring' }}
    ><img src={tailiwind} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: 2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 2.1, duration: 1, type: 'spring' }}
    ><img src={Cypress} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
    <motion.div
    initial={{ y: 2050 }}
    animate={{ y: 0 }}
    transition={{ delay: 2.2, duration: 1, type: 'spring' }}
    ><img src={github} className='w-20 sm:ml-3 md:mx-8   sm:w-28 mt-4 sm:mt-12' /></motion.div>
  </motion.div>
</div>
<h6 className='mt-4 mx-2 md:ml-28 md:mr-28 font-techno md:text-2xl '>
<Typewriter
                              words={[
                              'Above are the technologies i have worked with.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />
                
          </h6> 
          <div className='mt-4 mx-2 md:ml-28 md:mr-28 font-techno md:text-xl'>
          <p class=""> 
          <Typewriter
                              words={[
                              'I worked as a Software Engineer for Tata Consultancy Services for around 2.5 years. I mainly used ReactJS framework and Python  and was involved in maintaining and transforming a legacy project.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={10}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />
                
          </p>
      
          {/* <div className='flex  mb-1'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            <Typewriter
                              words={[
                              'Developed UIs using React JS and Redux Toolkit and built component-based architecture.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />                
            </p>
          </div>
          <div className='flex  mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            <Typewriter
                              words={[
                              'Integrated REST APIs with front-end components in collaboration with the backend team.    '
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
                     
            </p>
          </div>
          <div className='flex  mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            <Typewriter
                              words={[
                              'Automated unit & integration testing using Jest and Cypress, ensuring high test coverage.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
            
            </p>
          </div>
          <div className='flex  mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            <Typewriter
                              words={[
                              'Enhanced UX with aesthetic UI components using HTML and Tailwind CSS.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
       
            </p>
          </div>
          <div className='flex  mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            <Typewriter
                              words={[
                              'Built interactive data visualizations with Highcharts, Apexcharts, and AG Grid. '
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
             
            </p>
          </div>
          <div className='flex  mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            <Typewriter
                              words={[
                              ' Implemented authentication using React Context API and JWT tokens from FastAPI.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
           
            </p>
          </div>
          <div className='flex mb-1'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            <Typewriter
                              words={[
                              'Worked with cross-functional teams, stakeholders, and Scrum Masters to meet client requirements.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
            
            </p>
          </div>
          <div className='flex  mb-4'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            <Typewriter
                              words={[
                              'Experienced in Agile, SCRUM, sprint planning, CI/CD pipelines, and Git for deployment.'
                              ]}
                              cursor
                              cursorStyle="."
                              typeSpeed={20}
                              deleteSpeed={0}
                              delaySpeed={10}
                              />  
            </p>
          </div> */}
          </div>

          <div>

          </div>
    </div>
  )
}

export default Experience
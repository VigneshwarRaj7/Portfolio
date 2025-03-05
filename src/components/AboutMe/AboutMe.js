import React from 'react'
import { motion } from 'motion/react';
import Carousel from '../Carousel/Carousel';

import vtv from '../../assets/Art/vtv.PNG'
import oblivion from '../../assets/Art/obvilion.png'
import prsionBreak from '../../assets/Art/prisonBreak.png'
import rose from '../../assets/Art/rose.jpg'
import ladyWatch from '../../assets/Art/LadyWatch.jpg'
import huggies from '../../assets/Art/huggies.jpg'
import collageArt from '../../assets/Art/collageArt.jpg'
import peakyBlinder from '../../assets/Art/peakyBlinders.jpg'
import bts from '../../assets/Art/bts.jpg'

import beachFlying from '../../assets/workout/beachFlying.jpg';
import clapIim from '../../assets/workout/clapIim.jpg';
import flyingIim from '../../assets/workout/flyingIim.jpg';
import running from '../../assets/workout/running.jpg';

import latteArt1 from '../../assets/latte art/latteArt1.jpeg';
import latteArt2 from '../../assets/latte art/latteArt2.jpeg';
import latteArt3 from '../../assets/latte art/latteArt3.jpeg';
import latteArt4 from '../../assets/latte art/latteArt4.jpeg';
import latteArt5 from '../../assets/latte art/latteArt5.jpeg';
import { Typewriter } from 'react-simple-typewriter';
const AboutMe = () => {

  let art = [vtv, oblivion, prsionBreak, rose, ladyWatch, huggies, collageArt, peakyBlinder, bts]; 

  let workout = [clapIim,beachFlying,flyingIim,running];

  let latteArt = [latteArt2, latteArt3, latteArt4, latteArt5, latteArt1,];
  return (
    
        <motion.div  id="aboutMe" className='mb-0 flex flex-col font-techno text-sm md:text-lg mx-3 md:mx-20'>
                    <h1 className="font-techno md:mt-2 mb-2 text-center text-3xl md:text-5xl font-extrabold"    
                    >
                      <Typewriter
                    words={[
                    'ABOUT ME'
                    ]}
                    cursor
                    cursorStyle="."
                    typeSpeed={20}
                    deleteSpeed={0}
                    delaySpeed={10}
                    /></h1>
                    
                        <p className=' text-center font-techno text-sm md:text-lg mx-3 md:mx-20'>
                          <Typewriter
                           words={[
                            ' Other than coding, i like exploring new hobbies every now and then. My Recent addiction is Chess and I just started learning  about it. I am still up for a game though xD.'
                           ]}
                           cursor
                           cursorStyle="|"
                           typeSpeed={20}
                           deleteSpeed={0}
                           delaySpeed={1000}
                          />
                          </p>
                    <a href='https://link.chess.com/play/tntXYp' target='_blank' className='ml-auto mr-auto'><motion.button id="btn-mini" className=" text-base mt-2  md:mt-3 ml-auto mr-auto md:text-2xl font-techno  "
                              initial={{y:-2050}}
                              animate={{y:0}}
                              transition={{delay:0.4,duration:1,type:'spring'}}
                            >play a game with me 
                    </motion.button></a>
                     
                      <p classname='text-center font-techno text-sm md:text-lg mx-3 md:mx-20'>
                       
                    < motion.div className=' p-2 rounded-2xl md:rounded-full  dark:bg-yellow-300  mt-2  md:mb-0 md:text-center'
                          initial={{ opacity: 0, translateX:"-2050" }}
                          whileInView={{ opacity: 1, translateX:"0"}}
                          transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                          viewport={{ once: true, amount: 0.2 }} 
                    >
                    <motion.div className='md:ml-auto md:mx-auto md:px-4'
                    initial={{ opacity: 0, translateX:"-50%" }}
                    whileInView={{ opacity: 1, translateX:"0"}}
                    transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                    viewport={{ once: true, amount: 0.2 }} 
                    > < Carousel data={art}></Carousel></motion.div>     
                           <p className=''>
                           <Typewriter
                                        words={[
                                        ' > I also do some sketching in leisure time and above are some of the sketches.  '
                                        ]}
                                        cursor
                                        cursorStyle=""
                                        typeSpeed={20}
                                        deleteSpeed={0}
                                        delaySpeed={10}
                                        />
                                                <br/>
                          <Typewriter
                                        words={[
                                        '  > I am a professional cricket player and an athlete. '
                                        ]}
                                        cursor
                                        cursorStyle=""
                                        typeSpeed={20}
                                        deleteSpeed={0}
                                        delaySpeed={10}
                                        />
                           </p>
                                              
                                            
                                               
                    </motion.div>

                    <motion.div className='p-2 rounded-2xl md:rounded-full  bg-yellow-300 mt-4  md:text-center'
                     initial={{ opacity: 0, translateX:"-50%" }}
                     whileInView={{ opacity: 1, translateX:"0"}}
                     transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                     viewport={{ once: true, amount: 0.4 }} 
                    >
                    <Carousel data={workout}></Carousel>
                            <Typewriter
                    words={[
                    ' > I practice calisthenics, running and swimming regulary to keep myself fit.  '
                    ]}
                    cursor
                    cursorStyle=""
                    typeSpeed={20}
                    deleteSpeed={0}
                    delaySpeed={10}
                    />                     
                  
                          
                    </motion.div>

                    <motion.div className='p-2 rounded-2xl md:rounded-full  bg-yellow-300     md:text-center '
                    initial={{ opacity: 0, translateX:"-50%" }}
                    whileInView={{ opacity: 1, translateX:"0"}}
                    transition={{delay:0.3,duration:1, type:'tween', stiffness:50}}
                    viewport={{ once: true, amount: 0.2 }} 
                    >
                    <Carousel data={latteArt}></Carousel>
                         <p className='md:mx-36'>
                          <Typewriter
                    words={[
                    '   > Right now, I am working as a part time Barista at Starbucks and I am working on my latte arts as well. '
                    ]}
                    cursor
                    cursorStyle=""
                    typeSpeed={20}
                    deleteSpeed={0}
                    delaySpeed={10}
                    />                
                         </p>  
                          
                    </motion.div>
                      </p>

        </motion.div>
    
  )
}

export default AboutMe; 
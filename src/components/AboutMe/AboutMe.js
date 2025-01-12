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

const AboutMe = () => {

  let art = [vtv, oblivion, prsionBreak, rose, ladyWatch, huggies, collageArt, peakyBlinder, bts]; 

  let workout = [clapIim,beachFlying,flyingIim,running];

  let latteArt = [latteArt2, latteArt3, latteArt4, latteArt5, latteArt1,];
  return (
    <div>
        <motion.div  id="aboutMe" className='mb-0'>
                    <motion.h1 className="font-techno mt- mb-4 text-center text-4xl font-extrabold"
                      initial={{ opacity: 0, translateX:"-100%" }}
                      whileInView={{ opacity: 1, translateX:"0"}}
                      transition={{duration:1, type:'tween', stiffness:50}}
                      
                    >About me</motion.h1>
                    <motion.p className="font-techno text-lg mx-20"
                      initial={{ opacity: 0, translateX:"-100%" }}
                      whileInView={{ opacity: 1, translateX:"0"}}
                      transition={{duration:1, type:'tween', stiffness:50}}
                    > 
                        <p className='text-center'> Other than coding, i like exploring new hobbies every now and then, we could say I am a Jack of all but master of none. 
                        My Recent addiction is Chess and I am trying to learn more about it. I am still an amatuer but I still up for a game xD.</p>
                    <motion.button id="btn-mini" className=" text-2xl font-techno rounded-md ml-[45%]"
                              initial={{y:-2050}}
                              animate={{y:0}}
                              transition={{delay:0.4,duration:1,type:'spring'}}
                            >challenge
                    </motion.button>
                        <br/>
                         > I am a professional cricket and a basketball player. 
                            <br/>
                         > I also do some sketching in leisure time and below are some of the paintings. 
                            <br/>
                          Initially I was forced to pursue sketching and drawing when I was 8 years old but later I started growing intrest towards during my high school 
                          and I wanted to explore digital art as well.
                            <br/>
                        <span className="mx-16 ">Following are few my sketches.</span>
                        <br/>
                        < Carousel data={art}></Carousel>
                        > I practice calisthenics, running and swimming regulary to keep myself fit. I have been doing calisthenics since the first year of my bachelors
                          and it really helps me in playing in different sports as well. 
                          <Carousel data={workout}></Carousel>
                        > Right now, I am working as a part time Barista at Starbucks, Athlone and I am working on getting my latte arts right as well
                          and below are few pictures:
                          <Carousel data={latteArt}></Carousel>

                    </motion.p>
                    
                    <motion.div
                    initial={{ opacity: 0, translateX:"-100%" }}
                    whileInView={{ opacity: 1, translateX:"0"}}
                    transition={{duration:1, type:'tween', stiffness:50}}
                    className=""
                   >
            

                
            </motion.div>

            
        </motion.div>
    </div>
  )
}

export default AboutMe; 
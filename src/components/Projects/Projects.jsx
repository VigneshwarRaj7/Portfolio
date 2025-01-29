import { motion } from "framer-motion";

import footballPlayerSalary from '../../assets/Projects/FootballPlayerSalary.jpg';
import musicMental from '../../assets/Projects/musicMental.jpg';
import pythonSvg from "../../assets/python-svg.svg";
import swiggy from '../../assets/Projects/Swiggy.jpg';
import reactSvg from '../../assets/reactSVG.svg';
import covid from '../../assets/Projects/covid.jpg';
import ors from '../../assets/ors.jpg';
import snap from '../../assets/Projects/snap.jpg';

import { Typewriter } from 'react-simple-typewriter';
import { useState } from "react";





const Projects = ()=>{
    const [secondTyping, setSecondTyping] = useState(false);


    
    return(
        <section id="projects">
        <div className="">
            <h1 className="font-techno mb-10  text-center text-4xl font-extrabold">Projects</h1>
           

            

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
                    <img class=" rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] mt-[64px] ml-[36px]" src={footballPlayerSalary}  />
                    </motion.div>   
                       <div className="mt-[64px] ml-6" >
                       <a href="#">
                            <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center ">Football Player Salary Prediction</h5>
                        </a>

                        <div className="flex mb-2">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno mr-4"> 
                            <Typewriter
          words={[
          'Prepared machine learning models (linear regression and polynomial regression) to find the correlation between different features like matches, wins, goals scored, and etc. This correlation was used to predict the salary of a football player.'
          ]}
          cursor
          cursorStyle="|"
          typeSpeed={10}
          deleteSpeed={0}
          delaySpeed={1000}
          onComplete={() => setSecondTyping(true)}
        />
                                </p>
                        </div>
                        <div className="flex mb-2 ">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">
                           { secondTyping ||  <Typewriter
          words={[
            'This model was built using Python and its libraries ( sklearn, numpy, & matplotlib).'
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
                        <img src={pythonSvg} className="w-24 "></img>
                        <button id="btn" className="-mt-1 ml-4 font-techno min-h-[38px] max-h-[38px]">
                        Github Link
                        </button>
                        </div>
                        </div>
                
               
            </motion.div>

            <motion.div class="mb-10 ml-auto mr-auto max-w-sm bg-white border min-h-[512px]  min-w-[1248px] border-gray-200 rounded-full shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex"
                initial={{ opacity: 0, translateX: -700 }} // Start slightly off-screen
                whileInView={{ opacity: 1, translateX: 0 }} // Animate to visible position
                transition={{ duration: 0.3, type: "tween", stiffness: 50 }}
                viewport={{ once: true, amount: 0.5 }} // Trigger animati
            >
                
                <motion.div
                        initial={{x:4050}}
                        animate={{x:0}}
                        transition={{delay:0.5,duration:1,type:'spring'}}
                >
                <img class="rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] mt-[64px] ml-[36px]" src={snap}  />
                </motion.div>

                <div className="mt-[64px] ml-6 mr-10" >
                <a href="#">
                        <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center">voice assistant for mute people</h5>
                    </a>

                    <div className="flex mb-2">
                        <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                        <p  class=" font-normal text-gray-700 dark:text-gray-400 font-techno">
                        <Typewriter
          words={[
          'Developed an innovative communication system for visually and speech-impaired individuals.Utilized sound patterns (e.g., claps, snaps) for  analyzing frequency ranges and time intervals for efficient recognition. Enabled a user-friendly alternative to traditional voice assistants like Siri and Google Assistant. '
          ]}
          
          cursorStyle="|"
          typeSpeed={10}
          deleteSpeed={0}
          delaySpeed={1000}
          onDone={() => setSecondTyping(true)}
        />
                        </p>
                        {/* <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno"> 
                            Developed an innovative communication system for visually and speech-impaired individuals.
                            Utilized sound patterns (e.g., claps, snaps) for  analyzing frequency ranges and time intervals 
                            for efficient recognition. Enabled a user-friendly alternative to traditional voice assistants 
                            like Siri and Google Assistant. 
                        </p> */}
                    </div>
                    <div className="flex  ">
                        <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                        <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">  The model was built using Python, PyAudio, and Librosa. </p>
                        
                    </div>
                    <div className="mb-2 ml-5 flex items-center">
                        <img src={pythonSvg} className="w-24 "></img>
                        <button id="btn" className="-mt-1 ml-4 font-techno min-h-[38px] max-h-[38px]">
                        Github Link
                    </button>
                    </div>
                    
                    </div>
            
        
            </motion.div>

            <motion.div class=" mb-10 ml-auto mr-auto max-w-sm bg-white border min-h-[512px]  min-w-[1248px] border-gray-200 rounded-full shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex"
                       initial={{ opacity: 0, translateX:"-100%" }}
                       whileInView={{ opacity: 1, translateX:"0"}}
                       transition={{duration:1, type:'tween', stiffness:50}}
            >
            
                 <motion.div
                  initial={{x:4050}}
                  animate={{x:0}}
                  transition={{delay:0.5,duration:1,type:'spring'}}
                  
                 >
                    <img class=" rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] mt-[64px] ml-[36px]" src={musicMental}  />
                </motion.div>
                       <div className="mt-[64px] ml-6 mr-10" >
                       <a href="#">
                            <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center">Music Effect on Mental Health</h5>
                        </a>

                        <div className="flex mb-2">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno"> The data set includes information about the diﬀerent mental illness [anxiety, depression, OCD, & insomnia] of people, their favorite genre [Jazz, R&B, etc.], and their listening time. KNN and decision tree classifier has been performed to find out how different music genre coudl affect the mental health of people.

</p>
                        </div>
                        <div className="flex mb-2 ">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">  This model was built using Python and its libraries ( sklearn, numpy, & matplotlib).</p>
                            
                        </div>
                        <div className="mb-2 ml-2 flex items-center">
                            <img src={pythonSvg} className="w-24"></img>
                            <button id="btn" className="font-techno ml-6 min-h-[38px] max-h-[38px]">
                            Github Link
                           </button>
                        </div>
                        
                        </div>
                
               
            </motion.div>            

            <div class="mb-10 ml-auto mr-auto max-w-sm bg-white border min-h-[512px]  min-w-[1248px] border-gray-200 rounded-full shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex">
                
                    
                <img class="rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] mt-[64px] ml-[36px]" src={swiggy}  />
                <div className="mt-[64px] ml-6 mr-10" >
                <a href="#">
                        <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center">Swiggy Clone Online food Delivery</h5>
                    </a>

                    <div className="flex mb-2">
                        <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                        <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno"> 
                            I created a clone of one of the most famous online food delivery apps "Swiggy".
                            I used swiggy's live APIs to make the website. I used concepts like lazy loading, props drilling 
                            and made sure to make very minimal API calls to reduce the load. 
                        </p>
                    </div>
                    <div className="flex mb-10 ">
                        <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                        <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">  The webiste was made using ReactJS, Redux, and RestAPIs. </p>
                        
                    </div>
                    <div className="mb-2 ml-5 flex items-center">
                        <img src={reactSvg} className="w-16 "></img>
                        <button id="btn" className="ml-12 font-techno min-h-[38px] max-h-[38px]">
                        Github Link
                    </button>
                    </div>
                    
                    </div>
            
        
            </div>

            <div class=" mb-10 ml-auto mr-auto max-w-sm bg-white border min-h-[512px]  min-w-[1248px] border-gray-200 rounded-full shadow-2xl dark:bg-gray-800 dark:border-gray-700 flex">
            
                 
                    <img class=" rounded-full max-w-[100%] overflow-hidden min-w-[576px] max-h-[384px] mt-[64px] ml-[36px]" src={covid}  />
                       <div className="mt-[64px] ml-6 mr-10" >
                       <a href="#">
                            <h5 class="mb-2 mr-28 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-techno text-center">Covid-19 Rescue System</h5>
                        </a>

                        <div className="flex mb-4">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">
                                 The website provided the Covid-19 patients the nearest hospital that they could reach by analysing the latitude and longitude of the user.
                                 the patients will also be provided with turn by turn navigation guidance along with the pitcure of a map. 
                            </p>
                        </div>
                        <div className="flex mb-6 ">
                            <p class=" mr-2 font-normal text-gray-700 dark:text-gray-400 font-techno"> > </p>
                            <p class=" font-normal text-gray-700 dark:text-gray-400 font-techno">  This website was built using Python and Open Route Services API(for location).</p>
                            
                        </div>
                        <div className="ml-2 flex items-center">
                            <img src={pythonSvg} className="w-32"></img>    
                            <img src={ors} className="w-32"></img>
                        </div>
                        
                        </div>
                
               
            </div>

            

        </div>
        </section>
    )
}
export default Projects;



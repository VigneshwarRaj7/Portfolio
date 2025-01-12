import React from 'react'

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

function Experience() {
  return (
    <div>
          <h1 className="font-techno mt-4 mb-5 text-center text-5xl font-extrabold">Experience</h1>
          <div className='text-lg'>
          <p class="ml-28 mr-28 mb-3 font-normal  font-techno"> 
                I worked as a frontend developer for Tata Consultancy Services for around 2.5 years. I mainly used ReactJS
                framework and was involved in maintaining and transforming a legacy project. It was an internal billing 
                application for the clients. Following were my responsiblities.
          </p>
      
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
                Developed and optimized user interfaces using React JS and Redux Toolkit and built component-based
                architecture, improving application performance and reducing development time by 25%.                    
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            Collaborated closely with the backend team to integrate REST APIs with front-end components.                 
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            Implemented automation testing (unit & integration testing) using Jest and Cypress to achieve high test coverage.              
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            Improved user experience by creating aesthetic UIs components using HTML and Tailwind CSS.
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            Developed interactive data visualizations using Highcharts, Apexcharts, and AG Grid.            
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal  font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            Used ReactContext APIs and integrated with JWT tokens from FastAPI for authentication.
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal   font-techno"> 
            Collaborated with cross-functional teams, Business Stakeholders, and Scrum Master, to meet client’s requirements.
            </p>
          </div>
          <div className='flex ml-28 mr-28 mb-1'>
            <p class=" mr-2 font-normal font-techno"> > </p>
            <p class=" font-normal  font-techno"> 
            Experienced working in Agile development following SCRUM ceremonies, sprint planning, retrospectives, and
            supported CI/CD pipelines and Git for optimized deployment workflows.           
            </p>
          </div>
          </div>

          <div>
          <h6 className='mt-4 ml-28 mr-28 font-techno text-2xl '>
                Following are the technologies i have worked with:
          </h6> 
          <div class="flex  justify-center   ">
              <div class="grid grid-cols-4 gap-y-10 border-2 border-black min-w-[900px] pl-24 mt-4 mb-6">
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
</div>
          </div>
    </div>
  )
}

export default Experience
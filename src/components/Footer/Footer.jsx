import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Footer() {
  return (
    <div className='flex flex-row justify-end mt-3 mx-4 font-techno '>
        <div><p>
        <Typewriter
                     words={[
                     'vigneshrajr@outlook.com'
                     ]}
                     
                     cursorStyle="|"
                     typeSpeed={450}
                     deleteSpeed={0}
                     delaySpeed={1}
                    
                   /></p></div>
        <div><p></p></div>
    </div>
  )
}

export default Footer
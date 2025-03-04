import { useState } from "react";
import { Menu, X } from "lucide-react";
import vr from "../../assets/vr.jpg"
import { motion } from "motion/react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header className="top-0  z-20 m-6 lg:m-6 2xl:m-10 3xl:m-12"
    initial={{y:-2050}}
    animate={{y:0}}
    transition={{delay:0.3,duration:1,type:'spring'}}
    >
      <nav className="flex  justify-between items-center  ">
        {/* Logo or branding section if needed */}
        {/* <div className=""> <img className="w-24 md:w-48 " src={vr}></img> </div> */}

        <div><Link to='/'> <motion.button id="btn"
           initial={{y:-2050}}
           animate={{y:0}}
           transition={{delay:0.4,duration:1,type:'spring'}}
          className="font-techno font-semibold text-xl  lg:ml-20"
          >Home </motion.button>  </Link> </div>
        {/* Desktop Menu */}
        <ul className="hidden   md:flex  xl:mr-11    w-full justify-end space-x-14 font-techno font-semibold text-xl  ">
        

         
          <Link to ='/projects'> <motion.li id="btn"
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:0.4,duration:1,type:'spring'}}
          >projects</motion.li></Link>
          <Link to='/aboutme'><motion.li id="btn"
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:0.5,duration:1,type:'spring'}}
          >About me</motion.li></Link>
          <Link to='/experience'><motion.li id="btn"
            initial={{y:-2050}}
            animate={{y:0}}
            transition={{delay:0.5,duration:1,type:'spring'}}
          >Experience</motion.li></Link>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden mr-5 ">
          <button onClick={toggleMenuBar} >
            {isOpen ? <X size={36}/> : < Menu size={36} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="relative h-auto ">
            <ul className="  z-10 flex flex-col top-[100%]  left-0 w-full items-center space-y-4 py-5 font-techno font-semibold text-lg">
                <Link to='/projects'> <li>projects</li></Link>
                <Link to='/aboutme'><li>About me</li></Link>
                <Link to='experience'><li>Experience</li></Link>
            </ul>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
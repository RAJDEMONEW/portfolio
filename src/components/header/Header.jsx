import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Picremovebg.png'
import HeaderSocial from './HeaderSocials'
import { easeInOut, motion, spring, useScroll } from "framer-motion";


const Header = () => {
  
  
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div className="bar" style={{ scaleX: scrollYProgress }}>
            </motion.div>
            <header>

                <div className="container  header_container"

                >
                    <motion.h5
                    initial={{x:"-30vw"}}
                    whileInView={{x:0}}
                    transition={{ease:easeInOut,duration:1}}
                    >Hello I'm </motion.h5>
                    <motion.h1

                        initial={{ x: "-30vw" }}
                        whileInView={{ x: 0 }}
                        transition={{ type:spring,bounce:0.5, duration: 1 }}
                    >RAJ KUSHWAH</motion.h1>
                    <h5 className="text-light">FullStack Developer </h5>
                    <CTA />
                    <HeaderSocial />
                    <motion.div className="me"
                        

                        initial={{ scale: 0,}}

                        animate={{ scale: 1}}

                        transition={{ duration: 2.5, type: "spring", bounce: .6,stiffness:300 }}>
                        <img src={ME} alt="me"


                        /></motion.div>
                    <a href="#contact" className="scroll_down"> Scroll Down</a>
                </div>
            </header>
        </>
    )
}

export default Header
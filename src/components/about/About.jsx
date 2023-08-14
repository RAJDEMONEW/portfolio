import React from "react";
import './about.css'
import Me from '../../assets/rajpic.jpg'
import { FaAward } from 'react-icons/fa'
import { motion } from "framer-motion";

    
const ABOUT = () => {

 
    return (


        <section id="about">
         
            <motion.h5
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration :2}}
            >Get To Know</motion.h5>
            <motion.h2 initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}>About Me</motion.h2>

            <div  className="container about_container">
                <div className="about_me"  >
                    <motion.div className="about_me-image"



                    initial={{scale:0}}
                    animate={{scale:1,rotate:(10) }}
                    // transition={{duration:1, times: [0,1]}}
                    whileHover={{rotate:(0)}}
                    whileInView={{scale:.9,duration:1}
            
                }
              



                    >
                       
                        <img src={Me} alt="About Image" />
                    </motion.div>
                </div>
                <div className="about_content">
                    < div className="about_cards">
                      
                        <motion.article className="about_card"

                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: .5 }}>
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>Fresher </small>
                        </motion.article>
                        
                      
                        <motion.article className="about_card"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.5 }}>
                            <FaAward className="about_icon" />
                            <h5>Clients</h5>
                            <small>No clients </small>
                        </motion.article>
                        
                      
                        <motion.article className="about_card"
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.5 }}>
                            <FaAward className="about_icon" />
                            <h5>Projects</h5>
                            <small>2 projects </small>
                        </motion.article>
                        
                    </div>
                    <p>A motivated individual with in-depth knowledge of languages and development tools, wants to work as a software engineer in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.</p>
                    <a href="#contact" className="btn btn-primary"> Let's Talk </a>
                </div>


            </div>

        </section>
    )
}
export default ABOUT
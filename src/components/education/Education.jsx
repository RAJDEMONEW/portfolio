import React from "react";
import IMA from '../../assets/high_school_pic.jpeg'
import IMA1 from '../../assets/manit_pic.jpeg'

import './education.css'
import { easeIn, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";


const Education = () => {

    return (


        <section id="education">

            <motion.h5 initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}>Let's See My Educational Background</motion.h5>
            <motion.h2
            initial={{scale:0,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:1}}> Qualifications</motion.h2>
            <div className="educontents"


            //         variants='squareVariants'
            //  initial="hidden"
            //  after="visible"
            >
                <div className="educontent">
                    <motion.div className="eduimg"
                        initial={{ x: "-30vw" ,opacity:0}}
                        whileInView={{ x: 0 ,opacity:1}}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, delay:0,duration: 1
                        }}      >
                        <img src={IMA} alt="" />
                    </motion.div>
                    <motion.div className="edudata"
                        initial={{ x: "20vw" }}
                        whileInView={{ x: 0 }}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, duration: 1
                        }}  
                    >
                        <h3>High School </h3>
                        <h5>School Name: Govt. school of Excellence , Gwalior </h5>
                        <h5>Percentage : 94%</h5>
                    </motion.div>
                </div>
                <div className="educontent">
                    <motion.div className="eduimg" initial={{ x: "-30vw" }}
                        whileInView={{ x: 0 }}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, duration: 1,delay: 0
                        }}    >
                        <img src={IMA} alt="" />
                    </motion.div>
                    <motion.div className="edudata"
                        initial={{ x: "20vw" }}
                        whileInView={{ x: 0 }}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, duration: 1
                        }}  >
                        <h3>High School </h3>
                        <h5>School Name: Govt. school of Excellence , Gwalior </h5>
                        <h5>Percentage : 94%</h5>
                    </motion.div>
                </div>
                <div className="educontent">
                    <motion.div className="eduimg" initial={{ x: "-30vw" }}
                        whileInView={{ x: 0 }}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, delay: 0, duration: 1
                        }}    >
                        <img src={IMA1} alt="" />
                    </motion.div>
                    <motion.div className="edudata" initial={{ x: "20vw" }}
                        whileInView={{ x: 0 }}
                        transition={{
                            type: "spring", bounce: 0.9, stiffness: 200, duration: 1
                        }}  >
                        <h3>High School </h3>
                        <h5>School Name: Govt. school of Excellence , Gwalior </h5>
                        <h5>Percentage : 94%</h5>
                    </motion.div>
                </div>

            </div>

        </section>

    )
}
export default Education
import React from "react";
import { BiCheck } from 'react-icons/bi'
import { motion, spring } from "framer-motion";
import './services.css'
const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container service_container">
                <article className="service">
                    <motion.div className="service_head"
                        initial={{ x: -100 }}
                        whileInView={
                            { x: 0 }
                        }
                        transition={{ duration: 1 }}>

                        <motion.h3

                        >Content Creation</motion.h3>
                    </motion.div>

                    <motion.ul className="service_list"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: spring, bounce: 0.3, duration: 1 }}
                    >
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>

                    </motion.ul>
                    </article>
                <article className="service">
                    <motion.div className="service_head"
                        initial={{ x: -100 }}
                        whileInView={
                            { x: 0 }
                        }
                        transition={{ duration: 1 }}>

                        <motion.h3
                           
                        >Content Creation</motion.h3>
                    </motion.div>

                    <motion.ul className="service_list"
                        initial={{scale:0, opacity: 0 }}
                        whileInView={{ scale:1,opacity: 1 }}
                        transition={{type:spring,bounce:0.3,  duration: 1 }}
                    >
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>

                    </motion.ul>
                </article>
                <article className="service">
                    <motion.div className="service_head"
                        initial={{ x: -100 }}
                        whileInView={
                            { x: 0 }
                        }
                        transition={{ duration: 1 }}>

                        <motion.h3

                        >Content Creation</motion.h3>
                    </motion.div>

                    <motion.ul className="service_list"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: spring, bounce: 0.3, duration: 1 }}
                    >
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>    <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorem!</p>
                        </li>

                    </motion.ul>
                    </article>

            </div>


        </section>
    )
}
export default Services
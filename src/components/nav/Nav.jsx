import React from "react";
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineUser } from 'react-icons/ai'
import { motion } from "framer-motion";
import { useState } from "react";
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <motion.a href="#" onClick={() => { setActiveNav('#') }} className={activeNav === '#' ? 'active' : ''}

            ><AiOutlineHome /></motion.a>

            <motion.a href="#about" onClick={() => { setActiveNav('#about') }} className={activeNav === '#about' ? 'active' : ''}
            ><AiOutlineUser /></motion.a>

            <a href="#education" onClick={() => { setActiveNav('#education') }} className={activeNav === '#education' ? 'active' : ''}><RiServiceLine /></a>

            <motion.a href="#experience" onClick={() => { setActiveNav('#experience') }} className={activeNav === '#experience' ? 'active' : ''} ><BiBook /
            ></motion.a>

            <a href="#services" onClick={() => { setActiveNav('#services') }} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>

            <a href="#testimoni" onClick={() => { setActiveNav('#contact') }} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>

        </nav>
    )
}
export default Nav
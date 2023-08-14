import React from "react";

import { BsLinkedin } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

// import {BsLinkedin} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
            <a href="https://youtube.com" target="blank"><GrInstagram /></a>
            <a href="https://intagram.com" target="blank"><BsLinkedin /></a>
        </div>
    )
}
export default HeaderSocials
import React from "react";
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'

import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


 const Testimonial=()=>{ 
    return (
        <section  id="testimoni" className="testimonials">
            <h5>Review From Cliend</h5>
            <h2>Testimonials</h2>
            <Swiper
                modules={[ Pagination]}
                spaceBetween={40 }
                slidesPerView={1}
               
                pagination={{ clickable: true }}
               
            className="container testimonials_container">
                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR1} alt="" />
                        </div> 
                          <h5 className="client_name">Harmoine Ranger</h5>
                        <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quos modi, fugit optio repellat magnam explicabo incidunt distinctio non rerum? Lorem ipsum dolor sit amet.</small>
                 
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR2} alt="" />
                    </div>   <h5 className="client_name">Harmoine Ranger</h5>
                    <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quos modi, fugit optio repellat magnam explicabo incidunt distinctio non rerum? Lorem ipsum dolor sit amet.</small>

                </SwiperSlide> <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR3} alt="" />
                    </div>   <h5 className="client_name">Harmoine Ranger</h5>
                    <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quos modi, fugit optio repellat magnam explicabo incidunt distinctio non rerum? Lorem ipsum dolor sit amet.</small>

                </SwiperSlide> <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={AVTR4} alt="" />
                    </div>   <h5 className="client_name">Harmoine Ranger</h5>
                    <small className="client_review">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quos modi, fugit optio repellat magnam explicabo incidunt distinctio non rerum? Lorem ipsum dolor sit amet.</small>

                </SwiperSlide>
            </Swiper>
        </section>
    )
 }
 export default Testimonial
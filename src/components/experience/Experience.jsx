import React from "react";
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'
import { useRef } from "react";
import { motion } from "framer-motion";
const Experi = () => {
    const constraintsRef1 = useRef(null);

    const constraintsRef11 = useRef(null);
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience </h2>
            <div className="container experience_container">

                <motion.div className="experience_frontend"
                    initial={{ x: "-30vw" }}
                    whileInView={{ x: 0, rotateY: 360 }}>
                    <h3>Frontend Development</h3>
                    <motion.div className="experience_content" ref={constraintsRef1}>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef1}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef1}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef1}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef1}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>BOOTSTRAP</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef1}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>REACT</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                    </motion.div>

                </motion.div>
                <motion.div className="experience_backend"
                initial={{x:"-30vw"}}
                whileInView={{x:0,rotateY:360}}>
                    <h3>Backend Development</h3>
                    <motion.div className="experience_content" ref={constraintsRef11}>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef11}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>MONGO DB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef11}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>MYSQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef11}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>DBMS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef11}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>EXPRESS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                        <motion.article className="experience_details"
                            drag dragConstraints={constraintsRef11}>
                            < BsPatchCheckFill className="experience_details-icon" /><div>
                                <h4>NODE JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </motion.article>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    )
}
export default Experi
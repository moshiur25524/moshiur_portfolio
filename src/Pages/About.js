import React from 'react';
import profile from '../assets/Resume/Moshiur_Pro_Image.jpg'
import {motion} from 'framer-motion'


const About = () => {
    return (
        <div>
             <section id="about" class="about section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src={profile} alt="" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text">
                        <motion.h2
                        className='fw-bold'
                        initial={{x : -300, scale :0.5}}
                        animate={{x : 0, scale :1}}
                        transition={{duration: 1}}
                        >Moshiur Rahman <br /> <span className='text-secondary'>Web Developer</span></motion.h2>
                        <p>Hi! I am Moshiur Rahman, a junior web developer. As a passionate Developer , I want to see an opening for a Junior Web Developer role. I have experience in HTML, CSS,JavaScript, node.js and React. I am constantly seeking out new technologies and staying up-to-date on trends in the industry. I am dedicated to building easy-to-use, user-friendly websites, and applications</p>
                        <a href="https://drive.google.com/file/d/19g3xOIYZ-E4WQvOos_lKiGWGf2DV2YjN/view?usp=sharing" target="_blank"  rel="noreferrer" class="btn content-download btn-warning fw-bold"> <i class="bi bi-download text-danger fs-5 mx-1"></i> Download My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;
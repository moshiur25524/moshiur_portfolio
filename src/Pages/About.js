import React from 'react'
import profile from '../assets/Resume/Moshiur_Pro_Image.jpg'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <div>
      <section id="about" class="about section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-12">
              <div class="about-img">
                <img src={profile} alt="" class="img-fluid rounded" />
              </div>
            </div>
            <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div class="about-text">
                <motion.h2
                  className="fw-bold"
                  initial={{ x: -300, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Moshiur Rahman <br />{' '}
                  <span className="text-secondary">
                    {' '}
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Web Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'React Developer',
                        1000,
                        'Frontend Developer',
                        1000,
                        'Junior Web Developer',
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '0.8em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </span>
                </motion.h2>
                <p>
                  Hi! I am Moshiur Rahman, a junior web developer. As a
                  passionate Developer , I want to see an opening for a Junior
                  Web Developer role. I have experience in HTML, CSS,JavaScript,
                  node.js, Express.js, Wordpress, PHP, and React. I am constantly seeking out new
                  technologies and staying up-to-date on trends in the industry.
                  I am dedicated to building easy-to-use, user-friendly
                  websites, and applications
                </p>
                <a
                  href="https://drive.google.com/file/d/19g3xOIYZ-E4WQvOos_lKiGWGf2DV2YjN/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  class="btn content-download btn-secondary fw-bold"
                >
                  {' '}
                  <i class="bi bi-download text-white fw-bold fs-5 mx-1"></i>{' '}
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

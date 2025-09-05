import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import php_image from '../Images/php_logo.png'

const Team = () => {
  const scrollRef = useRef(null)
  return (
    <div>
      <section ref={scrollRef} id="skills" class="portfolio section-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2 className="fw-bold">My Skills</h2>
                <p>All the skills I feel comfortable</p>
              </div>
            </div>
          </div>

          <div class="row">
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=740&t=st=1677063813~exp=1677064413~hmac=469b94472fa859bbe1e890c35f29eaba5eb8adb6e857e82ebf2cade51895a2d1"
                    alt=""
                    class="img-fluid rounded-circle w-50"
                  />
                  <h3 class="card-title py-2">HTML</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.1 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/919/919826.png?w=740&t=st=1677065285~exp=1677065885~hmac=04ef65a53fc52d0720d2fdf11a8ebadaa1ee75894affca603fc0e59d9ebc13e5"
                    alt=""
                    class="img-fluid rounded-circle w-50"
                  />
                  <h3 class="card-title py-2">CSS</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.2 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://i.ibb.co/0cps8zD/Ieg-UPpg-400x400.jpg"
                    alt=""
                    class="img-fluid rounded-circle w-50"
                  />
                  <h3 class="card-title py-2">JavaScript</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.2 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img src={php_image} alt="php logo" class="img-fluid" />
                  <h3 class="card-title py-2">PHP</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.3 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://i.ibb.co/zN3fPBG/download.png"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                  <h3 class="card-title py-2">React</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.4 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://i.ibb.co/G7xrK9n/download-1.png"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                  <h3 class="card-title py-2">Node js</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://i.ibb.co/CQtg191/express-logo.png"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                  <h3 class="card-title py-2">Express js</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.6 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://i.ibb.co/0J0zbLG/kuzt9r42or1fxvlq2-Meta-Generic.png"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                  <h3 class="card-title py-2">MongoDb</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2.7 }}
              viewport={{ once: true }}
            >
              <div class="card text-center">
                <div class="card-body">
                  <img
                    src="https://images2.imgbox.com/9f/91/i4WP0nRQ_o.png"
                    alt=""
                    class="img-fluid rounded-circle w-50"
                  />
                  <h3 class="card-title py-2">WordPress</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

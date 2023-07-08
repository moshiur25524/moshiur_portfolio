import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const scrollRef = useRef(null)
  return (
    <div>
      <section
        ref={scrollRef}
        style={{ overflow: 'scroll' }}
        id="portfolio"
        class="portfolio section-padding"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center pb-5">
                <h2 className="fw-bold">My Projects</h2>
                <p className="fs-5">
                  Enjoiy all the places with luxurious car , Keep body fit and
                  read more books
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <motion.div
              class="col-12 col-md-12 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div class="card text-center bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=740&t=st=1677061695~exp=1677062295~hmac=2b9fa483b1ecdeed5a6778677035c4e872a4a31abaa7059982fa6b16a00bc951"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title fw-bold">Body Building</h3>
                  <p class="lead">
                    Body buiding is a react responsive web application. Login
                    and logOut authentication system is added with firease. As
                    Css framwork, Bootstrap is implmented on it.
                  </p>
                  <div>
                    <a
                      class="btn bg-success text-white"
                      target="_blank"
                      href="https://body-building-4bc2b.firebaseapp.com/"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                    <a
                      class="btn bg-warning text-dark ms-2"
                      target="_blank"
                      href="https://github.com/moshiur25524/body_building"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-12 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <div class="card text-center bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://img.freepik.com/free-psd/silver-sedan-car_53876-84522.jpg?w=740&t=st=1677060641~exp=1677061241~hmac=fbd5cd453f1e95902c9a25e8197ba811817025404ccf1df7c800ab50d5f458da"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title fw-bold">Car House</h3>
                  <p class="lead">
                    Body buiding is a react web application. some different
                    kinds of charts are added in the dashboard of the project.
                  </p>
                  <div>
                    <a
                      class="btn bg-success text-white"
                      target="_blank"
                      href="https://gleeful-strudel-be6717.netlify.app/"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                    <a
                      class="btn bg-warning text-dark ms-2"
                      target="_blank"
                      href="https://github.com/moshiur25524/Car_House"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-12 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 4 }}
              viewport={{ once: true }}
            >
              <div class="card text-center bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?w=740&t=st=1677061375~exp=1677061975~hmac=b0377db0c972d6d8d4424db65cdf06d15f4213830136bffb26c2041043167b6e"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title fw-bold">Bookory</h3>
                  <p class="lead">
                    Book shop is a full stack web application. React is
                    implemented as a library of javaScript. Besides, Node.js,
                    Mongodb also implented.
                  </p>
                  <div>
                    <a
                      class="btn bg-success text-white"
                      target="_blank"
                      href="https://bookory-cc089.web.app/"
                      rel="noreferrer"
                    >
                      Live site
                    </a>
                    <a
                      class="btn bg-warning text-dark ms-2"
                      target="_blank"
                      href="https://github.com/moshiur25524/Bookory_Client"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

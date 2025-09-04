import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Modal from './components/Modal'

const Projects = () => {
  const scrollRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Wood Craft',
      description:
        'WoodCraft is a modern eCommerce website showcasing high-quality wooden furniture, built using WordPress, WooCommerce, Elementor, and the Astra theme',
      img_URL: 'https://images2.imgbox.com/e9/d4/D4MvDHtO_o.jpg',
      live_link: 'https://moshiur.great-site.net/',
      github_link: '',
    },
    {
      id: 2,
      title: 'Body Building',
      description:
        'Body buiding is a react responsive web application. Login and logOut authentication system is added with firease. As Css framwork, Bootstrap is implmented on it.',
      img_URL:
        'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=740&t=st=1677061695~exp=1677062295~hmac=2b9fa483b1ecdeed5a6778677035c4e872a4a31abaa7059982fa6b16a00bc951',
      live_link: 'https://body-building-4bc2b.firebaseapp.com/',
      github_link: 'https://github.com/moshiur25524/body_building',
    },
    {
      id: 3,
      title: 'Car House',
      description:
        'Car House is a react web application. some different kinds of charts are added in the dashboard of the project.',
      img_URL:
        'https://img.freepik.com/free-psd/silver-sedan-car_53876-84522.jpg?w=740&t=st=1677060641~exp=1677061241~hmac=fbd5cd453f1e95902c9a25e8197ba811817025404ccf1df7c800ab50d5f458da',
      live_link: 'https://gleeful-strudel-be6717.netlify.app/',
      github_link: 'https://github.com/moshiur25524/Car_House',
    },
  ]

  return (
    <div>
      <section ref={scrollRef} id="portfolio" class="portfolio section-padding">
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
            {projects.map((project) => (
              <motion.div
                key={project.id}
                class="col-12 col-md-6 col-lg-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <div class="card bg-white pb-2">
                  <div class="card-body text-dark">
                    <div class="img-area mb-4">
                      <img src={project.img_URL} class="img-fluid" alt="" />
                    </div>
                    <h3 class="card-title text-center fw-bold">
                      {project.title}
                    </h3>
                    <p class="">{project.description}</p>
                    <div className="text-center">
                      <a
                        class="btn bg-success text-white"
                        target="_blank"
                        href={project.live_link}
                        rel="noreferrer"
                      >
                        Live site
                      </a>

                      {project.github_link && (
                        <a
                          class="btn bg-warning text-dark ms-2"
                          target="_blank"
                          href={project.github_link}
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      )}

                      <button
                        type="button"
                        class="btn btn-primary ms-2"
                        data-toggle="modal"
                        data-target={`#exampleModalCenter${project.id}`}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* <motion.div
              class="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div class="card bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://images2.imgbox.com/e9/d4/D4MvDHtO_o.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title text-center fw-bold">Wood Craft</h3>
                  <p class="">
                    WoodCraft is a modern eCommerce website showcasing
                    high-quality wooden furniture, built using WordPress,
                    WooCommerce, Elementor, and the Astra theme
                  </p>
                  <div className="text-center">
                    <a
                      class="btn bg-success text-white"
                      target="_blank"
                      href="https://moshiur.great-site.net/"
                      rel="noreferrer"
                    >
                      Live site
                    </a>

                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div class="card bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=740&t=st=1677061695~exp=1677062295~hmac=2b9fa483b1ecdeed5a6778677035c4e872a4a31abaa7059982fa6b16a00bc951"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title text-center fw-bold">Body Building</h3>
                  <p class="text-justify">
                    Body buiding is a react responsive web application. Login
                    and logOut authentication system is added with firease. As
                    Css framwork, Bootstrap is implmented on it.
                  </p>
                  <div className="text-center">
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
                    <button
                      type="button"
                      class="btn btn-primary ms-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              class="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <div class="card bg-white pb-2">
                <div class="card-body text-dark">
                  <div class="img-area mb-4">
                    <img
                      src="https://img.freepik.com/free-psd/silver-sedan-car_53876-84522.jpg?w=740&t=st=1677060641~exp=1677061241~hmac=fbd5cd453f1e95902c9a25e8197ba811817025404ccf1df7c800ab50d5f458da"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <h3 class="card-title text-center fw-bold">Car House</h3>
                  <p className="text-justify">
                    Car House is a react web application. some different kinds
                    of charts are added in the dashboard of the project.
                  </p>
                  <div className="text-center">
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
                    <button
                      type="button"
                      class="btn btn-primary ms-2"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Render modals here */}
            {projects.map((project) => (
              <Modal key={project?.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

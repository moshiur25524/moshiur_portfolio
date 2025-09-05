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
        'WoodCraft is a modern and feature-rich eCommerce website that highlights the elegance and quality of wooden furniture. The platform is developed using WordPress as the core CMS, integrated seamlessly with WooCommerce for powerful eCommerce functionalities. To achieve a clean, customizable, and responsive design, the Astra theme has been implemented, while Elementor serves as the page builder, making content management efficient and visually appealing. WoodCraft provides a smooth shopping experience with an intuitive navigation structure, product categories, and secure checkout process. The website is optimized for speed and mobile responsiveness, ensuring that customers can easily browse and purchase products from any device. Its design emphasizes simplicity and functionality, while also highlighting the craftsmanship behind every furniture item, making it a complete eCommerce solutio',
      img_URL: 'https://images2.imgbox.com/e9/d4/D4MvDHtO_o.jpg',
      live_link: 'https://moshiur.great-site.net/',
      github_link: '',
    },
    {
      id: 2,
      title: 'Body Building',
      description:
        'Body Building is a fully responsive React-based web application designed for fitness enthusiasts to track, learn, and engage with workout routines. The project features a complete login and logout authentication system powered by Firebase, ensuring secure user access and session management. Bootstrap has been implemented as the CSS framework, allowing the app to maintain a clean, modern, and mobile-friendly design across all devices. The platform’s interface is built with user experience in mind, offering easy navigation between different workout plans, progress tracking, and personalized dashboards. Body Building emphasizes both functionality and design, showcasing how React can efficiently handle state management and dynamic content rendering. Its responsive layout, coupled with Firebase authentication, makes it a strong foundation for building more advanced fitness-related features in the future.',
      img_URL:
        'https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5005.jpg?w=740&t=st=1677061695~exp=1677062295~hmac=2b9fa483b1ecdeed5a6778677035c4e872a4a31abaa7059982fa6b16a00bc951',
      live_link: 'https://body-building-4bc2b.firebaseapp.com/',
      github_link: 'https://github.com/moshiur25524/body_building',
    },
    {
      id: 3,
      title: 'Car House',
      description:
        'Car House is an interactive React web application that focuses on delivering a dynamic dashboard experience. The project integrates multiple types of charts to visually represent data, making it useful for analyzing and understanding complex car-related information. These charts provide insights such as sales trends, vehicle performance statistics, and customer preferences. Built with React, Car House ensures efficient rendering and component reusability, keeping the application responsive and scalable. The dashboard is designed with clarity in mind, allowing users to quickly interpret data through graphical representation rather than raw numbers. With modern front-end development practices, the application not only demonstrates technical proficiency in React but also highlights the importance of data visualization in enhancing user decision-making. Car House stands as a practical project showcasing React, chart libraries, and dashboard design.',
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
                    <p class="">
                      {project.description.split(' ').slice(0, 25).join(' ') +
                        ' ...'}
                    </p>
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

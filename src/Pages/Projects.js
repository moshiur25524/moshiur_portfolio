import React from 'react';
import project1 from '../Images/project-1-img/project-1.jpg'
import project2 from '../Images/project-1-img/project-2.jpg'
import project3 from '../Images/project-1-img/project-3.jpg'

const Projects = () => {
    return (
        <div>
            <section id="portfolio" class="portfolio section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Project</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eveniet, cupiditate!</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-center bg-white pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4">
                                        <img src={project1} class="img-fluid" alt="" />
                                    </div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum
                                        esse, possimus repellat tenetur delectus eum. Cupiditate voluptas adipisci dolorum!</p>
                                    <button class="btn bg-warning text-dark">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-center bg-white pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4">
                                        <img src={project2} class="img-fluid" alt="" />
                                    </div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum
                                        esse, possimus repellat tenetur delectus eum. Cupiditate voluptas adipisci dolorum!</p>
                                    <button class="btn bg-warning text-dark">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-4">
                            <div class="card text-center bg-white pb-2">
                                <div class="card-body text-dark">
                                    <div class="img-area mb-4">
                                        <img src={project3} class="img-fluid" alt="" />
                                    </div>
                                    <h3 class="card-title">Building Make</h3>
                                    <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem laborum
                                        esse, possimus repellat tenetur delectus eum. Cupiditate voluptas adipisci dolorum!</p>
                                    <button class="btn bg-warning text-dark">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
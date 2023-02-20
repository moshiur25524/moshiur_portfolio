import React from 'react';
import team1 from '../Images/project-1-img/team-1.jpg'
import team2 from '../Images/project-1-img/team-2.jpg'
import team3 from '../Images/project-1-img/team-3.jpg'
import team4 from '../Images/project-1-img/team-4.jpg'

const Team = () => {
    return (
        <div>
            <section id="team" class="team section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Our Team</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eveniet, cupiditate!</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={team1} alt="" class="img-fluid rounded-circle" />
                                    <h3 class="card-title py-2">Moshiur Rahman</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
                                        itaque!</p>

                                    <p class="socials">
                                        <i class="bi bi-twitter text-dark mx-1"></i>
                                        <i class="bi bi-facebook text-dark mx-1"></i>
                                        <i class="bi bi-linkedin text-dark mx-1"></i>
                                        <i class="bi bi-instagram text-dark mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={team2} alt="" class="img-fluid rounded-circle" />
                                    <h3 class="card-title py-2">Hafizur Rahmna</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
                                        itaque!</p>

                                    <p class="socials">
                                        <i class="bi bi-twitter text-dark mx-1"></i>
                                        <i class="bi bi-facebook text-dark mx-1"></i>
                                        <i class="bi bi-linkedin text-dark mx-1"></i>
                                        <i class="bi bi-instagram text-dark mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={team3} alt="" class="img-fluid rounded-circle" />
                                    <h3 class="card-title py-2">Sayma Rahman</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
                                        itaque!</p>

                                    <p class="socials">
                                        <i class="bi bi-twitter text-dark mx-1"></i>
                                        <i class="bi bi-facebook text-dark mx-1"></i>
                                        <i class="bi bi-linkedin text-dark mx-1"></i>
                                        <i class="bi bi-instagram text-dark mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <img src={team4} alt="" class="img-fluid rounded-circle" />
                                    <h3 class="card-title py-2">Tazrin Akter</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate,
                                        itaque!</p>

                                    <p class="socials">
                                        <i class="bi bi-twitter text-dark mx-1"></i>
                                        <i class="bi bi-facebook text-dark mx-1"></i>
                                        <i class="bi bi-linkedin text-dark mx-1"></i>
                                        <i class="bi bi-instagram text-dark mx-1"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
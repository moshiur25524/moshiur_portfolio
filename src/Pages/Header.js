import React from 'react';
import './CSS/Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#"><img src="../assets/Resume/Moshiur_Logo_2.png" alt="" /> Moshiur Rahman</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Languages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#portfolio">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                          
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
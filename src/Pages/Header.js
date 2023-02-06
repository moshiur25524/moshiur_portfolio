import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-brand" href="#">Moshiur Rahman</a>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#blogs">Blogs</a>
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
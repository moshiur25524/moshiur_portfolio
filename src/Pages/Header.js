import React from 'react'
import './CSS/Header.css'
import { useState } from 'react'

const Header = () => {
  const [activeLink, setActiveLink] = useState('home')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">
              <img src="../assets/Resume/Moshiur_Logo_2.png" alt="" /> Moshiur
              Rahman
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === 'about' ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick('about')}
                  href="#about"
                >
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === 'services' ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick('services')}
                  href="#services"
                >
                  Language
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === 'portfolio' ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick('portfolio')}
                  href="#portfolio"
                >
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === 'skills' ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick('skills')}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === 'contact' ? 'active' : ''
                  }`}
                  onClick={() => handleLinkClick('contact')}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

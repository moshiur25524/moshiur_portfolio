import React from 'react';
import moshiurProfile from '../Images/moshiurProfile.png'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                {/* <img src="Images/project-1-img/home-2.jpg" class="d-block w-100" alt="..."/> */}
                <div class="carousel-caption ">
                    <h5>Always Dedicated</h5>
                    <p>Dedication is the key to get success in Web development.It won't be hard for me to realize that it drives my most of the action. Dedication is an intensity of will power. If I wish to get something, I work hard for it with dedication.</p>
                    <p><a href="#contact" class="btn btn-warning">Contact Me</a></p>
                </div>
            </div>
            <div class="carousel-item">
                {/* <img src="Images/project-1-img/home-1.jpg" class="d-block w-100" alt="..."/> */}
                <div class="carousel-caption">
                    <h5>Constantly Learning and Improving</h5>
                    <p>Staying on top of your game means you never stop learning. Technologies changing very fast and it's common practice now always updated. Though I want to stay on web developer, I have to stay ahead of the path. I need learn new technologies and programming languages</p>
                    <p><a href="#contact" class="btn btn-warning">Contact Me</a></p>
                </div>
            </div>
            <div class="carousel-item">
                {/* <img src="Images/project-1-img/home-3.jpg" class="d-block w-100" alt="..."/> */}
                <div class="carousel-caption">
                    <h5>Communicating well with others</h5>
                    <p>Communication is important in every job, and even more so in web development. To create an outstanding product, we need designers, developers, clients, and customers perfectly aligned in order. That means  communication is important In web development and we should always be treated with priority.</p>
                    <p><a href="#contact" class="btn btn-warning">Contact Me</a></p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    );
};

export default Banner;
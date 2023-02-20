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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis incidunt consectetur
                        odit, reprehenderit at?</p>
                    <p><a href="#" class="btn btn-warning">Learn More</a></p>
                </div>
            </div>
            <div class="carousel-item">
                {/* <img src="Images/project-1-img/home-1.jpg" class="d-block w-100" alt="..."/> */}
                <div class="carousel-caption">
                    <h5>Your Dream House</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis incidunt consectetur
                        odit, reprehenderit at?</p>
                    <p><a href="#" class="btn btn-warning">Learn More</a></p>
                </div>
            </div>
            <div class="carousel-item">
                {/* <img src="Images/project-1-img/home-3.jpg" class="d-block w-100" alt="..."/> */}
                <div class="carousel-caption">
                    <h5>True Construction</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis incidunt consectetur
                        odit, reprehenderit at?</p>
                    <p><a href="#" class="btn btn-warning">Learn More</a></p>
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
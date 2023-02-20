import React from 'react';
import aboutImg from '../Images/project-1-img/about.jpg'

const About = () => {
    return (
        <div>
             <section id="about" class="about section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-12">
                    <div class="about-img">
                        <img src={aboutImg} alt="" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div class="about-text">
                        <h2>We Provide Best Quality <br/> Services Ever</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod adipisci neque quas
                            consectetur, cum aspernatur possimus. Facere, placeat sit fugit necessitatibus esse non,
                            harum voluptatem aliquam enim excepturi ad perspiciatis cupiditate magni? Ex eos enim, ipsum
                            sunt esse adipisci totam voluptas unde eveniet, dolorem autem dignissimos illum, quae ut
                            cum!</p>
                        <a href="#" class="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;
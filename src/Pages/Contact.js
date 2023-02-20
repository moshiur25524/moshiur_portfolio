import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" class="contact section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2>Contact Us</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur <br/> adipisicing elit. Eveniet, cupiditate!</p>
                            </div>
                        </div>
                    </div>

                    <div class="row m-0">
                        <div class="col-md-12 p-0 pt-4 pb-4">
                            <form action="" class="bg-light p-4 m-auto">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input type="text" class="form-control" placeholder="Your Full Name" required />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input type="email" class="form-control" placeholder="Your Email Here" required />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <textarea class="form-control" rows="3" placeholder="Your query Here"
                                                required></textarea>
                                        </div>
                                    </div>
                                    <button class="btn btn-warning btn-lg btn-block mt-3">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
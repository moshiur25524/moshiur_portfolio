import React from 'react';
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const service_id = "service_fd1p744";
const template_id = "template_s18aq6w";
const user_id = "i450Eyy2msOZu4AcZ";

// const service_id = `${process.env.REACT_APP_service_id}`
// const template_id = `${process.env.REACT_APP_template_id}`
// const user_id = `${process.env.REACT_APP_user_id}`

const Contact = () => {
    
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(service_id, template_id, form.current, user_id).then(
            (result) => {
                console.log(result.text);
                
                    toast('Thanks for your message !!!')
            },
            (error) => {
                console.log(error.text);
            }
        );
        event.target.reset();
    };
    return (
        <div>
           
            <section id="contact" class="contact section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-header text-center pb-5">
                                <h2 className='fw-bold'>Contact Me</h2>
                                <p className='fs-2'> Let's make a conversation</p>
                            </div>
                        </div>
                    </div>

                    <div class="row m-0 w-75 mx-auto">
                        <div class="col-md-12 p-0 pt-4 pb-4">
                            <form ref={form} onSubmit={handleSubmit} autoComplete="off" class="bg-light p-4 m-auto">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input type="text" name='from_name' class="form-control" placeholder="Your Full Name" required />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <input type="email" name='to_name' class="form-control" placeholder="Your Email Here" required />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <textarea class="form-control" name='message' rows="3" placeholder="Your query Here"
                                                required></textarea>
                                        </div>
                                    </div>
                                    <button class="btn btn-warning btn-lg btn-block mt-3"> Send Now</button>
                                    <ToastContainer/>
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
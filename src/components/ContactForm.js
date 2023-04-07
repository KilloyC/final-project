import React from 'react';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <div className="container">
        <section className="mb-4">
            <h2 className="h1-responsive contact-header font-weight-bold text-center my-5 display-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form className="contactform">
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <div className="md-form mb-0">
                                    <input type="text" name="name" className="form-control" placeholder='Your Name'/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" name="email" className="form-control" placeholder='Your Email'/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="md-form mb-0">
                                    <input type="text" name="subject" className="form-control" placeholder='Subject'/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" name="message" rows="3" className="form-control" md-textarea placeholder='Your Message'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="text-md-left mt-2">
                            <Button variant='success'>Send</Button>

                        </div>
                    </form>
                </div>
                    <div className="col-md-3 text-center text-success">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p className="text-dark">USA</p></li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p className="text-dark">(272) 467-2853</p></li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p className="text-dark">BrainRattle@.com</p></li>
                        </ul>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default ContactForm;
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_79vmovh", "template_1pb4q4t", form.current, "FwrqJPGdFow1iLlZU")
          .then((result) => {
               console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message was sent successfully'
                })
          }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Message failed to send',
                text: error.text,
              })
          });
          e.target.reset();
      };

  return (
    <Container style={{marginTop: '5em', marginBottom: '7.6em'}}>
        <section>
            <h2 className="h1-responsive contact-header font-weight-bold text-center my-5 display-4">Contact Us</h2>
            <Row>
                <Col className="col-md-9 mb-md-0 mb-5">
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col className="col-md-6 mb-2">
                                <div className="md-form mb-0">
                                    <input type="text" name="user_name" className="form-control" placeholder='Your Name'/>
                                </div>
                            </Col>

                            <Col className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="email" name="user_email" className="form-control" placeholder='Your Email'/>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-md-12 mb-2">
                                <div className="md-form mb-0">
                                    <input type="text" name="subject" className="form-control" placeholder='Subject'/>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="col-md-12">
                                <div className="md-form">
                                    <textarea type="text" name="message" rows="3" className="form-control" placeholder='Your Message'></textarea>
                                </div>
                            </Col>
                        </Row>
                        <div className="text-md-left mt-2">
                            <Button variant='success' type='submit' value="Send">Send</Button>

                        </div>
                    </form>
                </Col>
                    <div className="col-md-3 text-center contact-icons">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                            <p className="text-light">USA</p></li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                            <p className="text-light">(272) 467-2853</p></li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                            <p className="text-light">BrainRattle@.com</p></li>
                        </ul>
                    </div>
            </Row>
        </section>
    </Container>
  )
}

export default ContactForm;
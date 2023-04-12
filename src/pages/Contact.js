import React from 'react';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';


function Contact() {
  return (
    <div className='page-bg'>
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
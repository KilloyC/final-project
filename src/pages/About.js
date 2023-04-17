import React from 'react';
import NavBar from '../components/NavBar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../style/About.css';
import AboutContent from '../components/AboutContent';
import MyCarousel from '../components/MyCarousel';
import Footer from '../components/Footer';

function About() {
  return (
    <div className='page-bg'>
    <NavBar />
    <MyCarousel />
    <AboutContent />
    <Link className='about-link' to='/riddleQuestions'><Button variant='outline-success' className='about-btn mb-3 mt-3' size="lg">
      Riddle Time!</Button> {/* using Link tag to be able to navigate to the riddleQuestions page instead of an 'a' tag. */}
    </Link>
    <Footer />
    </div>
  )
}

export default About
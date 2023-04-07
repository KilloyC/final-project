import React from 'react';
import NavBar from '../components/NavBar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../style/About.css';
import AboutContent from '../components/AboutContent';
import MyCarousel from '../components/MyCarousel';

function About() {
  return (
    <>
    <NavBar />
    <MyCarousel />
    <AboutContent />
    <Link className='about-link' to='/riddleQuestions'><Button variant='success' className='about-btn mb-3 mt-3' size="lg">
      Riddle Time!</Button></Link>
    </>
  )
}

export default About
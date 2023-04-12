import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../style/Home.css';
import Container from 'react-bootstrap/esm/Container';


function Home() {
  return (
    <div className='page-bg'>
    <Container className='home-container'>
      <h1 className='text-color mt-3 font-text1'>WELCOME TO BrainRattle</h1>
      <h5 className='text-color font-text2'>Lets Test Your Knowledge</h5>
      <Link to='/about' className='home-link'><Button variant='outline-success' className='homeBtn'>Click Here to Enter</Button></Link>
    </Container>
    </div>
    
  )
}

export default Home
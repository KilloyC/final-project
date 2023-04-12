import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutContent() {
  return (
    <Container className='mt-5 about-container'>
    <Row>
      <Col xs={12} className='col-1'>
        <h4 className='header-color about-h4 mb-5'>All About BrainRattle</h4>
     
      
    
      
        <p className='p-text'>
        Welcome to BrainRattle!  We're a free riddle quiz website that's forever under construction as we're always adding new riddles to make this site more valuable! However, 
        our plan is to provide free riddle questions that increase in difficulty the more riddles you answer correctly. Do you have an idea for a specialized riddles? Make sure to tell us via our contact form!
        </p>
      
    
      <h4 className='header-color mt-5 mb-3'>Do you Like Riddles?</h4>
    
      
        <p className='p-text'>
        Do you love riddles? Are you interested in making your gray cells work in a crazy manner to find answers that might allude others. 
        Do you like thinking in different ways that will help guide you to the right answer and find that problem solving high? Well here at BrainRattle we hope to challenge that brain of yours, and to help keep that mind sharp.
        </p>
     
    
    <h4 className='header-color mt-5 mb-3'>Fun Riddles for All!</h4>
    
      
        <p className='p-text'>
        Our goal is to provide fun riddles for children, teens, and people of all stripes. There's nothing like a good riddle to get the brain juices flowing. 
        And with our free riddle questions, you can test your knowledge. 
        So whether you're a riddle fanatic or just looking for a fun way to pass the time, we invite you to try our riddles and see how easy you can answer these brain teasers!
        </p>
      </Col>
    </Row>
   
  </Container>
  )
}

export default AboutContent
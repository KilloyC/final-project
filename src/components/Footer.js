import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className='footer-container'>
      <Row>
        <Col>
        <ul className='list-unstyled'>
          <li className='list-inline-item'>
            <a href='https://www.twitter.com' rel='noreferrer noopener' aria-label='link opens in new tab' target='_blank' className='icon-btn white'>
              <i className="fa-brands fa-twitter icons"></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://www.facebook.com' rel='noreferrer noopener' aria-label='link opens in new tab' target='_blank' className='icon-btn white'>
            <i className="fa-brands fa-facebook icons"></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://www.instagram.com' rel='noreferrer noopener' aria-label='link opens in new tab' target='_blank' className='icon-btn white'>
            <i className="fa-brands fa-square-instagram icons" style={{color: "#f2266e"}}></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://www.youtube.com' rel='noreferrer noopener' aria-label='link opens in new tab' target='_blank' className='icon-btn white'>
            <i className="fa-brands fa-youtube icons" style={{color: "#d01406"}}></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='https://www.linkedin.com' rel='noreferrer noopener' aria-label='link opens in new tab' target='_blank' className='icon-btn white'>
            <i className="fa-brands fa-linkedin icons" style={{color: "#3e81f4"}}></i>
            </a>
          </li>
        </ul>
        &copy; {new Date().getFullYear()} BrainRattle LLC. - All Rights Reserved
        </Col>
      </Row>
  </Container>
  )
}

export default Footer;
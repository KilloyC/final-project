import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function MyCarousel() {
  return (
    <Carousel className='car1'>
        <Carousel.Item>
            <img
                className="d-block carousel"
                src={require("../images/car-9.webp")} //have to use require to get images to upload
                style={{filter:'brightness(70%)'}} //adds a dark tint to the image
                alt="Second slide"
            />

            <Carousel.Caption className='genRiddle'>
                <h3>What are Riddles</h3>
                <p>A riddle is generally devised so as to require clever or unexpected thinking for its answer. Riddles may be considered a form of brain teaser, that makes them difficult to guess.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block carousel"
                style={{filter:'brightness(50%)'}}
                src={require("../images/history5.jpg")}
                alt="Third slide"
            />

            <Carousel.Caption className='histRiddle'>
                <h3>History of Riddles</h3>
                <p>
                They are an ancient form of learning and entertainment. The first discovered written riddles are close to 4,000 years old. They were written in Cuneiform, the writing of the ancient Sumerians.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
  </Carousel>
  )
}

export default MyCarousel;
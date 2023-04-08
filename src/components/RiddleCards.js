import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function RiddleCards({questions, getFetch}) {
    const [userAnswer, setUserAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState('');
    const [checkAnswer, setCheckAnswer] = useState(false);
    const [usersMadeAGuess, setUsersMadeAGuess] = useState(false);
    const {answer, riddle} = questions;
        //console.log(answer);
        //console.log(userAnswer);

    const showCorrectAnswer = () => {
        setShowAnswer(answer);
    }

    const handleSubmitClick = () => {
        setUsersMadeAGuess(true);
        if(userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
          setCheckAnswer(true);
        } else {
            setCheckAnswer(false);
        }
        setUserAnswer('');
    }

    const getNewRiddle = () => {
        setUsersMadeAGuess(false);
        getFetch();
        setUserAnswer('');
    }

  return (
    <Container className='riddle-container'>
        <Card className='my-3 riddle-card'>
                <Button variant="outline-primary" style={{color: 'gold', border: 'none'}} onClick={showCorrectAnswer}>Show Correct Answer</Button>
                <Card.Header className='text-center' style={{color: 'azure'}}>{showAnswer}</Card.Header>
            <Card.Body>
                <Card.Title className='text-center' style={{color: 'azure'}}>❓ The Riddle ❓</Card.Title>
                    <Card.Text className='text-center' style={{color: 'azure'}}>
                        {riddle}

                        {checkAnswer && usersMadeAGuess ? (
                            <h3 className='mt-3'>you're right!</h3>
                        ) : !checkAnswer && usersMadeAGuess ? (<h3 className='mt-3'>you're wrong!</h3>) : (<></>)}
                    </Card.Text>
                <Form.Label htmlFor="userAnswer" style={{color: 'azure'}}>Your Answer</Form.Label>
                    <Form.Control
                        type="text"
                        id="userAnswer"
                        placeholder="answer goes here"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <Button variant="success" className='riddle-card-Btn mt-3 mb-1' onClick={handleSubmitClick}>
                        Submit Answer
                    </Button>
                    <Button variant='warning' className='riddle-card-Btn mt-3 mx-1 mb-1' onClick={getNewRiddle}>New Riddle</Button>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default RiddleCards;
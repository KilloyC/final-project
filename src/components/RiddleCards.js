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
    const {answer, riddle} = questions; //deconstructed questions to get the individual data from it.
        //console.log(answer);
        //console.log(userAnswer);

    //when showCorrectAnswer is clicked it will show the user the right answer, updating setShowAnswer with the answer from the riddle api
    const showCorrectAnswer = () => {
        setShowAnswer(answer);
    }

    //function to check to see if a user made a guess and if that guess matches the riddle answer it will update setCheckAnswer to true and display a message or else it will be false and display a different message
    const handleSubmitClick = () => {
        setUsersMadeAGuess(true);
        if(userAnswer.toLocaleLowerCase() === answer.toLocaleLowerCase()) { //this allows users to either use uppercase or lowercase letters in their answer
          setCheckAnswer(true);
        } else {
            setCheckAnswer(false);
        }
        setUserAnswer(''); //reset the input field
    }

    //on click will use getFetch to grab a different riddle, reset the right/wrong answer display, and reset the input field and showCorrectAnswer button
    const getNewRiddle = () => {
        setUsersMadeAGuess(false);
        getFetch();
        setUserAnswer('');
        setShowAnswer('');
    }

  return (
    <Container className='riddle-container'>
        <Card className='my-3 riddle-card'>
                <Button variant="outline-danger" style={{color: 'gold', border: 'none'}} onClick={showCorrectAnswer}>Show Correct Answer</Button>
                <Card.Header className='text-center' style={{color: 'azure'}}>{showAnswer}</Card.Header> {/* using the state variable showAnswer to show the correct answer when the button is clicked */}
            <Card.Body>
                <Card.Title className='text-center' style={{color: 'azure', fontFamily: 'Finger Paint, cursive'}}>❓ The Riddle ❓</Card.Title>
                    <Card.Text className='text-center' style={{color: 'azure'}}>
                        {riddle}
                    </Card.Text>

                        {/* using a ternary to check if a user has made a guess or not and to see if that guess was right or wrong */}
                        {checkAnswer && usersMadeAGuess ? (
                            <h4 className='mt-3 right'>you're right!</h4>
                        ) : !checkAnswer && usersMadeAGuess ? (<h4 className='mt-3 wrong'>you're wrong!</h4>) : (<></>)}
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
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import RiddleCards from '../components/RiddleCards';

function RiddleQuestions() {
  const [questions, setQuestions] = useState([]);
  //console.log(questions);
  const api = "https://riddles-api.vercel.app/random"


  useEffect(() => {
    getFetch()
  }, []);

  const getFetch = () => {
    fetch(api)
      .then((data) => data.json()
      .then((data) => setQuestions(data))
      )
  }

  return (
    <>
    <NavBar />
    <h1 className='riddle-header text-center mb-5 mt-3'>May The Odds Be Ever In Your Favor!</h1>
    <RiddleCards questions={questions} getFetch={getFetch} />
    </>
  )
}

export default RiddleQuestions;
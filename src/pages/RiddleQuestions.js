import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import RiddleCards from '../components/RiddleCards';
import ReviewForm from '../components/ReviewForm';
import Footer from '../components/Footer';

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
    <div className='page-bg'>
    <NavBar />
    <h1 className='riddle-header text-center mb-5 mt-3'>Diddle diddle diddle, time for a riddle!</h1>
    <RiddleCards questions={questions} getFetch={getFetch} />
    <ReviewForm />
    <Footer />
    </div>
  )
}

export default RiddleQuestions;
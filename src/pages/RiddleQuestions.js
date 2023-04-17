import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import RiddleCards from '../components/RiddleCards';
import ReviewForm from '../components/ReviewForm';
import Footer from '../components/Footer';

function RiddleQuestions() {
  const [questions, setQuestions] = useState([]); //using state to store data from the riddles api.
  //console.log(questions);
  const api = "https://riddles-api.vercel.app/random"

  //re-renders every time getFetch is called. using an empty dependency so it will only re-render once.
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
    <RiddleCards questions={questions} getFetch={getFetch} /> {/* passing questions and getFetch as props */}
    <ReviewForm />
    <Footer />
    </div>
  )
}

export default RiddleQuestions;
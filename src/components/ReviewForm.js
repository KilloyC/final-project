import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import EditButton from './EditButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const apiUrl = 'https://64051b18eed195a99f7c3b5c.mockapi.io/reviews';

function ReviewForm() {
  const [reviewList, setReviewList] = useState([]);
  const [newReviewName, setNewReviewName] = useState('')
  const [newUserReview, setNewUserReview] = useState('');
  //console.log(reviewList);

  //re-renders with getReviews is called. using a dependency array to call it once.
  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = () => {
    fetch(apiUrl)
      .then((data) => data.json()
      .then((data) => setReviewList(data)) //updating setReviewList with the data from the reviews api 
      )
  };

  const createReview = (event) => {
    //console.log(createReview);
    event.preventDefault(); //using this to stop the page from reloading because createReview is in a form.

    //this is to create new reviews, and then clear the input fields, then re-render the page.
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newReviewName,
        userReview: newUserReview
      })
    }).then(() => {
      getReviews();
      setNewReviewName('');
      setNewUserReview('');
    })
  }

  //takes in an id to identify which review to be delete from the array of reviews, then again calls the getReviews function
  const deleteReview = (id) => {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      }).then(res => {
        res.json()
        .then((resp) => {
            console.log(resp);
        getReviews();
      })
    })
  }

  return (
    <Container style={{marginTop: '200px'}}>
      <h1 className='text-center mt-5 review-header'>Leave a review or comment below!</h1>
    <Form>
      <Form.Group className="mb-1" controlId="Input1">
        <Form.Label className='review-label'>User Name</Form.Label>
        <Form.Control type="text" placeholder="user name" value={newReviewName} onChange={(event) => setNewReviewName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="Textarea1">
        <Form.Label className='review-label'>Review/Comment</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='text area' value={newUserReview} onChange={(event) => setNewUserReview(event.target.value)} />
      </Form.Group>
    </Form>
    <Button variant="contained" className='mt-2' color='success' onClick={(event) => createReview(event)}>Submit</Button>

    <div className='bg-review my-5 p-2'>
      {/* mapping through the array of reviews to access the data to show on the page, which allows for creating, deleting, and updating reviews */}
      {reviewList.map((review, index) => (
        <div key={index}>
          {review.name}<br/>
          {review.userReview}<br/>
          <Stack direction="row" spacing={2}>
          <Grid item xs={8} variant="contained" style={{cursor: 'pointer', color:'red'}} className='mt-2' onClick={() => deleteReview(review.id)}>
          <DeleteForeverOutlinedIcon />
          </Grid>
          <EditButton apiUrl={apiUrl} getReviews={getReviews} review={review}/>
          </Stack>
          <hr/>
        </div>
      ))}
    </div>
    </Container>
  )
}

export default ReviewForm
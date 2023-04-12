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

  useEffect(() => {
    getReviews();
  }, [])

  const getReviews = () => {
    fetch(apiUrl)
      .then((data) => data.json()
      .then((data) => setReviewList(data))
      )
  };

  const createReview = (event) => {
    //console.log(createReview);
    event.preventDefault();

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
      setNewReviewName('');
      setNewUserReview('');
      getReviews();
    })
  }

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
        <Form.Control type="text" placeholder="user name" onChange={(event) => setNewReviewName(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-1" controlId="Textarea1">
        <Form.Label className='review-label'>Review/Comment</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='text area' onChange={(event) => setNewUserReview(event.target.value)} />
      </Form.Group>
    </Form>
    <Button variant="contained" className='mt-2' color='success' onClick={(event) => createReview(event)}>Submit</Button>

    <div className='bg-review my-5 p-2'>
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
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Grid from '@mui/material/Grid';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function EditButton({apiUrl, getReviews, review}) {
    const [open, setOpen] = React.useState(false);
    const [editReviewName, setEditReviewName] = useState('');
    const [editUserReview, setEditUserReview] = useState('');
    const handleClose = () => setOpen(false);


    const editReview = (id) => {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editReviewName,
                userReview: editUserReview
            })
        }).then(() => {
            setEditReviewName('');
            setEditUserReview('');
            getReviews();
        })
    }

    const handleEditClick = (review) => {
        const handleOpen = () => setOpen(true);
        setEditReviewName(review.name);
        setEditUserReview(review.userReview);
        handleOpen();
    }

  return (
    <div>
      <Grid item xs={8} variant="contained" style={{cursor: 'pointer', color:'gold'}} className='mt-2' color="warning" onClick={() => handleEditClick(review)}>
      <EditOutlinedIcon />
      </Grid>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack>
        <TextField className='mb-3' id="outlined-basic" label="User Name" variant="outlined" value={editReviewName} onChange={(e) => setEditReviewName(e.target.value)}>
          Text in a modal
        </TextField>
        <TextField id="outlined-basic" label="Review" variant="outlined" value={editUserReview} onChange={(e) => setEditUserReview(e.target.value)}>
          Text in a modal
        </TextField>
        <Button onClick={() => editReview(review.id)}>Save</Button>
        <Button variant='tertiary' onClick={handleClose}>Close</Button>
        </Stack>
      </Box>
    </Modal>
  </div>
  )
}

export default EditButton
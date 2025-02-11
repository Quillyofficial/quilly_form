import React from 'react'
import school from '../images/school.png'
import { Typography, FormHelperText, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function School() {
  const navigate = useNavigate();

  function handleSubmitForNo(e) {  
    e.preventDefault();      
    navigate('/beNotified');
  }

  function handleSubmitForYes(e) {  
    e.preventDefault();      
    navigate('/signUp');
  }
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        flexDirection: 'column',
        padding: '20px'
      }}
    >
      {/* Centered content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        
        {/* Image container */}
        <div
          style={{
            marginBottom: '30px',
          }}
        >
          <img
            src={school}
            alt="schoolImage"
            style={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: '250px',
            }}
          />
        </div>

        {/* Text and buttons container */}
        <div>
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', paddingBottom: '40px' }}
          >
            Do you currently attend UC Berkeley?
          </Typography>

          
        <FormHelperText sx={{ textAlign: 'center'}}>
          Please choose an option
        </FormHelperText>

        <Button class='mcqButton' onClick={handleSubmitForYes}>
          Yes
        </Button>
        <br></br>

        <Button class='mcqButton' onClick={handleSubmitForNo}>
          No
        </Button>
        </div>
        
      </div>

      {/* Footer */}
      <FormHelperText
        sx={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
          width: '100%',
          fontSize: '12px',
          color: 'gray',
        }}
      >
        www.myquilly.com Terms of Use
      </FormHelperText>
    </div>
  )
}

export default School


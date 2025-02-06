import React from 'react'
import thankYouForInterest from '../images/thankYouForInterest.png'
import { Typography } from '@mui/material' 
import { FormHelperText } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


function ThankYouForInterest() {
    const navigate = useNavigate();
    function handleBackToSite(e) {  
        e.preventDefault();      
        window.location.href = 'https://myquilly.com/';
      }
  return (
    <div>
      <img style={{display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '350px',
    position: 'relative',
    top: '100px'}} src={thankYouForInterest} alt="thankYouForYourInterest" /> 
    <Typography variant='h5' sx={{
      textAlign: 'center',
      position: 'relative',
      top: '100px',
      
    }}>
      Thank you for your interest at Quilly!
    </Typography>
    
    <FormHelperText sx={{
        textAlign: 'center',
        position: 'relative',
        top: '100px',
      }}>
      We will let you know when registration opens at your school!</FormHelperText>
      <Button onClick={handleBackToSite}
      sx={{ 
        backgroundColor: 'rgba(232, 226, 237, 1)',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        width: '400px',
        height: '50px',
        border: 1,
        position: 'relative',
        top: '135px',
        left: '540px',
        }}
        >Back to Site</Button>
     
    
    </div>

  )
}

export default ThankYouForInterest

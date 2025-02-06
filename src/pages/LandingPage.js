import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import quillyTitle from '../images/quillyTitle.png'
import { useNavigate } from 'react-router-dom'



function LandingPage() {
  const navigate = useNavigate();
  function handleSubmit(e) {  
    e.preventDefault();
    console.log("clicked button");
    navigate('/school');
  }

  
  return (
    <div class="imageClass">
      <img src={quillyTitle} alt="quillyTitleImage" />

        <div style={{ 
        alignItems: 'center',
        justifyContent: 'center', 
    }}>
      <Typography variant='h5' sx={{
        textAlign: 'center',
        position: 'relative',
        left: '50px'
      }}>
        Real friends, not followers-<br />
        the girls you can call up, hang with, lean on.
      </Typography>
    </div>
      <Button onClick={handleSubmit}
      sx={{ 
        backgroundColor: 'rgba(232, 226, 237, 1)',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        width: '400px',
        height: '50px',
        border: 1,
        position: 'relative',
        top: '50px',
        left: '210px',
        }}
        >Let's Start!</Button>
    </div>

   
  )
}

export default LandingPage
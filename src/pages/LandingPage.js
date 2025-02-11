import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import quillyTitle from '../images/quillyTitle.png'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate();
  function handleSubmit(e) {  
    e.preventDefault();
    navigate('/school');
  }

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center'
      }}>
        {/* Title image */}
        <div style={{
          marginBottom: '20px'
        }}>
          <img 
            className="quillyImg" 
            src={quillyTitle} 
            alt="quillyTitleImage" 
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginBottom: '20px'
            }} 
          />
        </div>

        {/* Text and Button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>
            Real friends, not followers- <br />
            the girls you can call up, hang with, lean on.
          </Typography>

          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: 'rgba(232, 226, 237, 1)',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '20px',
              width: '400px',
              height: '50px',
              border: 1,
              marginTop: '40px',
            }}
          >
            Let's Start!
          </Button>
        </div>
      </div>

      {/* Footer text */}
      <FormHelperText sx={{
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        paddingBottom: '10px',
      }}>
        www.myquilly.com Terms of Use
      </FormHelperText>
    </div>
  );
}

export default LandingPage;

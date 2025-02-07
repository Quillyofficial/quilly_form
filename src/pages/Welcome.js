import React from 'react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import welcome from '../images/welcome.PNG'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/mcqOne');
  }

  return (
    <div class='imageClass'>
      <img class="welcomeImage" src={welcome} alt="welcomeImage"/>

      <div style={{position:'absolute', 
        left: '100px',
        top:'415px'}}>
      <div style={{ 
        alignItems: 'center',
        justifyContent: 'center', 
      }}>
            
        <Typography variant='h5' sx={{
          textAlign: 'center',
          position: 'relative',
          left: '30px'
        }}>
          Welcome! Let's get you started 
        </Typography>
      </div>

      <FormHelperText sx={{
        textAlign: 'center',
        position: 'relative',
        left:'20px'
      }}>
        Let's hear abouy your activity preferences!
      </FormHelperText>

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
          top: '40px',
          left: '50px',
        }}
      >
        Continue
      </Button>

      </div>


    
    </div>
  )
}

export default Welcome
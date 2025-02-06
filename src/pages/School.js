import React from 'react'
import school from '../images/school.png'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
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

    <div>
       <img class="schoolImage" src={school} alt="schoolImage" /> 
      <Typography variant='h5' sx={{
        textAlign: 'center',
        position: 'relative',
        top: '150px',
      }}>
        Do you currently attend UC Berkeley? 
      </Typography>

      <FormHelperText sx={{
        textAlign: 'center',
        position: 'relative',
        top: '200px',
      }}>
      Please choose an option</FormHelperText>
      <Button onClick={handleSubmitForYes}
      sx={{ 
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        width: '400px',
        height: '50px',
        border: 1,
        position: 'relative',
        top: '205px',
        left: '540px',
        marginBottom: '10px',
        }}
        >Yes</Button>
        
        <br />
        <Button onClick={handleSubmitForNo}
      sx={{ 
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '20px',
        width: '400px',
        height: '50px',
        border: 1,
        position: 'relative',
        top: '205px',
        left: '540px',
        }}
        >No</Button>

      <FormHelperText sx={{
        textAlign: 'center',
        position: 'absolute',
        bottom: '0', 
        width: '100%'
      }}>
      www.myquilly.com Terms of Use</FormHelperText>

    </div>
    
  )
}

export default School
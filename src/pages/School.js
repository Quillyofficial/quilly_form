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

    {/* Container for body of the page */}
    <div class='container'> 
      
    <div style={{
      position:'absolute', 
      top:'160px',
      bottom:'120px',
      left:'175px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'}}>

      {/* Container for mcq image */}
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>
        <img class="mcqImage schoolImg" src={school} alt="schoolImage"/>
      </div>

      {/* Container for text and buttons */}
      <div style={{
        position:'absolute', 
        top:'150px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>
        
        <Typography variant='h5' sx={{ textAlign: 'center', paddingBottom:'40px'}}>
          Do you currently attend UC Berkeley?
        </Typography>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Please choose an option
        </FormHelperText>

        <Button class='mcqButton' onClick={handleSubmitForYes}>
          Yes
        </Button>

        <Button class='mcqButton' onClick={handleSubmitForNo}>
          No
        </Button>
        
      </div>

    </div>
    </div>
      <FormHelperText sx={{
        textAlign: 'center',
        position: 'absolute',
        bottom: '0', 
        width: '100%'
        }}>
        www.myquilly.com Terms of Use
      </FormHelperText>

    </div>
  )
}

export default School
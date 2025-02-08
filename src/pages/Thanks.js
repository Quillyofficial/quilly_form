import React from 'react'
import buddies from '../images/buddies.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Thanks() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/pledge');
  }

  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'195px',
      bottom:'120px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'}}>
          
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>
        <img class="otherImages" src={buddies} alt="huggingImage"/>
      </div>


      <div style={{
        position:'absolute', 
        top:'160px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>

        <div style={{ 
          alignItems: 'center',
          justifyContent: 'center', 
        }}> 
          <Typography variant='h5' sx={{ textAlign: 'center'}}>
          Thanks girl! Wow! <br/>
          I feel like we're besties already.
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Thanks for completing the questionnaire! <br/>
          We just have one last thing for you to do, and then you're in!
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
            top: '40px'}}
        >
          Continue
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

export default Thanks
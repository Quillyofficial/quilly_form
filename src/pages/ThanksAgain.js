import React from 'react'
import heart from '../images/heart.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function ThanksAgain() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/kahloHouse');
  }

  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'190px',
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
        <img class="otherImages" src={heart} alt="handHeartImage"/>
      </div>


      <div style={{
        position:'absolute', 
        top:'130px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>

        <div style={{ 
          alignItems: 'center',
          justifyContent: 'center', 
        }}> 
          <Typography variant='h5' sx={{ textAlign: 'center', marginBottom:'25px'}}>
          Thank you for completing the questionnaire...exciting news,<br/>
          we've found you the perfect community of like-minded <br/>
          individuals.
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Welcome to...I can't wait...you ready? Okay fine, fine...
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

export default ThanksAgain
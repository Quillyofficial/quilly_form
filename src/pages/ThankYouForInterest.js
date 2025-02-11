import React from 'react'
import thankYouForInterest from '../images/thankYouForInterest.png'
import { Typography } from '@mui/material' 
import { FormHelperText } from '@mui/material'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'


function ThankYouForInterest() {
    //const navigate = useNavigate();
    function handleBackToSite(e) {  
        e.preventDefault();      
        window.location.href = 'https://myquilly.com/';
      }

  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'200px',
      bottom:'120px',
      left:'0px',
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
        <img class="fairWellImg" src={thankYouForInterest} alt="thankYouImage"/>
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
          <Typography variant='h5' sx={{ textAlign: 'center'}}>
            Thank you for your interest at Quilly!
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
          We will let you know when registration opens at your school!
        </FormHelperText>

        <Button onClick={handleBackToSite}
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
          Back to Site
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


export default ThankYouForInterest

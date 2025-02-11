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
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'230px',
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
        <img class="quillyImg" src={quillyTitle} alt="quillyTitleImage"/>
      </div>


      <div style={{
        position:'absolute', 
        top:'150px',
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
            Real friends, not followers- <br/>
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
            top: '40px'}}
        >
          Let's Start!
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

export default LandingPage
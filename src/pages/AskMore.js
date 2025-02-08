import React from 'react'
import doodles from '../images/doodles.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AskMore() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/mcqFour');
  }

  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'230px',
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
        <img class="otherImages" src={doodles} alt="doodlesImage"/>
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
            Where have you been all my life?! <br/>
            Mind if I ask some more?
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Next up, let's talk about your social preferences!
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

export default AskMore
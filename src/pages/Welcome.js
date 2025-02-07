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
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'250px',
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
        <img class="welcomeImage" src={welcome} alt="welcomeImage"/>
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
            Welcome! Let's get you started 
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
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

export default Welcome
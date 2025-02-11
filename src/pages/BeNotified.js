import React, { useState } from 'react'
import { TextField } from '@mui/material'
//import {FormLabel } from '@mui/material'
import signUp from '../images/signup.png'
import { Typography } from '@mui/material' 
import Button from '@mui/material/Button'
import {Box}  from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormHelperText, Checkbox } from '@mui/material'

import {Grid } from '@mui/material'

function BeNotified() {
  const navigate = useNavigate();
  function handleOnClick(e) {  
    e.preventDefault();      
    navigate('/notFromSchool');
  }

  const [checked, setChecked] = useState(false);

  return (
    <div style={{
      display:'flex', 
      flexDirection:'column', 
      alignItems:'center', 
      justifyContent:'center',
      marginTop:'80px'}}>
    <img style={{display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '350px',
  position: 'relative',
  top: '100px'}} src={signUp} alt="signUpImage" /> 
    <div>
    <Typography variant='h5' sx={{
      textAlign: 'center',
      position: 'relative',
      top: '100px',
      
    }}>
      Be notified when Quilly launches on your campus!
    </Typography>

    </div>
    <div style={{maxWidth: '600px', margin: '0 auto', position: 'relative', top: '120px'}} >
    
    <Grid container spacing={2}>
      <Grid container item spacing={2}>
        <Grid item md={6}>
          <TextField label="First Name" variant="outlined" fullWidth required />
        </Grid>
        <Grid item md={6}>
          <TextField label="Last Name" variant="outlined" fullWidth required/>
        </Grid>
      </Grid>
      <Grid item md={12}>
        <TextField label="Email Address" variant="outlined" fullWidth required/>
      </Grid>
      <Grid item md={12}>
        <TextField label="Phone Number" variant="outlined" fullWidth required/>
      </Grid>
      <Grid item md={12}>
        <TextField label="Your School" variant="outlined" fullWidth required/>
      </Grid>
    </Grid>
  </div>
  <Box
    display="flex"
    alignItems='center'
    sx={{ p: 1, border: '1px solid grey', width: '580px', margin: '0 auto', position: 'relative', top: '130px' }}
  >
    <Checkbox 
      checked={checked} 
      onChange={(e) => setChecked(e.target.checked)} required/>
    I agree with the terms and conditions
  </Box>
  
  <Button onClick={handleOnClick}
    sx={{ 
      backgroundColor: 'rgba(232, 226, 237, 1)',
      color: 'black',
      fontWeight: 'bold',
      borderRadius: '20px',
      width: '400px',
      height: '50px',
      border: 1,
      position: 'relative',
      top: '150px',
      }}
      >Submit ➤ </Button>

  <FormHelperText sx={{
    textAlign: 'center',
    position: 'absolute',
    bottom: '0', 
    width: '100%'
    }}>www.myquilly.com Terms of Use </FormHelperText>

  </div>
  )
}

export default BeNotified
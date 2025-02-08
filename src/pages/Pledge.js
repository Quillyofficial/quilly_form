import React from 'react'
import pin from '../images/pin.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'

function Pledge() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/thanksAgain');
  }

  const [name, setName] = useState("");



  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'100px',
      bottom:'220px',
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
        <img class="pledgeImg" src={pin} alt="pinImage"/>
      </div>


      <div style={{
        position:'absolute', 
        top:'100px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>

        <div style={{ 
          alignItems: 'center',
          justifyContent: 'center', 
        }}> 
          <Typography variant='h5' sx={{ textAlign: 'left', marginBottom:'25px'}}>
            Almost done! Read our pledge <br/>
            and sign your name!
          </Typography>
        </div>

        <FormHelperText sx={{ 
          textAlign: 'left', 
          fontFamily:'sans-serif', 
          lineHeight:'1.3', 
          fontSize:'15px',
          color:'black',
          opacity:'0.7',
          paddingRight:'15px',
          marginBottom:'10px'}}>
          I, _____________, pledge always to be inclusive and <br/>
          empathetic. As a Quilly girl, I'm all in for making real <br/>
          friendships.<br/>
          I'll be honest and authentic--no gossip, no drama.<br/>
          I'll cheer on my friends--without competing with or<br/>
          undermining them.<br/>
          I'll be there for my Quilly girls, through thick and thin.<br/>
          I promise to bring my best energy to our activities and be a<br/>
          reliable, involved member of our community.<br/>
          Above all else, I promise to embody our core values of<br/>
          compassion, loyalty, trust, and authenticity in every<br/>
          friendship I develop.
        </FormHelperText>

        <TextField
          variant="filled"
          placeholder="First and Last name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          size='small'
          sx={{
            backgroundColor: "#F5F5F5", 
            borderRadius: "10px",
            maxWidth:'400px',
            margin: "20px auto",
            input: { textAlign: "left", 
              fontFamily:'sans-serif', 
              fontSize:'15px'}
        }}/>

        <Button onClick={handleSubmit}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: '400px',
            height: '50px',
            border: 1,
            top: '20px'}}
        > Continue ➤ </Button>
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

export default Pledge
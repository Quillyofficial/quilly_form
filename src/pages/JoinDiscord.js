import React from 'react'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'

function JoinDiscord() {
  const discordInviteLink = "https://discord.gg/WQHaVwQ24d";
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
      <video controls width="1000px">
        <source src="videos/QuillyIntroVid.mp4" type="video/mp4"/>
      </video>
      </div>


      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>

        <div style={{ 
          alignItems: 'center',
          justifyContent: 'center', 
        }}> 
          <Typography variant='h5' sx={{ textAlign: 'center', lineHeight:'1.3'}}>
          Ready to get started? <br/>
          Join the discord for your house!
          </Typography>
        </div>

        <FormHelperText sx={{ 
          textAlign: 'center', 
          fontFamily:'sans-serif', 
          fontSize:'15px', 
          color:'black' ,
          opacity:'0.7',
          lineHeight:'1.2',
          marginBottom:'20px'}}>
          Discord will help you stay up to date on all the fun that's just getting started, <br/>
          and meet your housemates while you're at it!
        </FormHelperText>

        <FormHelperText sx={{ 
          textAlign: 'center', 
          fontFamily:'sans-serif', 
          color:'grey',
          opacity:'0.65',
          fontSize:'13px'}}>
          click the button below
        </FormHelperText>

        <Button onClick={() => window.open(discordInviteLink, "_blank")}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: '400px',
            height: '50px',
            border: 1,
            top: '10px'}}
        > Join Discord </Button>
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

export default JoinDiscord
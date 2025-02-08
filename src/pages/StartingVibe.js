import React from 'react'
import music from '../images/music.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function StartingVibe() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/interests');
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
        justifyContent:'center',
        paddingRight:'20px'
        }}>
        <img class="musicImg" src={music} alt="recordPlayerImage"/>
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
            Starting to really get your vibe! <br/>
            I can see many fun weekends in the future...
          </Typography>
        </div>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Lastly, tell us a little about your thoughts <br/>
          on friendship and your interests!
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

export default StartingVibe
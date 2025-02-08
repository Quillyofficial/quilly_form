import React from 'react'
import kahlo_house from '../images/kahlo_house.png'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function KahloHouse() {
  const navigate = useNavigate();
  function handleSubmit(e){
    e.preventDefault();
    navigate('/joinDiscord');
  }

  return (
    <div>
    <div class='container'>
    <div style={{
      position:'absolute', 
      top:'130px',
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
        <img class="houseImg" src={kahlo_house} alt="KahloHouseImage"/>
      </div>


      <div style={{
        position:'absolute', 
        top:'220px',
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
          Congrats! You've joined the <br/>
          </Typography>

          <Typography variant='h5' sx={{ textAlign: 'center',  fontWeight:'bold', marginBottom:'20px'}}>
          Kahlo House! <br/>
          </Typography>


        </div>

        <FormHelperText sx={{ textAlign: 'center', fontSize:'15px', fontStyle:'italic', fontFamily:'sans-serif', opacity:'0.7', marginBottom:'4px'}}>
          You are... Creative, Expressive, Resilient
        </FormHelperText>

        <FormHelperText sx={{ textAlign: 'center', fontSize:'15px', fontFamily:'sans-serif', color:'black', lineHeight:'1.4'}}>
          You don't need to paint like Frida Kahlo to belong here! At <br/>
          Kahlo House, we're all about expressing ourselves in <br/>
          whatever way feels right. Kahlo girls are passionate, <br/>
          creative, and ready to make something amazing--no matter <br/>
          the medium. Let's create together!
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

export default KahloHouse
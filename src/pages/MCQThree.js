import React from 'react'
import book from '../images/book.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function MCQThree() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const options = [
    {id: 1, emoji: "🙇‍♀️", text:"I like being in my own space."},
    {id: 2, emoji: "👩‍💻", text:"The library, if I can find a seat!"},
    {id: 3, emoji: "🍵", text:"A coffee shop, matcha in hand."},
    {id: 4, emoji: "🌇", text:"Anywhere outside."}
  ];

  function handleSubmit(e) {  
    e.preventDefault();      
    navigate('/askMore');
  }

  return (
    <div>

    {/* Container for body of the page */}
    <div class='container'> 
      
    <div style={{
      position:'absolute', 
      top:'140px',
      bottom:'100px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'}}>

      {/* Container for mcq image */}
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        }}>
        <img class="mcqImage bookImg" src={book} alt="bookImage"/>
      </div>

      {/* Container for text and buttons */}
      <div style={{
        position:'absolute', 
        top:'100px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>
        
        <Typography variant='h5' sx={{ textAlign: 'center', paddingBottom:'25px'}}>
          Favorite place to study...or <br/>
          ...to pretend to study?
        </Typography>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Please choose an option
        </FormHelperText>

        {/* Options */}
        { options.map((option) => (
          <Button 
            class={`mcqButton ${selected === option.id ? "option-selected" : "mcqButton"}`}
            key={option.id}
            onClick={()=> {
              setSelected(option.id);
              localStorage.setItem('mcqThree', option.id);
              navigate('/askMore');
            }}
            >
            <span>{option.emoji}</span> {option.text}
          </Button>
        ))}

        <Button onClick={handleSubmit}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: '400px',
            height: '50px',
            border: 1,
            top: '30px'}}
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

export default MCQThree
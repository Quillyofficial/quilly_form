import React from 'react'
import bow from '../images/bow.PNG'
import { Typography } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Interests() {
  const navigate = useNavigate();

  function handleSubmit(e) {  
    e.preventDefault();      
    navigate('/mcqSeven');
  }

  const interests = [
    { id: 1, emoji: "🎨", text: "Creativity" },
    { id: 2, emoji: "🏊‍♀️", text: "Sports" },
    { id: 3, emoji: "🌄", text: "Outdoors" },
    { id: 4, emoji: "🍕", text: "Food & Drinks" },
    { id: 5, emoji: "🥂", text: "Going Out" },
    { id: 6, emoji: "🎬", text: "Film & TV" },
    { id: 7, emoji: "🎵", text: "Music" },
    { id: 8, emoji: "🐈", text: "Pets" },
    { id: 9, emoji: "🛌", text: "Staying in" },
    { id: 10, emoji: "☕", text: "Coffee & Tea" },
    { id: 11, emoji: "✈️", text: "Travel" },
    { id: 12, emoji: "📷", text: "Photography" },
    { id: 13, emoji: "👠", text: "Fashion" },
    { id: 14, emoji: "📖", text: "Reading" },
    { id: 15, emoji: "👏", text: "Self Improvement" },
    { id: 16, emoji: "🏋️‍♀️", text: "Fitness" },
    { id: 17, emoji: "🎮", text: "Gaming" },
    { id: 18, emoji: "🍳", text: "Cooking/Baking" },
    { id: 19, emoji: "🏎️", text: "Cars" },
    { id: 20, emoji: "🧏‍♂️", text: "Skincare/Makeup" },
    { id: 21, emoji: "🤣", text: "Memes" }
  ];

  const [selectedInterests, setSelectedInterests] = useState([]);
  const handleSelect = (id) => {
    if (selectedInterests.includes(id)) {
      // Deselect if already selected
      setSelectedInterests(selectedInterests.filter((item) => item !== id));
    } else if (selectedInterests.length < 5) {
      // Allow selection only up to 5 items
      setSelectedInterests([...selectedInterests, id]);
    }
  };


  return (
    <div>

    {/* Container for body of the page */}
    <div class='container'> 
      
    <div style={{
      position:'absolute', 
      top:'100px',
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
        <img class="mcqImage bowImg" src={bow} alt="bowImage"/>
      </div>

      {/* Container for text and buttons */}
      <div style={{
        position:'absolute', 
        top:'80px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
        }}>
        
        <Typography variant='h5' sx={{ textAlign: 'center', paddingBottom:'18px'}}>
          Let us know what you like!
        </Typography>

        <FormHelperText sx={{ textAlign: 'center'}}>
          Choose up to five interests.
        </FormHelperText>

        {/* Interests */}
        <div style={{
          alignItems:'center',
          justifyContent:'center',
          display:'grid',
          gridTemplateColumns:'repeat(3, 1fr)',
          gap:'6px',
          maxWidth:'50px',
          margin:'auto'
        }}>
        { interests.map((interest) => (
          <Button 
            class={`interestButton ${selectedInterests.includes(interest.id) ? "option-selected" : "interestButton"} interestButton`}
            key={interest.id}
            onClick={()=> handleSelect(interest.id)}
            >
            <span>{interest.emoji}</span> {interest.text}
          </Button>
        ))}
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
            top: '28px'}}
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

export default Interests
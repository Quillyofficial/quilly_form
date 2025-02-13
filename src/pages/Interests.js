import React, { useState } from 'react';
import { Typography, FormHelperText, Button, Box, Grid } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Interests() {
  const router = useRouter();
  const [selectedInterests, setSelectedInterests] = useState([]);

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

  const handleSelect = (id) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(item => item !== id));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('selectedInterests', JSON.stringify(selectedInterests));
    router.push('/mcqSeven');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        padding: 3,
        pt: { xs: '5vh', md: '10vh' }
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '200px',
          mb: 4,
	  marginBottom: '10px',
        }}
      >
        <Image
          src="/images/bow.png"
          alt="Bow"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 'md',
          gap: 2
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            mb: 1
          }}
        >
          Let us know what you like!
        </Typography>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontSize: '1rem',
            mb: 2
          }}
        >
          Choose up to five interests ({selectedInterests.length}/5 selected)
        </FormHelperText>

        {/* Scrollable Grid Container */}
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '600px' },
            height: { xs: '400px', sm: 'auto' }, // Fixed height for mobile
            overflow: { xs: 'auto', sm: 'visible' }, // Scroll on mobile only
            px: 2,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(212, 206, 217, 0.8)',
              borderRadius: '4px',
              '&:hover': {
                background: 'rgba(212, 206, 217, 1)',
              },
            },
          }}
        >
          <Grid 
            container 
            spacing={1.5}
            sx={{ 
              mb: { xs: 2, sm: 0 } // Add bottom margin for mobile scrolling
            }}
          >
            {interests.map((interest) => (
              <Grid item xs={6} sm={4} key={interest.id}>
                <Button
                  onClick={() => handleSelect(interest.id)}
                  disabled={!selectedInterests.includes(interest.id) && selectedInterests.length >= 5}
                  sx={{
                    backgroundColor: selectedInterests.includes(interest.id)
                      ? 'rgba(212, 206, 217, 1)'
                      : '#FFFFFF',
                    color: 'black',
                    fontWeight: 'normal',
                    borderRadius: '10px',
                    border: 1,
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    height: '60px',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: selectedInterests.includes(interest.id)
                        ? 'rgba(212, 206, 217, 0.9)'
                        : 'rgba(232, 226, 237, 0.1)',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5,
                    fontSize: '0.875rem'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{interest.emoji}</span>
                  <span>{interest.text}</span>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Button
          onClick={handleSubmit}
          disabled={selectedInterests.length === 0}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: { xs: '100%', sm: '400px' },
            height: '50px',
            border: 1,
            mt: 4,
	    marginTop: '22px',
  	    marginBottom: '17px',	
            '&:hover': {
              backgroundColor: 'rgba(222, 216, 227, 1)',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(232, 226, 237, 0.5)',
              color: 'rgba(0, 0, 0, 0.4)'
            }
          }}
        >
          Continue ➤
        </Button>
      </Box>

      {/* Footer */}
      <FormHelperText
        sx={{
          textAlign: 'center',
          position: 'absolute',
          bottom: 2,
          width: '100%',
          pb: 1
        }}
      >
        www.myquilly.com Terms of Use
      </FormHelperText>
    </Box>
  );
}
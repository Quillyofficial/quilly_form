import React, { useState } from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MCQTwo() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const options = [
    {id: 1, emoji: "😕", text: "Not at all. I know what I like."},
    {id: 2, emoji: "💆‍♀️", text: "I like exploring within my comfort zone."},
    {id: 3, emoji: "🙆‍♀️", text: "I'll try something once."},
    {id: 4, emoji: "🎢", text: "The amazing race called me."}
  ];

  const handleOptionClick = (optionId) => {
    setSelected(optionId);
    localStorage.setItem('mcqTwo', optionId);
    router.push('/mcqThree');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/mcqThree');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        padding: 3
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '250px',
          mb: 4,
          mt: { xs: 2, md: 4 }
        }}
      >
        <Image
          src="/images/camp.png"
          alt="Camp"
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
          maxWidth: 'sm',
          gap: 2
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            mb: 2
          }}
        >
          How down for an adventure are you?
        </Typography>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontSize: '1rem',
            mb: 2
          }}
        >
          Please choose an option
        </FormHelperText>

        {/* Options */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
            maxWidth: { xs: '100%', sm: '400px' }
          }}
        >
          {options.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              sx={{
                backgroundColor: selected === option.id 
                  ? 'rgba(212, 206, 217, 1)' 
                  : 'rgba(232, 226, 237, 1)',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: '20px',
                height: '50px',
                border: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(222, 216, 227, 1)',
                },
                display: 'flex',
                gap: 1,
                justifyContent: 'flex-start',
                padding: '0 20px'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{option.emoji}</span>
              <span>{option.text}</span>
            </Button>
          ))}

        </Box>
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
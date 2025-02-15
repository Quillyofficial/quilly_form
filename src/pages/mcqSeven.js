import React, { useState } from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function MCQSeven() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  const options = [
    {id: 1, emoji: "🙉", text: "Discuss openly and resolve quickly"},
    {id: 2, emoji: "🧘‍♀️", text: "Take some time to cool off before talking."},
    {id: 3, emoji: "😶‍🌫️", text: "Avoid confrontation and hope it passes."},
    {id: 4, emoji: "🙋‍♀️", text: "Seek advice from other friends."}
  ];

  const handleOptionClick = (optionId) => {
    setSelected(optionId);
    localStorage.setItem('mcqSeven', optionId);
    router.push('/mcqEight');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/mcqEight');
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
        pt: { xs: '0vh', md: '15vh' }
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '250px',
          mb: 4
        }}
      >
        <Image
          src="/images/fight.png"
          alt="Conflict Resolution"
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
          What's your stance on conflict resolution?
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
                padding: '0 20px',
                width: '100%'
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
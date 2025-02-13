import React, { useState, useEffect } from 'react';
import { Typography, FormHelperText, Button, Box, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Pledge() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    if (firstName && lastName) {
      setStoredName(`${firstName} ${lastName}`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }
    localStorage.setItem('pledgeName', name);
    router.push('/thanksAgain');
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
        pt: { xs: '10vh', md: '8vh' }
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
          height: '200px',
          mb: 4
        }}
      >
        <Image
          src="/images/pin.png"
          alt="Pin"
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
          maxWidth: '500px',
          gap: 2
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 3,
            textAlign: 'center'
          }}
        >
          Almost done! Read our pledge <br/>
          and sign your name!
        </Typography>

        <FormHelperText 
          component="div" 
          sx={{ 
            fontFamily: 'sans-serif',
            lineHeight: 1.3,
            fontSize: '15px',
            color: 'black',
            opacity: 0.7,
            mb: 1,
            textAlign: 'center',
            width: '100%'
          }}
        >
          I,{' '}
          <Box
            component="span"
            sx={{ 
              fontWeight: 'bold',
              opacity: 1
            }}
          >
            {storedName || "_____________"}
          </Box>
          , pledge always to be inclusive and 
          empathetic. As a Quilly girl, I'm all in for making real 
          friendships.
          I'll be honest and authentic--no gossip, no drama.
          I'll cheer on my friends--without competing with or
          undermining them.
          I'll be there for my Quilly girls, through thick and thin.
          I promise to bring my best energy to our activities and be a
          reliable, involved member of our community.
          Above all else, I promise to embody our core values of
          compassion, loyalty, trust, and authenticity in every
          friendship I develop.
        </FormHelperText>

        <TextField
          variant="filled"
          placeholder={storedName || "First and Last name"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (error) setError("");
          }}
          fullWidth
          size="small"
          error={!!error}
          helperText={error}
          sx={{
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            width: '400px',
            mt: 2,
            mb: 2,
            '& .MuiFilledInput-input': {
              textAlign: 'justify',
              fontFamily: 'sans-serif',
              fontSize: '15px',
	      lineHeight: '22px',
            }
          }}
        />

        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: '400px',
            height: '50px',
            border: 1,
            mt: 2,
            '&:hover': {
              backgroundColor: 'rgba(222, 216, 227, 1)',
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
import React from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function KahloHouse() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/joinDiscord');
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
        pt: { xs: '15vh', md: '10vh' }
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
          src="/images/kahlo_house.png"
          alt="Kahlo House"
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
            textAlign: 'center'
          }}
        >
          Congrats! You've joined the
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 2
          }}
        >
          Kahlo House!
        </Typography>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontSize: '15px',
            fontStyle: 'italic',
            fontFamily: 'sans-serif',
            opacity: 0.7,
            mb: 0.5
          }}
        >
          You are... Creative, Expressive, Resilient
        </FormHelperText>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontSize: '15px',
            fontFamily: 'sans-serif',
            color: 'black',
            lineHeight: 1.4,
            mb: 2
          }}
        >
          You don't need to paint like Frida Kahlo to belong here! At<br/>
          Kahlo House, we're all about expressing ourselves in<br/>
          whatever way feels right. Kahlo girls are passionate,<br/>
          creative, and ready to make something amazing--no matter<br/>
          the medium. Let's create together!
        </FormHelperText>

        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: { xs: '100%', sm: '400px' },
            height: '50px',
            border: 1,
            mt: 4,
            '&:hover': {
              backgroundColor: 'rgba(222, 216, 227, 1)',
            }
          }}
        >
          Continue
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
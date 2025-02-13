import React from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/school');
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
      {/* Main Content Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%',
          maxWidth: 'sm'
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
            src="/images/quillyTitle.png"
            alt="Quilly Title"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>

        {/* Text and Button Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            width: '100%',
            mt: 2
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              textAlign: 'center',
              mb: 2
            }}
          >
            Real friends, not followers- <br />
            the girls you can call up, hang with, lean on.
          </Typography>

          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: 'rgba(232, 226, 237, 1)',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '20px',
              width: '70%', // Changed from fixed width to 70%
              height: '50px',
              border: 1,
              mt: 2,
              '&:hover': {
                backgroundColor: 'rgba(222, 216, 227, 1)',
              }
            }}
          >
            Let's Start!
          </Button>
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
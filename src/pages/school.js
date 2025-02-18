import React from 'react';
import { Button, Typography, Box, FormHelperText } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function School() {
  const router = useRouter();

  const handleSubmit = (answer) => {
    if (answer === 'yes') {
      router.push('/signup');
    } else {
      router.push('/BeNotified');
    }
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flex: 1,
          maxWidth: 'sm',
          width: '100%'
        }}
      >
        {/* Image container */}
        <Box sx={{ mb: 4, position: 'relative', width: '100%', maxWidth: 300, height: 200 }}>
          <Image
            src="/images/school.png"
            alt="School"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>

        <Typography variant="h5" sx={{ mb: 4 }}>
          Do you currently attend UC Berkeley?
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: 400 }}>
          <Button
            onClick={() => handleSubmit('yes')}
            sx={{
              backgroundColor: 'rgba(232, 226, 237, 1)',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '20px',
              height: '50px',
              border: 1,
              '&:hover': {
                backgroundColor: 'rgba(222, 216, 227, 1)',
              }
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => handleSubmit('no')}
            sx={{
              backgroundColor: 'rgba(232, 226, 237, 1)',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: '20px',
              height: '50px',
              border: 1,
              '&:hover': {
                backgroundColor: 'rgba(222, 216, 227, 1)',
              }
            }}
          >
            No
          </Button>
        </Box>
      </Box>

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

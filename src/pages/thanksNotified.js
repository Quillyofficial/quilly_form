import React from 'react';
import { Button, Typography, FormHelperText, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Welcome() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/mcqOne');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          height: '300px',
          mb: 4
        }}
      >
        <Image
          src="/images/welcome.png"
          alt="Welcome"
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
          gap: 2,
          maxWidth: 'sm',
          width: '100%'
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            mb: 1
          }}
        >
          Welcome! Let's get you started
        </Typography>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontSize: '1rem',
            mb: 2
          }}
        >
          Let's hear about your activity preferences!
        </FormHelperText>

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

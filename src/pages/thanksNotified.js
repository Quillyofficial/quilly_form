import React from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Thanks() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/pledge');
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
          maxWidth: 'sm',
          mt: { xs: 4, md: 8 }
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
            src="/images/buddies.png"
            alt="Hugging Friends"
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
              lineHeight: 1.4
            }}
          >
            So excited you want to join the Quilly community! <br/>
            Don’t worry girl we will touch base soon.
          </Typography>

          <FormHelperText 
            sx={{ 
              textAlign: 'center',
              fontSize: '1rem',
              mb: 2
            }}
          >
            Thanks for letting us know where Quilly should go next! <br/>
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
              mt: 2,
              '&:hover': {
                backgroundColor: 'rgba(222, 216, 227, 1)',
              }
            }}
          >
            Continue
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

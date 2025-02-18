// src/pages/index.js
import React from 'react';
import { Button, Typography, FormHelperText, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const router = useRouter();

  console.log('Environment vairiables status:', JSON.stringify(process.env, null, 2));

console.log('All environment variables:');
Object.entries(process.env).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

  console.log('Environment Variables Status:', {
    'API_KEY': process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY || 'missing',
    'LIST_ID': process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID || 'missing',
    'SERVER_PREFIX': process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX || 'missing',
    'CAMPAIGN_ID': process.env.NEXT_PUBLIC_MAILCHIMP_CAMPAIGN_ID || 'missing'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/school');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 'md',
          textAlign: 'center'
        }}
      >
        {/* Title image */}
        <Box sx={{ mb: 4, position: 'relative', width: '100%', maxWidth: 400, height: 200 }}>
          <Image
            src="/images/quillyTitle.png"
            alt="Quilly Title"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Box>

        {/* Text and Button */}
        <Box sx={{ mt: 3 }}>
          <Typography 
            variant="h5" 
            component="h1"
            sx={{ 
              mb: 4,
              '& br': {
                display: { xs: 'none', sm: 'block' }
              }
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
              width: { xs: '70%', sm: '400px' },
              height: '50px',
              border: 1,
              '&:hover': {
                backgroundColor: 'rgba(222, 216, 227, 1)',
              }
            }}
          >
            Let's Start!
          </Button>
        </Box>
      </Box>

      {/* Footer text */}
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

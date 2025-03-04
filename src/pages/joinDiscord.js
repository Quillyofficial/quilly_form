import React from 'react';
import { Typography, FormHelperText, Button, Box } from '@mui/material';

export default function JoinDiscord() {
  const discordInviteLink = "https://discord.gg/WQHaVwQ24d";

  const handleJoinDiscord = () => {
    window.open(discordInviteLink, "_blank");
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
      {/* Video Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '1000px',
          mb: 4,
          mt: { xs: 2, md: 4 }
        }}
      >
        <video
          controls
          width="100%"
          style={{ borderRadius: '8px' }}
        >
          <source src="/videos/QuillyIntroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Content Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 'sm',
          gap: 2,
          mb: 8
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            lineHeight: 1.3,
            mb: 2
          }}
        >
          Ready to get started? <br/>
          Join the discord for your house!
        </Typography>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontSize: '15px',
            color: 'black',
            opacity: 0.7,
            lineHeight: 1.2,
            mb: 2
          }}
        >
          Discord will help you stay up to date on all the fun that's just getting started, <br/>
          and meet your housemates while you're at it!
        </FormHelperText>

        <FormHelperText 
          sx={{ 
            textAlign: 'center',
            fontFamily: 'sans-serif',
            color: 'grey',
            opacity: 0.65,
            fontSize: '13px'
          }}
        >
          click the button below
        </FormHelperText>

        <Button
          onClick={handleJoinDiscord}
          sx={{
            backgroundColor: 'rgba(232, 226, 237, 1)',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '20px',
            width: { xs: '100%', sm: '400px' },
            height: '50px',
            border: 1,
            mt: 1,
            '&:hover': {
              backgroundColor: 'rgba(222, 216, 227, 1)',
            }
          }}
        >
          Join Discord
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

import React from 'react';
import Image from 'next/image';
import thankYouForInterest from '../images/thankYouForInterest.png';
import { Typography, FormHelperText, Button } from '@mui/material';

function ThankYouForInterest() {
  // Since we're using Next.js, we don't need useNavigate.
  // We'll simply navigate using window.location.href in this case.
  function handleBackToSite(e) {
    e.preventDefault();
    window.location.href = 'https://myquilly.com/';
  }

  return (
    <div>
      <div className="container">
        <div
          style={{
            position: 'absolute',
            top: '200px',
            bottom: '120px',
            left: '0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              className="fairWellImg"
              src={thankYouForInterest}
              alt="thankYouImage"
              width={400} // adjust width as needed
              height={300} // adjust height as needed
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '130px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                Thank you for your interest at Quilly!
              </Typography>
            </div>

            <FormHelperText sx={{ textAlign: 'center' }}>
              We will let you know when registration opens at your school!
            </FormHelperText>

            <Button
              onClick={handleBackToSite}
              sx={{
                backgroundColor: 'rgba(232, 226, 237, 1)',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: '20px',
                width: '400px',
                height: '50px',
                border: 1,
                top: '40px',
              }}
            >
              Back to Site
            </Button>
          </div>
        </div>
      </div>

      <FormHelperText
        sx={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}
      >
        www.myquilly.com Terms of Use
      </FormHelperText>
    </div>
  );
}

export default ThankYouForInterest;

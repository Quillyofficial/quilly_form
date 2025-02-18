import React, { useState } from 'react';
import { Typography, FormHelperText, Button, Box, TextField } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BeNotified() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone.replace(/[^0-9]/g, ''));
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Prepare data for Airtable
      const airtableData = {
        'First Name': formData.firstName,
        'Last Name': formData.lastName,
        'Email': formData.email,
        'Phone': formData.phone,
        'Type': 'Non-Berkeley Student' // Add this to differentiate from regular signups
      };

      console.log('Sending data to Airtable:', airtableData);
      
      // Send to Airtable
      const response = await fetch("/api/send-to-airtable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtableData),
      });

      if (!response.ok) {
        throw new Error('Failed to save to Airtable');
      }

      // Navigate to thank you page or next step
      router.push('/thanksNotify');
    } catch (error) {
      console.error('Error saving data:', error);
      setErrors({ submit: 'Failed to save your information. Please try again.' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
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
      {/* Content Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 'sm',
          gap: 2,
          mt: 4
        }}
      >
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center',
            mb: 2
          }}
        >
          We'll let you know when Quilly comes to your campus!
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: '400px',
            mt: 2
          }}
        >
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            required
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{ mb: 2 }}
          />

          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            required
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{ mb: 2 }}
          />

          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
          />

          <TextField
            name="phone"
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ mb: 3 }}
          />

          {errors.submit && (
            <Typography color="error" sx={{ mb: 2 }}>
              {errors.submit}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
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
            Submit
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

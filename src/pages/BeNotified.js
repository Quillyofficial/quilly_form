import React, { useState } from 'react';
import { 
  TextField, 
  Typography, 
  Button, 
  Box, 
  FormHelperText, 
  Grid 
} from '@mui/material';
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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handlePhone = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // Prepare data for Airtable
        const airtableData = {
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Phone': formData.phone,
          'Type': 'Non-Berkeley Student'
        };

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

        router.push('/thanksNotified');
      } catch (error) {
        console.error('Error saving data:', error);
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to save your information. Please try again.'
        }));
      }
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
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '350px',
          height: '200px',
          mb: 4,
          mt: { xs: 2, md: 4 }
        }}
      >
        <Image
          src="/images/signup.png"
          alt="Sign Up"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      <Typography variant="h5" sx={{ textAlign: 'center', mb: 4 }}>
        Be notified when Quilly launches on your campus!
      </Typography>

      {/* Form Container */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
            />
          </Grid>
          <Grid item xs={12}>
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              value={formData.phone}
              onChange={handlePhone}
              error={!!errors.phone}
              helperText={errors.phone}
              inputProps={{ maxLength: 10 }}
              placeholder="1234567890"
            />
          </Grid>
        </Grid>

        {errors.submit && (
          <Typography color="error" sx={{ mt: 2, textAlign: 'center' }}>
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
            mt: 2,
            '&:hover': {
              backgroundColor: 'rgba(222, 216, 227, 1)',
            }
          }}
        >
          Submit
        </Button>
      </Box>

      {/* Footer */}
      <FormHelperText
        sx={{
          textAlign: 'center',
          position: 'absolute',
          bottom: 2,
          width: '100%'
        }}
      >
        www.myquilly.com Terms of Use
      </FormHelperText>
    </Box>
  );
}

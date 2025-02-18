import React, { useState } from 'react';
import { 
  TextField, 
  Typography, 
  Button, 
  Box, 
  FormHelperText, 
  Checkbox, 
  Grid 
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreed: false
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreed: ""
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

    // First Name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Agreement validation
    if (!formData.agreed) {
      tempErrors.agreed = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Clear error when user starts typing
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store in localStorage
      Object.entries(formData).forEach(([key, value]) => {
        localStorage.setItem(key, value.toString());
      });
      router.push('/thanksNotified');
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

        {/* Terms and Conditions */}
        <Box
          sx={{ 
            display: 'flex',
            alignItems: 'anchor-center',
            mt: 2,
            mb: 2
          }}
        >
          <Checkbox 
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2">
              I agree with the terms and conditions
            </Typography>
            {errors.agreed && (
              <FormHelperText error>{errors.agreed}</FormHelperText>
            )}
          </Box>
        </Box>

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

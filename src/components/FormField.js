import React from 'react';
import { TextField, Checkbox, FormControlLabel } from '@mui/material';

export const FormField = ({ type = 'text', name, label, error, ...props }) => {
  if (type === 'checkbox') {
    return (
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            {...props}
          />
        }
        label={label}
      />
    );
  }

  return (
    <TextField
      name={name}
      label={label}
      variant="outlined"
      fullWidth
      error={!!error}
      helperText={error}
      {...props}
    />
  );
};

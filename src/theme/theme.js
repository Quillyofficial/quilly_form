// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(232, 226, 237, 1)',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      lineHeight: 1.5,
    },
  },
});

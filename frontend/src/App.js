import './App.css';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LanguageIcon from '@mui/icons-material/Language';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';

const OpenwithCustomImageIcon = () => {
  const customPageContent = `
    <html>
      <head>
        <title>My Custom Page</title>
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR42mJ0YGBg+A8Egwf7B9GE/whBhZyAaAGIMZgvBwAKGYClACDAAWfU7BWwDdABDWgnEoYLTAJM+gHSmx6JwAQWCDowCrgBQU0AuXDJ0FEsAAGrA0O8GVoHkAGGgA1HoUjIDlwFQAizcUBSA2E0BJtAFjEFOG9ZAJxobgNBWAJR2kcHG8YMTDwqACpsHZY0t0JhAAzXnUG5P2EoNyAAjGp1VNUgOgzNLzP3AGmSH5yGYzAoAjFl7ZLSUAfSjMG4AElsC2A9D3MNYzAoDjI3TkoAZoDiBoA6QZFC5a5ALABcABdDqVAAhhDphOSQAK8TApEDEzU+OJoKzMTMORgAAzRgZ7nAAGABDQ00CtX2VDCvEABozQgM0DgFQCO0akJtAQQYmABJRjSNpkJnIhSgwDhwAlMDWg5AnMb8CBgs7FrfLBzAPOAoUoAxEAYMCVAApBJlAYXwCZsPscGMAmGAYRAKQEOsAAn4EgBiwgEIVAKQCTGjWDqFfFA0wa4Gth7kGAE7AcgaHLwYGAICLxQBfS0fsAAAAASUVORK5CYII=" type="image/x-icon">
      </head>
      <body>
        <h1>Welcome to My Custom Page</h1>
        <p>This page was opened with a custom favicon!</p>
      </body>
    </html>
  `;

  const newWindow = window.open();
  newWindow.document.write(customPageContent);
  newWindow.document.close();
};


const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2A918B' }}>
      <Toolbar>
        {/* Logo and Company Name */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <img src="/logo512.png" alt="Company Logo" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6" component="div">
            Test Platform
          </Typography>
        </Box>

        {/* Language Selector */}
        <Box>
          <IconButton color="inherit" onClick={handleLanguageMenuClick}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageMenuClose}
          >
            <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
            <MenuItem onClick={handleLanguageMenuClose}>Arabic</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const CountrySelector = () => {
  const [country, setCountry] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = () => {

    if(country === 'USA') {
      window.location.href = 'http://cnn.com';
    }
    else if(country === 'UK') {
      const pdfUrl = `https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf`; // Path to PDF in the public folder
      window.open(pdfUrl, '_blank');
    }
    else {
      const pdfUrl = `https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf`; // Path to PDF in the public folder
      //window.open(pdfUrl, '_blank');
      //Since the new window opened doesn't support the window with custom icon this below code is being used
      const customPageContent = `
        <html>
          <head>
            <title>My Custom Page</title>
            <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABpElEQVR42mJ0YGBg+A8Egwf7B9GE/whBhZyAaAGIMZgvBwAKGYClACDAAWfU7BWwDdABDWgnEoYLTAJM+gHSmx6JwAQWCDowCrgBQU0AuXDJ0FEsAAGrA0O8GVoHkAGGgA1HoUjIDlwFQAizcUBSA2E0BJtAFjEFOG9ZAJxobgNBWAJR2kcHG8YMTDwqACpsHZY0t0JhAAzXnUG5P2EoNyAAjGp1VNUgOgzNLzP3AGmSH5yGYzAoAjFl7ZLSUAfSjMG4AElsC2A9D3MNYzAoDjI3TkoAZoDiBoA6QZFC5a5ALABcABdDqVAAhhDphOSQAK8TApEDEzU+OJoKzMTMORgAAzRgZ7nAAGABDQ00CtX2VDCvEABozQgM0DgFQCO0akJtAQQYmABJRjSNpkJnIhSgwDhwAlMDWg5AnMb8CBgs7FrfLBzAPOAoUoAxEAYMCVAApBJlAYXwCZsPscGMAmGAYRAKQEOsAAn4EgBiwgEIVAKQCTGjWDqFfFA0wa4Gth7kGAE7AcgaHLwYGAICLxQBfS0fsAAAAASUVORK5CYII=" type="image/x-icon">
          </head>
          <body>
            <h1>Welcome to My Custom Page</h1>
            <p>This page was opened with a custom favicon!</p>
          </body>
        </html>
    `;

      const newWindow = window.open();
      newWindow.document.write(customPageContent);
      newWindow.document.close();
    }
  };

  return (

    <Container>
      <Typography variant="h4" gutterBottom mt={10} ml={6}>
        Ozempic semiglutide
      </Typography>
    
    <Box 
      display="flex" flexDirection="column" alignItems="flex-start" mt={1} mb={4}
      ml={6} minHeight="100vh"
    >
      <Typography variant="h6" mb={2} mt="10vh" mr={15}>
        Select Your Country
      </Typography>
      
      <FormControl variant="outlined" sx={{ minWidth: 300, mb: 2 }} size="small">
        <Select
          value={country}
          onChange={handleCountryChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Country' }}
        >
          <MenuItem value="">
            <em>Select Country</em>
          </MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '11%', backgroundColor: '#2A918B'}}>
        Submit
      </Button>
    </Box>
    </Container>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        
      }}
    >
      <Box display="flex" justifyContent="center" gap={4}>
        <Link href="/about" color="inherit" underline="hover">
          About
        </Link>
        <Link href="/contact" color="inherit" underline="hover">
          Contact
        </Link>
        <Link href="/privacy" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        <Link href="/terms" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Box>
      <Typography variant="body2" color="textSecondary" align="center" mt={1}>
        &copy; {new Date().getFullYear()} Test Platform. All rights reserved.
      </Typography>
    </Box>
  );
};

function App() {
  return (
    <div>
    <Header />
    <CountrySelector />
    <Footer />
    </div>
  );
}

export default App;
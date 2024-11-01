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

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLanguageMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
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
    alert(`Selected Country: ${country}`);
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      mt={4} 
      mb={4}
    >
      <Typography variant="h6" mb={2}>
        Select Your Country
      </Typography>
      
      <FormControl variant="outlined" sx={{ minWidth: 200, mb: 2 }}>
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

      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
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
    <h1>Hello React!</h1>
    <CountrySelector />
    <Footer />
    </div>
  );
}

export default App;
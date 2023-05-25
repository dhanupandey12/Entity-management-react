import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#0d7b97',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
});

const NavBar = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
          Entity Management
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;

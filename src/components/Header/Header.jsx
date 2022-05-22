import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box, TextField } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";


const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant='h6' className={classes.title}>
            Explore places
          </Typography>
          {/* <Autocomplete> */}
          <div className={classes.search} >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              className={{root: classes.inputRoot, input: classes.inputInput}}
              style={{ color: 'white' }}
            />
            <div className={classes.searchIcon}>
            <SearchIcon />
            </div>
           
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;


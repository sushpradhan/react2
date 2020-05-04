import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';

import { withRouter } from "react-router";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      }
}));



 function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" align="left" className={classes.title} >
            News
          </Typography>
         
          <Button color="inherit"><b>Home</b></Button>
        <InfoIcon><Button color="inherit" component={RouterLink} to="/ReadNow"><b>ReadNow</b></Button></InfoIcon>  
          <Button color="inherit"><b>Register</b></Button>
          <Button color="inherit"><b>Login</b></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default  withRouter(ButtonAppBar);

 
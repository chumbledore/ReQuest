import useStyles from "../stylesHook";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Ticket Dashboard
        </Typography>
        <IconButton edge="end" color="inherit">
          <AddCircleOutlineIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
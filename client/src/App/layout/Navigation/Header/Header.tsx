import useStyles from "../../../stylesHook";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness1Icon from "@material-ui/icons/Brightness1";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { uiActions } from "../../../store/ui-slice";
import { Link as RouterLink } from "react-router-dom";

export const Header = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const lightDarkThemeIcon = useAppSelector((state) => state.ui.useDarkTheme);
  const open = useAppSelector((state) => state.ui.sideDrawerOpen);

  const themeToggleHandler = () => {
    dispatch(uiActions.toggleTheme());
  };

  const openSideDrawerHandler = () => {
    dispatch(uiActions.toggleSideDrawer());
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      color="inherit"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openSideDrawerHandler}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link color="inherit" component={RouterLink} to="/tickets">
            Ticket Dashboard
          </Link>
        </Typography>
        <Box border={1} borderRadius={16} className={classes.headerBox}>
          <Typography variant="h5" className={classes.title}>
            <Link color="inherit" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </Box>
        <IconButton edge="end" color="inherit" onClick={themeToggleHandler}>
          {lightDarkThemeIcon ? <Brightness7Icon /> : <Brightness1Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

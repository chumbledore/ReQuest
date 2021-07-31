import useStyles from "../../../stylesHook";
import clsx from "clsx";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness1Icon from "@material-ui/icons/Brightness1";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { uiActions } from "../../../store/ui-slice";

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
          Ticket Dashboard
        </Typography>
        <IconButton edge="end" color="inherit" onClick={themeToggleHandler}>
          {lightDarkThemeIcon ? <Brightness7Icon /> : <Brightness1Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

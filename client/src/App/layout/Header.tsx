import useStyles from "../stylesHook";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness1Icon from '@material-ui/icons/Brightness1';

import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { uiActions } from '../store/ui-slice';

function Header() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const lightDarkThemeIcon = useAppSelector(state => state.ui.useDarkTheme);

  const themeToggleHandler = () => {
    dispatch(uiActions.toggleTheme());
  };


  return (
    <AppBar position="static" color="inherit">
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
        <IconButton edge="end" color="inherit"  onClick={themeToggleHandler}>
          {lightDarkThemeIcon ? <Brightness7Icon /> : <Brightness1Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

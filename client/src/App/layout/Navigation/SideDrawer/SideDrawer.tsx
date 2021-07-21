import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from '../../../stylesHook';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { uiActions } from '../../../store/ui-slice';

const SideDrawer = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const open = useAppSelector(state => state.ui.sideDrawerOpen);

  const openSideDrawerHandler = () => {
    dispatch(uiActions.toggleSideDrawer());
  }

    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={openSideDrawerHandler}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <ListItem button >
            <ListItemIcon></ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
        </ListItem>
        </List>
      </Drawer>
    )
}

export default SideDrawer;

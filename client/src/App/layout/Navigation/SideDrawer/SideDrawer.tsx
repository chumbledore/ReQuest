import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useStyles from "../../../stylesHook";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { uiActions } from "../../../store/ui-slice";
import { NavLink, Route } from "react-router-dom";
import Routes from "../../../routes/Routes";

export const SideDrawer = (props: any) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const open = useAppSelector((state) => state.ui.sideDrawerOpen);

  const toggleSideDrawerHandler = () => {
    dispatch(uiActions.toggleSideDrawer());
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  };

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
        <IconButton onClick={toggleSideDrawerHandler}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {Routes.map((prop, key) => {
          return (
            <NavLink
              to={prop.path}
              style={{ textDecoration: "none" }}
              key={key}
            >
              <ListItem color="inherit" button>
                <ListItemIcon></ListItemIcon>
                <ListItemText color="inherit">{prop.sideBarName}</ListItemText>
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </Drawer>
  );
};

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
import { NavLink } from "react-router-dom";
import Routes from "../../../routes/Routes";
import { Box } from "@material-ui/core";

export const SideDrawer = (props: any) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const classes = useStyles();
  const open = useAppSelector((state) => state.ui.sideDrawerOpen);

  const toggleSideDrawerHandler = () => {
    dispatch(uiActions.toggleSideDrawer());
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
      <List disablePadding>
        {Routes.map((prop, key) => {
          return (
            <Box borderTop={1} borderBottom={1}>
              <ListItem
                color="inherit"
                button
                component={NavLink}
                to={prop.path}
                exact
                key={key}
              >
                <ListItemIcon>{prop.routeIcon}</ListItemIcon>
                <ListItemText color="inherit">{prop.sideBarName}</ListItemText>
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Drawer>
  );
};

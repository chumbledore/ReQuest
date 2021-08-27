import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(12, 0, 6),
    },
    root: {
      flexGrow: 1,
    },
    tabsContainer: {
      margin: theme.spacing(8, 0, 6),
    },
    tabsRoot: {
      backgroundColor: theme.palette.background.paper,
      width: theme.spacing(120),
      flexGrow: 1,
      marginLeft: "auto",
      marginRight: "auto",
    },
    tabAppBar: {
      color: "#212121",
    },
    tabTextField: {
      marginBottom: theme.spacing(2),
    },
    tabButton: {
      margin: theme.spacing(0, 28, 0, 28),
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: "none",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    divider: {
      marginBottom: theme.spacing(2),
    },
    cardContent: {
      flexGrow: 1,
      paddingBottom: 0,
    },
    cardActions: {
      padding: theme.spacing(2, 0, 0),
      justifyContent: "center",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(48),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    welcome: {
      marginLeft: 200,
    },
    headerBox: {
      padding: theme.spacing(1, 4),
      marginRight: theme.spacing(1),
    },
    formContainer: {
      margin: theme.spacing(0, 24, 0, 24),
    },
  })
);

export default useStyles;

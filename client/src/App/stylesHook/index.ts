import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4, 0, 6),
    },
    root: {
      flexGrow: 1,
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
      padding: theme.spacing(4, 0, 0),
      justifyContent: "center",
    },
  })
);

export default useStyles;

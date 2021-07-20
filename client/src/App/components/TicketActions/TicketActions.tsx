import { CardActions, Button } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";
import useStyles from "../../stylesHook";

const CompromiseButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    "&:hover": {
      backgroundColor: amber[700],
    },
  },
}))(Button);

function TicketActions() {
  const classes = useStyles();
  return (
    <>
      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="secondary">
          Deny
        </Button>
        <CompromiseButton size="small" variant="contained" color="primary">
          Edit
        </CompromiseButton>
        <Button size="small" variant="contained" color="primary">
          Confirm
        </Button>
      </CardActions>
    </>
  );
}

export default TicketActions;

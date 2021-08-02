import { CardActions, Button } from "@material-ui/core";
import { withStyles, Theme } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";
import useStyles from "../../stylesHook";
import { useAppDispatch } from "../../store/hooks";
import { ticketActions } from "../../store/tickets/ticket-slice";
import { uiActions } from "../../store/ui-slice";

const CompromiseButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    "&:hover": {
      backgroundColor: amber[700],
    },
  },
}))(Button);

interface Props {
  ticketId: string | undefined;
}

export const TicketCardButtons = ({ ticketId }: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const selectTicket = (id: string | undefined) => {
    dispatch(ticketActions.selectTicketForEdit(id));
    dispatch(uiActions.toggleShowTicketDialog());
  };

  const handleTicketDeletion = (id: string | undefined) => {
    dispatch(ticketActions.deleteTicket(id));
  };

  return (
    <>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => handleTicketDeletion(ticketId)}
        >
          Deny
        </Button>
        <CompromiseButton
          size="small"
          variant="contained"
          color="primary"
          onClick={() => selectTicket(ticketId)}
        >
          Edit
        </CompromiseButton>
        <Button size="small" variant="contained" color="primary">
          Confirm
        </Button>
      </CardActions>
    </>
  );
};

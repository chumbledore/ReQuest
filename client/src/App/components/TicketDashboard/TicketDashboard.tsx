import { Typography, Container, IconButton } from "@material-ui/core";
import { TicketList } from "../TicketList";
import { TicketModal } from "../TicketModal";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useAppDispatch } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

import useStyles from "../../stylesHook";
import { ticketActions } from "../../store/tickets/ticket-slice";

export const TicketDashboard = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const toggleNewTicketDialog = () => {
    dispatch(ticketActions.selectTicketForEdit(null));
    dispatch(uiActions.toggleShowTicketDialog());
  };

  return (
    <>
      <TicketModal />
      <div className={classes.container}>
        <Container maxWidth="xs">
          <Typography variant="h3" align="center">
            Welcome, Admin.
            <IconButton color="inherit" onClick={toggleNewTicketDialog}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Typography>
        </Container>
      </div>
      <TicketList />
    </>
  );
};

// Edit or create ticket form modal
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";
import { ChangeEvent } from "react";
import { ticketActions } from "../../store/ticket-slice";
// import { ticketActions } from "../../store/ticket-slice";
// import { Ticket } from "../../viewmodels/ticketResponseVM";

export const TicketModal = () => {
  const open = useAppSelector((state) => state.ui.showTicketModal);
  const dispatch = useAppDispatch();

  const toggleTicketDialog = () => {
    dispatch(uiActions.toggleShowTicketDialog());
  };

  // const selectedTicket = useAppSelector((state) => state.ticket.selectedTicket);

  // const initialState = selectedTicket ?? {
  //   id: "",
  //   location: "",
  //   machineId: "",
  //   ticketSubject: "",
  //   ticketBody: "",
  // };

  const newTicket = useAppSelector((state) => state.ticket.newTicket);

  // const [ticket, setTicket] = useState(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(ticketActions.newTicketCreationHandler({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(ticketActions.addNewTicketToList());
  };

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={() => toggleTicketDialog()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create or Edit a Ticket
          </DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                autoFocus
                margin="dense"
                id="location"
                name="location"
                label="Location"
                type="text"
                value={newTicket.location}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="dense"
                id="machineId"
                name="machineId"
                label="Machine ID"
                type="number"
                value={newTicket.machineId}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="dense"
                id="ticketSubject"
                name="ticketSubject"
                label="Subject"
                type="text"
                value={newTicket.ticketSubject}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="dense"
                id="ticketBody"
                name="ticketBody"
                label="Ticket Body"
                type="text"
                value={newTicket.ticketBody}
                onChange={handleInputChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => toggleTicketDialog()} color="inherit">
              Cancel
            </Button>
            <Button
              onClick={() => handleSubmit()}
              color="inherit"
              type="submit"
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

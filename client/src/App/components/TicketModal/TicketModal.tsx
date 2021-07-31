// Edit or create ticket form modal
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";
import { ChangeEvent, useState } from "react";
// import { ticketActions } from "../../store/ticket-slice";
// import { Ticket } from "../../viewmodels/ticketResponseVM";

export const TicketModal = () => {
  const open = useAppSelector((state) => state.ui.showTicketModal);
  const dispatch = useAppDispatch();

  const toggleTicketDialog = () => {
    dispatch(uiActions.toggleShowTicketDialog());
  };

  const selectedTicket = useAppSelector((state) => state.ticket.selectedTicket);

  const initialState = selectedTicket ?? {
    id: "",
    location: "",
    machineId: "",
    ticketSubject: "",
    ticketBody: "",
  };

  const [ticket, setTicket] = useState(initialState);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  };

  const handleSubmit = () => {};

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
                value={ticket.location}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="dense"
                id="machineId"
                name="machineId"
                label="Machine ID"
                type="text"
                value={ticket.machineId}
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
                value={ticket.ticketSubject}
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
                value={ticket.ticketBody}
                onChange={handleInputChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => toggleTicketDialog()} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => toggleTicketDialog()}
              color="primary"
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

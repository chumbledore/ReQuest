// Edit or create ticket form modal
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

export const TicketModal = () => {
  const open = useAppSelector((state) => state.ui.showTicketModal);
  const dispatch = useAppDispatch();

  const toggleTicketDialog = () => {
    dispatch(uiActions.toggleShowTicketDialog);
  };
  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={toggleTicketDialog}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleTicketDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={toggleTicketDialog} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

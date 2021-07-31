import { Typography, Container } from "@material-ui/core";
import { TicketList } from "../TicketList";
import { TicketModal } from "../TicketModal";

import useStyles from "../../stylesHook";

const TicketDashboard = () => {
  const classes = useStyles();

  return (
    <>
      <TicketModal />
      <div className={classes.container}>
        <Container maxWidth="xs">
          <Typography variant="h3" align="center">
            Welcome, Admin.
          </Typography>
        </Container>
      </div>
      <TicketList />
    </>
  );
};

export default TicketDashboard;

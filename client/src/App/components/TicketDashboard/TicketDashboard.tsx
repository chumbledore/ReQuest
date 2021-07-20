import { Typography, Container } from "@material-ui/core";
import TicketList from "../TicketList/TicketList";

import useStyles from "../../stylesHook";

const TicketDashboard = () => {

  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center">Welcome, Admin.</Typography>
      </Container>
    </div>
    <TicketList />
    </>
  );
};

export default TicketDashboard;

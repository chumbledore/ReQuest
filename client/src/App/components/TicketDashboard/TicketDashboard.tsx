import { Typography, Container } from "@material-ui/core";
import clsx from 'clsx';
import TicketList from "../TicketList/TicketList";

import useStyles from "../../stylesHook";
import { useAppSelector } from "../../store/hooks/hooks";

const TicketDashboard = () => {
  const open = useAppSelector(state => state.ui.sideDrawerOpen);
  const classes = useStyles();

  return (
    <>
    <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center">Welcome, Admin.</Typography>
      </Container>
    </div>
    <TicketList />
    </main>
    </>
  );
};

export default TicketDashboard;

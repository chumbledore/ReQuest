import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import useStyles from "../../stylesHook";
import { Ticket } from "../../viewmodels/ticketResponseVM";
import TicketActions from "../TicketActions/TicketActions";

const DUMMY_TICKETS: Ticket[] = [
  {
    location: "CKNA",
    machineId: 99717,
    ticketSubject: "Maintenance",
    ticketBody: "Broken Card Reader",
    date: Date.now().toString(),
  },
  {
    location: "Multimatic",
    machineId: 1,
    ticketSubject: "Merchandising",
    ticketBody: "Replace Reese's with Zagnuts",
    date: Date.now().toString(),
  },
  {
    location: "ICP",
    machineId: 89134,
    ticketSubject: "Merchandising",
    ticketBody: "General Merchandising",
    date: Date.now().toString(),
  },
  {
    location: "CKNA",
    machineId: 99717,
    ticketSubject: "Maintenance",
    ticketBody: "Broken Card Reader",
    date: Date.now().toString(),
  },
  {
    location: "CKNA",
    machineId: 99717,
    ticketSubject: "Maintenance",
    ticketBody: "Broken Card Reader",
    date: Date.now().toString(),
  },
  {
    location: "CKNA",
    machineId: 99717,
    ticketSubject: "Maintenance",
    ticketBody: "Broken Card Reader",
    date: Date.now().toString(),
  },
];

const TicketList = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {DUMMY_TICKETS.map((ticket) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5" color="textPrimary" align="center">
                    {ticket.location}: {ticket.machineId}
                  </Typography>
                  <Divider
                    orientation="horizontal"
                    className={classes.divider}
                  />
                  <Typography align="center">{ticket.ticketSubject}</Typography>
                  <Typography align="center">{ticket.ticketBody}</Typography>
                  <Typography align="center" gutterBottom>{ticket.date}</Typography>
                  <TicketActions />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TicketList;

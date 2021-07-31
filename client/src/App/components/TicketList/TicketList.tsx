import {
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  Divider,
} from "@material-ui/core";
import useStyles from "../../stylesHook";
import { useAppSelector } from "../../store/hooks";
import { TicketCardButtons } from "../TicketCardButtons";

export const TicketList = () => {
  const tickets = useAppSelector((state) => state.ticket.tickets);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md">
        <Grid container direction="row" spacing={4} alignItems="center">
          {tickets.map((ticket) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
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
                  <Typography align="center" gutterBottom>
                    {ticket.date}
                  </Typography>
                  <TicketCardButtons />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

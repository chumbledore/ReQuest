import useStyles from "../../stylesHook";
import clsx from "clsx";
import { useAppSelector } from "../../store/hooks";
import { Container, Typography } from "@material-ui/core";

export default function WelcomePage() {
  const classes = useStyles();
  const open = useAppSelector((state) => state.ui.sideDrawerOpen);
  return (
    <Container className={classes.root} maxWidth="xl">
      <Container
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Typography variant="h3" align="center">
          Welcome to Request
        </Typography>
      </Container>
    </Container>
  );
}

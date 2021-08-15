import useStyles from "../../stylesHook";
import clsx from "clsx";
import { useAppSelector } from "../../store/hooks";
import { Fade, Typography } from "@material-ui/core";

export function WelcomePage() {
  const classes = useStyles();
  const open = useAppSelector((state) => state.ui.sideDrawerOpen);
  const fadeIn = true;
  return (
    <div className={classes.welcome}>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Fade in={fadeIn} timeout={{ enter: 1500 }}>
          <Typography variant="h3" align="center">
            Welcome to Request
          </Typography>
        </Fade>
      </div>
    </div>
  );
}

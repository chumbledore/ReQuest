import { Typography } from "@material-ui/core";
import useStyles from "../../../stylesHook";

export const RegisterForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1" align="center">
        Hello World!
      </Typography>
    </div>
  );
};

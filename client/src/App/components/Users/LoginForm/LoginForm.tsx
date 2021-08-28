import { Box, Button, TextField } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/users/user-actions";
import { userActions } from "../../../store/users/user-slice";
import useStyles from "../../../stylesHook";

export const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.loginUser);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(userActions.registerFormInputHandler({ name, value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <>
      <div className={classes.container}>
        <form
          className={classes.formContainer}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Box>
            <TextField
              label="Email"
              autoFocus
              variant="outlined"
              name="email"
              value={user.email}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={user.password}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
            />
            <Button
              variant="outlined"
              type="submit"
              onClick={handleSubmit}
              className={classes.tabButton}
            >
              Login
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

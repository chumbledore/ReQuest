import { Box, Button, TextField } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../../../store/users/user-actions";
import { userActions } from "../../../store/users/user-slice";
import useStyles from "../../../stylesHook";
import { UserForm } from "../../../viewmodels/userVM";
import { LoginFormValidator } from "./LoginFormValidator";

export const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.loginUser);

  const [formErrors, setFormErrors] = useState<UserForm>();

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(userActions.loginFormInputHandler({ name, value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const temp = LoginFormValidator(user);
    const isValidated = Object.values(temp).every((x) => x === "");

    if (isValidated) dispatch(login(user));

    setFormErrors({
      ...temp,
    });
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
              autoComplete="off"
              required
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && { error: true, helperText: formErrors.email })}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={user.password}
              fullWidth
              autoComplete="off"
              required
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && {
                error: true,
                helperText: formErrors.password,
              })}
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

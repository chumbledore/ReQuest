import { Box, Button, TextField } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { register } from "../../../store/users/user-actions";
import { userActions } from "../../../store/users/user-slice";
import useStyles from "../../../stylesHook";

export const RegisterForm = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.registerUser);
  const formErrors = useAppSelector((state) => state.user.formErrors);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(userActions.registerFormInputHandler({ name, value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(user.password !== user.confirmPassword) return;
    dispatch(register(user));
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
              label="First Name"
              autoFocus
              variant="outlined"
              name="firstName"
              value={user.firstName}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && { error: true, helperText: formErrors.FirstName })}
            />
            <TextField
              label="Last Name"
              autoFocus
              variant="outlined"
              name="lastName"
              value={user.lastName}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && { error: true, helperText: formErrors.LastName })}
            />
            <TextField
                label="User Name"
                autoFocus
                variant="outlined"
                name="userName"
                value={user.userName}
                fullWidth
                onChange={handleInputChange}
                className={classes.tabTextField}
                {...(formErrors && { error: true, helperText: formErrors.UserName })}
            />
            <TextField
              label="Region"
              autoFocus
              variant="outlined"
              name="region"
              value={user.region}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && { error: true, helperText: formErrors.Region })}
            />
            <TextField
              label="Email"
              autoFocus
              variant="outlined"
              name="email"
              value={user.email}
              fullWidth
              onChange={handleInputChange}
              className={classes.tabTextField}
              {...(formErrors && { error: true, helperText: formErrors.Email })}
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
              {...(formErrors && { error: true, helperText: formErrors.Password })}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
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

import { Button, TextField } from "@material-ui/core";
import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { userActions } from "../../../store/users/user-slice";
import useStyles from "../../../stylesHook";

export const LoginForm = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    dispatch(userActions.userFormInputHandler({ name, value }));
  };

  const handleSubmit = () => {
    console.log("submitting");
  };

  return (
    <>
      <div className={classes.container}>
        <form className={classes.formContainer} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            autoFocus
            variant="outlined"
            name="email"
            value={user.email}
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={user.password}
            fullWidth
            onChange={handleInputChange}
          />
          <Button variant="outlined" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

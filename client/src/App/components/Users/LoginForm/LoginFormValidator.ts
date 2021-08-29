import { UserForm } from "../../../viewmodels/userVM";

export const LoginFormValidator = (values: UserForm) => {
  let loginValidationSchema: UserForm = { email: "", password: "" };

  loginValidationSchema.email = /.+@.+..+/.test(values.email)
    ? ""
    : "Invalid email.";

  loginValidationSchema.password = /[^\W_]/.test(values.password)
    ? ""
    : "Invalid password.";

  return loginValidationSchema;
};

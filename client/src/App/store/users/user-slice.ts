import { createSlice } from "@reduxjs/toolkit";
import { User, UserForm } from "../../viewmodels/userVM";

const loginUserTemplate = {
  email: "",
  password: "",
};

const registerUserTemplate = {
  firstName: "",
  lastName: "",
  userName: "",
  region: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface userState {
  currentUser: User | null;
  loginUser: UserForm;
  registerUser: UserForm;
  isLoggedIn: boolean;
  formErrors: UserForm | null;
}

const initialState: userState = {
  currentUser: null,
  loginUser: loginUserTemplate,
  registerUser: registerUserTemplate,
  isLoggedIn: false,
  formErrors: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginFormInputHandler(state, action) {
      const { name, value } = action.payload;
      state.loginUser = { ...state.loginUser, [name]: value };
    },
    registerFormInputHandler(state, action) {
      const { name, value } = action.payload;
      state.registerUser = { ...state.registerUser, [name]: value };
    },
    setIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    // Work on error handling for forms
    setFormErrors(state, action) {
      const errors = action.payload;

      const newFormErrors = {
        firstName: errors.FirstName[0],
        lastName: errors.LastName[0],
        userName: errors.UserName[0],
        region: errors.Region[0],
        email: errors.Email[0],
        password: errors.Password[0],
        confirmPassword: undefined
      };

      state.formErrors = newFormErrors;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;

import { createSlice } from "@reduxjs/toolkit";
import {Errors, User, UserForm} from "../../viewmodels/userVM";

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
  formErrors: Errors | null;
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
    clearFormErrors(state){
      state.formErrors = null;
    },
    setFormErrors(state, action) {
      state.formErrors = action.payload;
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;

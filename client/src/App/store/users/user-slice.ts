import { createSlice } from "@reduxjs/toolkit";
import { User, UserForm } from "../../viewmodels/userVM";

const UserTemplate = {
  email: "",
  password: "",
};

interface userState {
  currentUser: User | null;
  loginUser: UserForm;
  registerUser: UserForm;
  isLoggedIn: boolean;
  formErrors: object;
}

const initialState: userState = {
  currentUser: null,
  loginUser: UserTemplate,
  registerUser: UserTemplate,
  isLoggedIn: false,
  formErrors: {},
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
      state.registerUser = { ...state.loginUser, [name]: value };
    },
    setIsLoggedIn(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setFormErrors(state, action) {
      
    }
  },
});

export const userActions = userSlice.actions;

export default userSlice;

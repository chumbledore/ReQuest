import { createSlice } from "@reduxjs/toolkit";
import { User, UserForm } from "../../viewmodels/userVM";

const UserTemplate = {
  email: "",
  password: "",
};

interface userState {
  currentUser: User | null;
  user: UserForm;
  isLoggedIn: boolean;
}

const initialState: userState = {
  currentUser: null,
  user: UserTemplate,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userFormInputHandler(state, action) {
      const { name, value } = action.payload;
      state.user = { ...state.user, [name]: value };
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

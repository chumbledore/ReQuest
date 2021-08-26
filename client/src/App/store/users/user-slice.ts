import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../viewmodels/userVM";

interface userState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: userState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;

export default userSlice;

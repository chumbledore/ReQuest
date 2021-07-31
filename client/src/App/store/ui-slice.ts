import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  useDarkTheme: boolean;
  sideDrawerOpen: boolean;
  showTicketModal: boolean;
}

const initialState: uiState = {
  useDarkTheme: true,
  sideDrawerOpen: false,
  showTicketModal: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.useDarkTheme = !state.useDarkTheme;
    },
    toggleSideDrawer(state) {
      state.sideDrawerOpen = !state.sideDrawerOpen;
    },
    toggleShowTicketDialog(state) {
      state.showTicketModal = !state.showTicketModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

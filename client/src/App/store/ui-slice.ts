import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  useDarkTheme: boolean;
  sideDrawerOpen: boolean;
  showTicketModal: boolean;
  slideInTab: boolean;
}

const initialState: uiState = {
  useDarkTheme: true,
  sideDrawerOpen: false,
  showTicketModal: false,
  slideInTab: false,
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
    toggleTabSlide(state) {
      state.slideInTab = !state.slideInTab;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

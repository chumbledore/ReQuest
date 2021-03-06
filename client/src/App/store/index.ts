import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import ticketSlice from "./tickets/ticket-slice";
import userSlice from "./users/user-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    ticket: ticketSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

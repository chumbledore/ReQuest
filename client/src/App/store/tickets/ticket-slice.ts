import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../../viewmodels/ticketResponseVM";

interface ticketState {
  tickets: Ticket[];
  newTicket: Ticket;
  selectedTicket: Ticket | undefined;
}

const newTicketTemplate = {
  id: "",
  location: "",
  machineID: 0,
  ticketSubject: "",
  ticketBody: "",
};

const initialState: ticketState = {
  tickets: [],
  newTicket: newTicketTemplate,
  selectedTicket: undefined,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    getTickets(state, action) {
      const ticketListFromDatabase = action.payload;
      state.tickets = ticketListFromDatabase;
    },
    selectTicketForEdit(state, action) {
      const id: string = action.payload;
      state.selectedTicket = state.tickets.find((x) => x.id === id);
      if (state.selectedTicket !== undefined) {
        state.newTicket = state.selectedTicket;
      } else {
        state.newTicket = newTicketTemplate;
      }
    },
    ticketModalInputHandler(state, action) {
      const { name, value } = action.payload;
      state.newTicket = { ...state.newTicket, [name]: value };
    },
    createTicketInState(state, action) {
      const ticket = action.payload;
      state.tickets.push(ticket);
    },
    updateTicketInState(state, action) {
      const ticket = action.payload;
      const returnPosition = state.tickets.findIndex(
        (tickets) => tickets.id === ticket.id
      );
      state.tickets[returnPosition] = ticket;
    },
    deleteTicket(state, action) {
      const id = action.payload;
      state.tickets = state.tickets.filter((ticket) => ticket.id !== id);
    },
  },
});

export const ticketActions = ticketSlice.actions;

export default ticketSlice;

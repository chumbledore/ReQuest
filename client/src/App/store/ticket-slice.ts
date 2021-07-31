import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../viewmodels/ticketResponseVM";

interface ticketState {
  tickets: Ticket[];
  newTicket: Ticket | undefined;
  selectedTicket: Ticket | undefined;
}

const DUMMY_DATA: Ticket[] = [
  {
    id: "1",
    location: "CKNA",
    machineId: 99717,
    ticketSubject: "Maintenance",
    ticketBody: "Broken Card Reader",
    date: Date.now().toString(),
  },
  {
    id: "2",
    location: "Multimatic",
    machineId: 1,
    ticketSubject: "Merchandising",
    ticketBody: "Replace Reese's with Zagnuts",
    date: Date.now().toString(),
  },
  {
    id: "3",
    location: "ICP",
    machineId: 89134,
    ticketSubject: "Merchandising",
    ticketBody: "General Merchandising",
    date: Date.now().toString(),
  },
  {
    id: "4",
    location: "Lewisburg Printing",
    machineId: 1,
    ticketSubject: "Maintenance",
    ticketBody: "Bill Jam",
    date: Date.now().toString(),
  },
  {
    id: "5",
    location: "CKNA DC Front",
    machineId: 89305,
    ticketSubject: "Merchandising",
    ticketBody: "Replace Doritos with Cheez-its",
    date: Date.now().toString(),
  },
  {
    id: "6",
    location: "CKNA",
    machineId: 8595,
    ticketSubject: "Maintenance",
    ticketBody: "AC Unit out",
    date: Date.now().toString(),
  },
];

// const DUMMY_SELECTED_TICKET = {
//   id: "6",
//   location: "CKNA",
//   machineId: 8595,
//   ticketSubject: "Maintenance",
//   ticketBody: "AC Unit out",
//   date: Date.now().toString(),
// };

const initialState: ticketState = {
  tickets: DUMMY_DATA,
  newTicket: undefined,
  selectedTicket: undefined,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    selectTicketForEdit(state, action) {
      const id = action.payload;
      const foundTicket = state.tickets.find((ticket) => ticket.id === id);
      state.selectedTicket = foundTicket;
    },
  },
});

export const ticketActions = ticketSlice.actions;

export default ticketSlice;

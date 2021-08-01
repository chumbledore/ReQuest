import { createSlice } from "@reduxjs/toolkit";
import { Ticket } from "../viewmodels/ticketResponseVM";
import { v4 as uuidv4 } from "uuid";

interface ticketState {
  tickets: Ticket[];
  newTicket: Ticket;
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
const newTicket = {
  id: "",
  location: "",
  machineId: 0,
  ticketSubject: "",
  ticketBody: "",
  date: "",
};

const initialState: ticketState = {
  tickets: DUMMY_DATA,
  newTicket,
  selectedTicket: undefined,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    selectTicketForEdit(state, action) {
      const id: string = action.payload;
      const foundTicket = state.tickets.find((ticket) => ticket.id === id);
      state.selectedTicket = foundTicket;
    },
    newTicketCreationHandler(state, action) {
      const { name, value } = action.payload;
      state.newTicket = { ...state.newTicket, [name]: value };
    },
    addNewTicketToList(state) {
      const ticketToAdd = state.newTicket;
      ticketToAdd.id = uuidv4();
      ticketToAdd.date = Date.now().toString();
      state.tickets = [...state.tickets, ticketToAdd];
    },
    deleteTicket(state, action) {
      const id = action.payload;
      state.tickets = state.tickets.filter((ticket) => ticket.id !== id);
    },
  },
});

export const ticketActions = ticketSlice.actions;

export default ticketSlice;

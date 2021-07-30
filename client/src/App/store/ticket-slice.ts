import { createSlice } from '@reduxjs/toolkit';
import { Ticket } from '../viewmodels/ticketResponseVM';

interface ticketState {
    tickets: Ticket[],
}

const DUMMY_DATA: Ticket[] = [
    {
      location: "CKNA",
      machineId: 99717,
      ticketSubject: "Maintenance",
      ticketBody: "Broken Card Reader",
      date: Date.now().toString(),
    },
    {
      location: "Multimatic",
      machineId: 1,
      ticketSubject: "Merchandising",
      ticketBody: "Replace Reese's with Zagnuts",
      date: Date.now().toString(),
    },
    {
      location: "ICP",
      machineId: 89134,
      ticketSubject: "Merchandising",
      ticketBody: "General Merchandising",
      date: Date.now().toString(),
    },
    {
      location: "Lewisburg Printing",
      machineId: 1,
      ticketSubject: "Maintenance",
      ticketBody: "Bill Jam",
      date: Date.now().toString(),
    },
    {
      location: "CKNA DC Front",
      machineId: 89305,
      ticketSubject: "Merchandising",
      ticketBody: "Replace Doritos with Cheez-its",
      date: Date.now().toString(),
    },
    {
      location: "CKNA",
      machineId: 8595,
      ticketSubject: "Maintenance",
      ticketBody: "AC Unit out",
      date: Date.now().toString(),
    },
  ]

const initialState: ticketState = {
    tickets: DUMMY_DATA,
}

const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        
    }
})

export const ticketActions = ticketSlice.actions;

export default ticketSlice;
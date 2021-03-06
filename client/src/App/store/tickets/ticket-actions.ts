import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { Ticket } from "../../viewmodels/ticketResponseVM";
import { ticketActions } from "./ticket-slice";
import { v4 as uuidv4 } from "uuid";

export const getTicketsFromDatabase = () => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await agent.Tickets.list();

      if (!response.success) {
        throw new Error("Could not fetch from server...");
      }
      const tickets = response.data;
      tickets.forEach(ticket => {
        if (ticket.date === undefined) return;
        ticket.date = ticket.date.split('T')[0];
      })
      return response.data;
    };

    try {
      const ticketList = await sendRequest();
      dispatch(ticketActions.getTickets(ticketList));
    } catch (error) {
      throw new Error("Something went wrong...");
    }
  };
};

export const createOrEditTicketInDatabase = (ticket: Ticket) => {
  return async (dispatch: Dispatch) => {
    const postRequest = async (ticket: Ticket) => {
      const response = agent.Tickets.createNewTicket(ticket);

      if (!response) {
        throw new Error("Could not reach server");
      }
    };

    const putRequest = async (ticket: Ticket) => {
      const response = agent.Tickets.updateTicket(ticket);

      if (!response) {
        throw new Error("Could not reach server");
      }
    };

    if (ticket.id) {
      dispatch(ticketActions.updateTicketInState(ticket));
      return await putRequest(ticket);
    }

    const ticketToAdd = { ...ticket };
    ticketToAdd.id = uuidv4();
    dispatch(ticketActions.createTicketInState(ticketToAdd));
    return await postRequest(ticketToAdd);
  };
};

export const deleteTicketFromDatabase = (id: string) => {
  return async (dispatch: Dispatch) => {
    const deleteRequest = async (id: string) => {
      await agent.Tickets.delete(id);
    };
    try {
      await deleteRequest(id);

      return dispatch(ticketActions.deleteTicket(id));
    } catch (error) {
      throw new Error(error);
    }
  };
};

import { Dispatch } from "@reduxjs/toolkit";
import agent from "../../api/agent";
import { ticketActions } from "./ticket-slice";

export const getTicketsFromDatabase = () => {
  return async (dispatch: Dispatch) => {
    const sendRequest = async () => {
      const response = await agent.Tickets.list();

      if (!response.success) {
        throw new Error("Could not fetch from server...");
      }
      console.log(response.data);
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

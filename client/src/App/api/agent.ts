import { Ticket, Response } from '../viewmodels/ticketResponseVM';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Tickets = {
    list: () => requests.get<Response>('/Tickets'),
    getTicket: (id: string) => requests.get<Ticket>(`/Tickets/${id}`),
    createNewTicket: (ticket: Ticket) => axios.post<void>('/Tickets', ticket),
    updateTicket: (ticket: Ticket) => axios.put<void>(`/Tickets/${ticket.id}`, ticket),
    delete: (id: string) => axios.delete<void>(`/Tickets/${id}`)
}

const agent = {
    Tickets
}

export default agent
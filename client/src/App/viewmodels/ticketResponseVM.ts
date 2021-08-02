export interface Ticket {
  id?: string;
  location?: string;
  machineID?: number;
  ticketSubject?: string;
  ticketBody?: string;
  status?: boolean;
  compromise?: boolean;
  date?: string;
}

export interface Response {
  data: Ticket[];
  success: boolean;
  message: string;
}

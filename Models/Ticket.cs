using System;

namespace Models
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public string Location { get; set; }
        public int MachineID { get; set; } = 00000;
        public string TicketSubject { get; set; }
        public string TicketBody { get; set; }
        public DateTime Date { get; set; }
    }
}
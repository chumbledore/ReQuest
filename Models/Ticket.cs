using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public string Location { get; set; }
        public int MachineID { get; set; } = 00000;
        public string TicketSubject { get; set; }
        public string TicketBody { get; set; }
        public bool Status { get; set; } = false;
        public DateTime Date { get; set; } = DateTime.Now;
        public string UserId { get; set; }
        [ForeignKey(nameof(UserId))]
        public AppUser User { get; set; }
    }
}
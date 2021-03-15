using AutoMapper;
using Models;

namespace App.Core
{
    public class TicketProfiles : Profile
    {
        public TicketProfiles()
        {
            CreateMap<Ticket, Ticket>();
        }
    }
}
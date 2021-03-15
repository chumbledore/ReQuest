using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Database;
using MediatR;
using Models;

namespace App.Tickets
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Ticket Ticket { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
           private readonly DataContext _context;
           private readonly IMapper _mapper;
           public Handler(DataContext context, IMapper mapper)
           {
               _context = context;
               _mapper = mapper;
           } 
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var ticket = await _context.Tickets.FindAsync(request.Ticket.Id);

                _mapper.Map(request.Ticket, ticket);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
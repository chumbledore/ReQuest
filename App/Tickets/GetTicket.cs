using System;
using System.Threading;
using System.Threading.Tasks;
using Database;
using MediatR;
using Models;

namespace App.Tickets
{
    public class GetTicket
    {
        public class Query : IRequest<Ticket>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Ticket>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Ticket> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Tickets.FindAsync(request.Id);
            }
        }    
    }
    
}
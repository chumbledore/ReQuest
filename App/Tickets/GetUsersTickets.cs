using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Database;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;

namespace App.Tickets
{
    public class GetUsersTickets
    {
        public class Query : IRequest<List<Ticket>> { 
            public string Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, List<Ticket>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            
            public async Task<List<Ticket>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Tickets.Where(x => x.UserId == request.Id).ToListAsync();
            }
        }
    }
}
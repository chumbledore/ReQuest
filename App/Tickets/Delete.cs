using System;
using System.Threading;
using System.Threading.Tasks;
using Database;
using MediatR;

namespace App.Tickets
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var ticket = await _context.Tickets.FindAsync(request.Id);

                _context.Remove(ticket);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.Tickets;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace API.Controllers
{
    public class TicketsController : BaseAPIController
    {
        private readonly IMediator _mediator;
        public TicketsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        
        [HttpGet]
        public async Task<ActionResult<TicketResponse<List<Ticket>>>> GetTickets()
        {
            var response = new TicketResponse<List<Ticket>>();

            response.Data = await Mediator.Send(new List.Query());

            return Ok(response);
        }
        
        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketResponse<Ticket>>> GetTicket(Guid id)
        {
            var response = new TicketResponse<Ticket>();

            response.Data = await Mediator.Send(new GetTicket.Query{Id = id});

            return Ok(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateNewTicket(Ticket ticket)
        {
            return Ok(await Mediator.Send(new Create.Command {Ticket = ticket}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditTicket(Guid id, Ticket ticket)
        {
            ticket.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {Ticket = ticket}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicket(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
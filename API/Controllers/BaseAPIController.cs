using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIController : ControllerBase
    {
        /// <summary>
        ///   Initiating mediator in an extendable controller class to reduce redundancy
        /// </summary>
        private IMediator _mediator;

        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
            .GetService<IMediator>();
    }
}
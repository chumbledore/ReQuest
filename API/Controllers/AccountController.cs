using System.Threading.Tasks;
using API.DTOs;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserReturnDTO>> Login(LoginDTO loginDTO){
            var user = await _userManager.FindByEmailAsync(loginDTO.Email);

            if(user == null) return Unauthorized();

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

            if(result.Succeeded)
            {
                return new UserReturnDTO {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Token = "Eventually a token"
                };
            }

            return Unauthorized();
        }
    }
}
using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<AppUser> userManager,
        
        SignInManager<AppUser> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }

    [HttpPost("login")]
    public async Task<ActionResult<UserReturnDTO>> Login(LoginDTO loginDTO)
    {
        var user = await _userManager.FindByEmailAsync(loginDTO.Email);

        if (user == null) return Unauthorized();

        var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

        if (result.Succeeded)
        {
            return CreateUserObject(user);
        }

        return Unauthorized();
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserReturnDTO>> Register(RegisterDTO registerDto)
    {
        if (await _userManager.Users.AnyAsync(x => x.Email == registerDto.Email))
        {
            return BadRequest("That email is already in use");
        };
        var user = new AppUser
        {
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,
            Region = registerDto.Region,
            UserName = registerDto.UserName,
            Email = registerDto.Email
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password);

        if (result.Succeeded)
        {
            return CreateUserObject(user);
        }

        return BadRequest("There was a problem registering a user.");
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<UserReturnDTO>> GetCurrentUser()
    {
        var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

        return CreateUserObject(user);
    }

    private UserReturnDTO CreateUserObject(AppUser user)
    {
        return new UserReturnDTO
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
    }
}
}
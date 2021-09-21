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
    public async Task<ActionResult<UserReturnDto>> Login(LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email);

        var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

        if (result.Succeeded)
        {
            return CreateUserObject(user);
        }

        return Unauthorized();
    }
    
    [HttpPost("register")]
    public async Task<ActionResult<UserReturnDto>> Register(RegisterDto registerDto)
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
    public async Task<ActionResult<UserReturnDto>> GetCurrentUser()
    {
        var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

        return CreateUserObject(user);
    }
    
    private UserReturnDto CreateUserObject(AppUser user)
    {
        return new UserReturnDto
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                UserName = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
    }
}
}
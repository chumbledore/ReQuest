using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Region { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        /// <summary>
        /// Regex for the password should meet the complexity requirement found in the
        /// options of IdentityServiceExtensions
        /// </summary>
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z]).{4,12}$", ErrorMessage = "Password must contain a number, and be between 4 to 12 characters in length.")]
        public string Password { get; set; }
    }
}
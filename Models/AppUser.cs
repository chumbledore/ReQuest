using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Region { get; set; }
        // [JsonIgnore]
        public override string PasswordHash 
        {
            get{ return base.PasswordHash; }
            set{ base.PasswordHash = value; }
        }
    }
}
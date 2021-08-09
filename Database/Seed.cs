using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Database;
using Microsoft.AspNetCore.Identity;

namespace Models
{
    public  class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager){

            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{UserName = "test", Email="test@test.com"},
                    new AppUser{UserName = "bob", Email="bob@test.com"},
                    new AppUser{UserName = "seed", Email="seed@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "passw0rd");
                }
            }

            if(context.Tickets.Any()) return;

            var tickets = new List<Ticket>
            {
                new Ticket
                    {
                        Location = "Multimatic",
                        MachineID = 8538,
                        TicketSubject = "Merchandise",
                        TicketBody = "Replace Reese's with M&M Peanut",
                        Date = DateTime.Now
                    },
                new Ticket
                    {
                        Location = "Marelli Lewisburg",
                        MachineID = 89305,
                        TicketSubject = "Merchandise",
                        TicketBody = "Replace slow moving selections",
                        Date = DateTime.Now.AddDays(3)
                    },
                new Ticket
                    {
                        Location = "Lewisburg Printing",
                        MachineID = 00000,
                        TicketSubject = "Theft/Security",
                        TicketBody = "Check cameras in market.",
                        Date = DateTime.Now
                    },
                new Ticket
                    {
                        Location = "Berry Global",
                        MachineID = 00000,
                        TicketSubject = "Fresh Food",
                        TicketBody = "Up fresh 1.75 items by 6 per visit.",
                        Date = DateTime.Now
                    },
                new Ticket
                    {
                        Location = "CKNA DC Building Back",
                        MachineID = 8877,
                        TicketSubject = "Maintenance",
                        TicketBody = "Card reader is offline.",
                        Date = DateTime.Now
                    }
            };
        
            await context.Tickets.AddRangeAsync(tickets);
            await context.SaveChangesAsync();

        }
    }
}
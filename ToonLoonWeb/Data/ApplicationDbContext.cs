using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ToonLoonWeb.Client.Models;
using ToonLoonWeb.Models;

namespace ToonLoonWeb.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext<ApplicationUser>(options)
    {
        DbSet<Favorites> Favorites { get; set; }
    }
}

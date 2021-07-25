using Microsoft.EntityFrameworkCore;

namespace calc.Models
{
    public class OperationContext : DbContext
    {
        public OperationContext(DbContextOptions<OperationContext> options) : base(options)
        {
        }

        public DbSet<Operation> Operations { get; set; }
    }
}
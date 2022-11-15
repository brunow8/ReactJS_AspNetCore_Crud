using crud_ReactJs_Asp.Net.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace crud_ReactJs_Asp.Net.Data.Context {
    public class ApplicationDbContext : DbContext{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {

        }
        //This is how to reference the model to map in our database
        public DbSet<Person>? Person { get; set; }
    }
}

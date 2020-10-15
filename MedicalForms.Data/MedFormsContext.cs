using Microsoft.EntityFrameworkCore;
using System;

namespace MedicalForms.Data
{
    public class MedFormsContext : DbContext
    {
        private readonly string _connectionString;

        public MedFormsContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Camper> Campers { get; set; }
        public DbSet<User> Users { get; set; }
    }
}

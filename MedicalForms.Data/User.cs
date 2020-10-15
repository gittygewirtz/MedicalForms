using System;
using System.Collections.Generic;
using System.Text;

namespace MedicalForms.Data
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public List<Camper> Campers { get; set; }
    }
}

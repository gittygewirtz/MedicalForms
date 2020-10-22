using System;
using System.Collections.Generic;
using System.Text;

namespace MedicalForms.Data
{
    public class CamperRepository
    {
        private string _connectionString;

        public CamperRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCamper(Camper camper)
        {
            using (var context = new MedFormsContext(_connectionString))
            {
                context.Campers.Add(camper);
                context.SaveChanges();
            }
        }
    }
}

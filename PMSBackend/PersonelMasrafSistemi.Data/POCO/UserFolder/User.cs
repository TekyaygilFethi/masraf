using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.TravelFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.UserFolder
{
    [Table("UserTable")]
    public class User : BasePOCO
    {
        public User()
        {
            CompanyCodes = new List<CompanyCode>();
        }

        public string Name { get; set; }

        public string Surname { get; set; }

        public DateTime SignUpDate { get; set; }

        public string Alias { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }

        public virtual List<CompanyCode> CompanyCodes { get; set; }

        public int DepartmentID { get; set; }

        [ForeignKey("DepartmentID")]
        public virtual Department Department { get; set; }

        public virtual List<Travel> Travels { get; set; }
    }
}

using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.ExpenseFolder;
using PersonelMasrafSistemi.Data.POCO.TravelFolder;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.UserFolder
{
    [Table("CompanyCodeTable")]
    public class CompanyCode : BasePOCO
    {
        public CompanyCode()
        {
            Users = new List<User>();
            HostTypes = new List<HostType>();
            ExpenseSessions = new List<ExpenseSession>();
        }
        public string Code { get; set; }

        public virtual List<User> Users { get; set; }

        public virtual List<HostType> HostTypes { get; set; }

        public virtual List<ExpenseSession> ExpenseSessions { get; set; }
    }
}

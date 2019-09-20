using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.TravelFolder;
using PersonelMasrafSistemi.Data.POCO.UserFolder;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    public class ExpenseSession : TravelExpenseBase
    {
        public ExpenseSession()
        {
            Expenses = new List<Expense>();
        }
        public virtual List<Expense> Expenses { get; set; }

        [ForeignKey("TravelID")]
        public virtual Travel Travel { get; set; }

        public int? TravelID { get; set; }

        public bool IsSent { get; set; }

        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public virtual User User { get; set; }

        public string CompanyCodeID { get; set; }

        [ForeignKey("CompanyCodeID")]
        public virtual CompanyCode CompanyCode { get; set; }
    }
}

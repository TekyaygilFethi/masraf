using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    [Table("CurrencyTable")]
    public class Currency
    {
        public Currency()
        {
            Expenses = new List<Expense>();
        }
        public string Code { get; set; }

        public virtual List<Expense> Expenses { get; set; }
    }
}

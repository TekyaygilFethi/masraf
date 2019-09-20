using PersonelMasrafSistemi.Data.POCO.Base;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    [Table("AmountTypeTable")]
    public class AmountType : BasePOCO
    {
        public AmountType()
        {
            Expenses = new List<Expense>();
        }
        public string Type { get; set; }

        public virtual List<Expense> Expenses { get; set; }
    }
}

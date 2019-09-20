using PersonelMasrafSistemi.Data.POCO.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    [Table("ExpenseTypeTable")]
    public class ExpenseType:BasePOCO
    {
        public ExpenseType()
        {
            Expenses = new List<Expense>();
        }
        public string Type { get; set; }

        public List<Expense> Expenses { get; set; }
    }
}

using PersonelMasrafSistemi.Data.POCO.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    [Table("PaymentMethodTable")]
    public class PaymentMethod:BasePOCO
    {
        public PaymentMethod()
        {
            Expenses = new List<Expense>();
        }

        public string Method { get; set; }

        public List<Expense> Expenses { get; set; }
    }
}

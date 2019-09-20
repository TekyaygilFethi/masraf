using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    [Table("DocumentTypeTable")]
    public class DocumentType
    {
        public DocumentType()
        {
            Expenses = new List<Expense>();
        }
        public string Type { get; set; }

        public virtual List<Expense> Expenses { get; set; }
    }
}

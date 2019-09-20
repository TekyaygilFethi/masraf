using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.ExpenseFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.ImageFolder
{
    [Table("ImageTable")]
    public class Image:BasePOCO
    {
        public byte[] ImageBLOB { get; set; }

        public int ExpenseID { get; set; }

        [ForeignKey("ExpenseID")]
        public virtual Expense Expense { get; set; }

    }
}

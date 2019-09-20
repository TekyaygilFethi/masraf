using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.ExpenseFolder;
using PersonelMasrafSistemi.Data.POCO.UserFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.TravelFolder
{
    [Table("TravelTable")]
    public class Travel:TravelExpenseBase
    {
        public virtual List<Route> Routes { get; set; }

        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public virtual User User { get; set; }

        [ForeignKey("ExpenseSessionID")]
        public virtual ExpenseSession ExpenseSession { get; set; }

        public int? ExpenseSessionID { get; set; }

        public bool IsSent { get; set; }
    }
}

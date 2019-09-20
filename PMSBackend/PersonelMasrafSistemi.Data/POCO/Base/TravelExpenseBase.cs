using PersonelMasrafSistemi.Data.POCO.ApprovalFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.Base
{
    public class TravelExpenseBase:BasePOCO
    {
        [ForeignKey("ApprovalID")]
        public virtual Approval Approval { get; set; } //Onaylayıcı birden fazla

        public int ApprovalID { get; set; }
    }
}

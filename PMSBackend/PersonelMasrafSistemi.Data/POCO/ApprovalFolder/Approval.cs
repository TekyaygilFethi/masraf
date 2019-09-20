using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.UserFolder;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ApprovalFolder
{
    [Table("ApprovalTable")]
    public class Approval : BasePOCO
    {
        public int DepartmentID { get; set; }

        [ForeignKey("DepartmentID")]
        public virtual Department Department { get; set; }

        [ForeignKey("TravelExpenseID")]
        public virtual TravelExpenseBase TravelExpense { get; set; }

        public int TravelExpenseID { get; set; }

        public virtual List<Hierarchy> HierarchyTree { get; set; }
    }
}

using PersonelMasrafSistemi.Data.POCO.ApprovalFolder;
using PersonelMasrafSistemi.Data.POCO.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.UserFolder
{
    [Table("HierarchyTable")]
    public class Hierarchy : BasePOCO
    {
        //public int DepartmentID { get; set; }

        //[ForeignKey("DepartmentID")]
        //public virtual Department Department { get; set; }

        public int UserID { get; set; }

        [ForeignKey("UserID")]
        public virtual User User { get; set; }

        public int Order { get; set; }

        public bool IsIndividual { get; set; }

        public int ApprovalGroup { get; set; } //Münferit grupları

        [ForeignKey("ApprovalID")]
        public virtual Approval Approval { get; set; }

        public int ApprovalID { get; set; }
    }
}

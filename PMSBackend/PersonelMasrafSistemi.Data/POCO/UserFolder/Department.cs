using PersonelMasrafSistemi.Data.POCO.ApprovalFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.UserFolder
{
    [Table("DepartmentTable")]
    public class Department
    {
        public string Name { get; set; }

        public virtual List<User> Users { get; set; }

        public virtual List<Approval> Approvals { get; set; }
    }
}

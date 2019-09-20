using PersonelMasrafSistemi.Data.POCO.Base;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.TravelFolder
{
    [Table("HostTypeTable")]
    public class HostType : BasePOCO
    {
        public string Type { get; set; }

        public bool IsRezervation { get; set; }

        public virtual List<Route> Routes { get; set; }
    }
}

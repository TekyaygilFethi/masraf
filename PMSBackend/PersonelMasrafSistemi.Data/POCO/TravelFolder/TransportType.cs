using PersonelMasrafSistemi.Data.POCO.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PersonelMasrafSistemi.Data.POCO.TravelFolder
{
    [Table("TransportTypeTable")]
    public class TransportType:BasePOCO
    {
        public TransportType()
        {
            Routes = new List<Route>();
        }
        public string Type { get; set; }

        public virtual List<Route> Routes { get; set; }
    }
}

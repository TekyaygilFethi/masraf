using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.TravelFolder
{
    public class Route
    {
        public DateTime TravelDate { get; set; }

        public int HostTypeID { get; set; }

        [ForeignKey("HostTypeID")]
        public virtual HostType HostType { get; set; }

        public string StartPoint { get; set; }

        public string EndPoint { get; set; }

        public int TransportTypeID { get; set; }

        [ForeignKey("TransportTypeID")]
        public virtual TransportType TransportType { get; set; }

        public int TravelID { get; set; }

        [ForeignKey("TravelID")]
        public virtual Travel Travel { get; set; }
    }
}

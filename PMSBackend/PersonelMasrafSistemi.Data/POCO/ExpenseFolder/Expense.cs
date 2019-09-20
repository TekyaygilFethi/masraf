using PersonelMasrafSistemi.Data.POCO.Base;
using PersonelMasrafSistemi.Data.POCO.ImageFolder;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace PersonelMasrafSistemi.Data.POCO.ExpenseFolder
{
    public class Expense : BasePOCO
    {
        public DateTime DocumentDate { get; set; }

        public string CompanyName { get; set; }

        public int PaymentMethodID { get; set; }

        [ForeignKey("PaymentMethodID")]
        public virtual PaymentMethod PaymentMethod { get; set; }

        public int AmountTypeID { get; set; }

        [ForeignKey("AmountTypeID")]
        public virtual AmountType AmountType { get; set; }

        public int DocumentTypeID { get; set; }

        [ForeignKey("DocumentTypeID")]
        public virtual DocumentType DocumentType { get; set; }

        public int CurrencyID { get; set; }

        [ForeignKey("CurrencyID")]
        public virtual Currency Currency { get; set; }

        public int ExpenseTypeID { get; set; }

        [ForeignKey("ExpenseTypeID")]
        public virtual ExpenseType ExpenseType { get; set; }

        public int ExpenseSessionID { get; set; }

        [ForeignKey("ExpenseSessionID")]
        public virtual ExpenseSession ExpenseSession { get; set; }

        public double Amount { get; set; }

        public string VKN { get; set; }

        public string VATRate { get; set; }

        public string DocumentNo { get; set; }

        public double AmountWithRate { get; set; }

        public double AmountWithoutDate { get; set; }

        public string Explanation { get; set; }

        public virtual List<Image> Images { get; set; }
    }
}

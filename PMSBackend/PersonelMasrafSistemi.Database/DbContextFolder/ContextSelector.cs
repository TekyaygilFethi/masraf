using System;
using System.Collections.Generic;
using System.Text;

namespace PersonelMasrafSistemi.Database.DbContextFolder
{
    public enum DatabaseProvider
    {
        MySQL,
        MSSQL
    }

    public class ContextSelector
    {
        private static readonly string MySQLConnectionString = @"server=localhost;database=PMSDB;user=root;password=Idecon1*";
        private static readonly string MSSQLConnectionString = @"Data Source=.\SQLEXPRESS;Initial Catalog=PMSDB;Integrated Security=True";

        public static string GetConnectionString(DatabaseProvider provider)
        {
            if (provider == DatabaseProvider.MSSQL)
                return MSSQLConnectionString;
            else if (provider == DatabaseProvider.MySQL)
                return MySQLConnectionString;
            else
                throw new System.Exception("Provider is not valid!");
        }
    }
}

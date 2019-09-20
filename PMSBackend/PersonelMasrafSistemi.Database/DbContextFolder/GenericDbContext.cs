using Microsoft.EntityFrameworkCore;
using PersonelMasrafSistemi.Data.POCO.ApprovalFolder;
using PersonelMasrafSistemi.Data.POCO.ExpenseFolder;
using PersonelMasrafSistemi.Data.POCO.ImageFolder;
using PersonelMasrafSistemi.Data.POCO.TravelFolder;
using PersonelMasrafSistemi.Data.POCO.UserFolder;

namespace PersonelMasrafSistemi.Database.DbContextFolder
{
    public class GenericDbContext : DbContext
    {
        public GenericDbContext(DbContextOptions options) : base()
        { }

        #region DbSets
        public DbSet<Approval> Approvals { get; set; }

        public DbSet<AmountType> AmountTypes { get; set; }

        public DbSet<Currency> Currencies { get; set; }

        public DbSet<DocumentType> DocumentType { get; set; }

        public DbSet<Expense> Expenses { get; set; }

        public DbSet<ExpenseSession> ExpenseSessions { get; set; }

        public DbSet<ExpenseType> ExpenseTypes { get; set; }

        public DbSet<PaymentMethod> PaymentMethods { get; set; }

        public DbSet<HostType> HostTypes { get; set; }

        public DbSet<Route> Routes { get; set; }

        public DbSet<TransportType> TransportTypes { get; set; }

        public DbSet<Travel> Travels { get; set; }

        public DbSet<CompanyCode> CompanyCodes { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Hierarchy> Hierarchies { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Image> Images { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Approval
            modelBuilder.Entity<Approval>()
                .HasOne(o => o.Department)
                .WithMany(m => m.Approvals)
                .HasForeignKey(fk => fk.DepartmentID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Approval>()
                .HasMany(m => m.HierarchyTree)
                .WithOne(o => o.Approval)
                .HasForeignKey(fk => fk.ApprovalID)
                .OnDelete(DeleteBehavior.Restrict);
            #endregion

            #region Expense
            modelBuilder.Entity<Expense>()
                .HasOne(o => o.PaymentMethod)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.PaymentMethodID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
                .HasOne(o => o.AmountType)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.AmountTypeID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
                .HasOne(o => o.Currency)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.CurrencyID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
                .HasOne(o => o.DocumentType)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.DocumentTypeID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
                .HasOne(o => o.ExpenseType)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.ExpenseTypeID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
                .HasOne(o => o.ExpenseSession)
                .WithMany(m => m.Expenses)
                .HasForeignKey(fk => fk.ExpenseSessionID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Expense>()
               .HasMany(m=>m.Images)
               .WithOne(o=>o.Expense)
               .HasForeignKey(fk => fk.ExpenseID)
               .OnDelete(DeleteBehavior.Restrict);
            #endregion

            #region Travel
            modelBuilder.Entity<Travel>()
                .HasMany(m => m.Routes)
                .WithOne(o => o.Travel)
                .HasForeignKey(fk => fk.TravelID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Travel>()
                .HasOne(o => o.User)
                .WithMany(m => m.Travels)
                .HasForeignKey(fk => fk.UserID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Travel>()
                .HasOne(o=>o.ExpenseSession)
                .WithOne(o => o.Travel)
                .HasPrincipalKey<ExpenseSession>(pk=>pk.TravelID)
                .HasForeignKey<Travel>(fk=>fk.ExpenseSessionID)
                .OnDelete(DeleteBehavior.Restrict);
            #endregion

            #region Route
            modelBuilder.Entity<Route>()
                .HasOne(o => o.HostType)
                .WithMany(m => m.Routes)
                .HasForeignKey(fk => fk.HostTypeID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Route>()
                .HasOne(o => o.TransportType)
                .WithMany(m => m.Routes)
                .HasForeignKey(fk => fk.TransportTypeID)
                .OnDelete(DeleteBehavior.Restrict);
            #endregion
        }
    }
}

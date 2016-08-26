namespace NgrxGettingStarted.Data
{
    public interface IUow
    {
        IRepository<Models.Doctor> Doctors { get; }
        void SaveChanges();
    }
}

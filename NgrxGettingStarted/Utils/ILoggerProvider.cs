namespace NgrxGettingStarted.Utils
{
    public interface ILoggerProvider
    {
        ILogger CreateLogger(string name);
    }
}

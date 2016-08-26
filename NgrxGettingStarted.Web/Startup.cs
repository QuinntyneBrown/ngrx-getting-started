using Owin;
using System.Web.Http;
using Microsoft.Owin;
using Unity.WebApi;

[assembly: OwinStartup(typeof(NgrxGettingStarted.Web.Startup))]

namespace NgrxGettingStarted.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {            
            GlobalConfiguration.Configure(config =>
            {
                config.DependencyResolver = new UnityDependencyResolver(UnityConfiguration.GetContainer());
                NgrxGettingStarted.ApiConfiguration.Install(config, app);
            });
        }
    }
}

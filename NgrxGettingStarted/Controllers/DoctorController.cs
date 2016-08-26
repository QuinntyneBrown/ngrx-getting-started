using NgrxGettingStarted.Dtos;
using NgrxGettingStarted.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace NgrxGettingStarted.Controllers
{
    [Authorize]
    [RoutePrefix("api/doctor")]
    public class DoctorController : ApiController
    {
        public DoctorController(IDoctorService doctorService)
        {
            _doctorService = doctorService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DoctorAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DoctorAddOrUpdateRequestDto dto) { return Ok(_doctorService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DoctorAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DoctorAddOrUpdateRequestDto dto) { return Ok(_doctorService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DoctorDto>))]
        public IHttpActionResult Get() { return Ok(_doctorService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DoctorDto))]
        public IHttpActionResult GetById(int id) { return Ok(_doctorService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_doctorService.Remove(id)); }

        protected readonly IDoctorService _doctorService;


    }
}

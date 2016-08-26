using NgrxGettingStarted.Dtos;
using System.Collections.Generic;

namespace NgrxGettingStarted.Services
{
    public interface IDoctorService
    {
        DoctorAddOrUpdateResponseDto AddOrUpdate(DoctorAddOrUpdateRequestDto request);
        ICollection<DoctorDto> Get();
        DoctorDto GetById(int id);
        dynamic Remove(int id);
    }
}

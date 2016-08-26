namespace NgrxGettingStarted.Dtos
{
    public class DoctorAddOrUpdateResponseDto: DoctorDto
    {
        public DoctorAddOrUpdateResponseDto(Models.Doctor entity)
        :base(entity)
        {

        }
    }
}

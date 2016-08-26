namespace NgrxGettingStarted.Dtos
{
    public class DoctorDto
    {
        public DoctorDto()
        {

        }

        public DoctorDto(Models.Doctor entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Phone { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
    }
}

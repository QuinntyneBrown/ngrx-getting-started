using System;
using System.Collections.Generic;
using NgrxGettingStarted.Dtos;
using NgrxGettingStarted.Data;
using System.Linq;

namespace NgrxGettingStarted.Services
{
    public class DoctorService : IDoctorService
    {
        public DoctorService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Doctors;
            _cache = cacheProvider.GetCache();
        }

        public DoctorAddOrUpdateResponseDto AddOrUpdate(DoctorAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.Doctor());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new DoctorAddOrUpdateResponseDto(entity);
        }

        public ICollection<DoctorDto> Get()
        {
            ICollection<DoctorDto> response = new HashSet<DoctorDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new DoctorDto(entity)); }
            return response;
        }

        public DoctorDto GetById(int id)
        {
            return new DoctorDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.Doctor> _repository;
        protected readonly ICache _cache;
    }
}

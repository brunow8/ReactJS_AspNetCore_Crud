using crud_ReactJs_Asp.Net.Data.Repositories;
using crud_ReactJs_Asp.Net.Entities;
using crud_ReactJs_Asp.Net.Services;
using ServiceStack.Host;
using System.Net.Mail;

namespace crud_ReactJs_Asp.Net.Services
{
    public class PersonService : IPersonService
    {
        private readonly IPersonRepo _personRepo;

        public PersonService(IPersonRepo personRepo)
        {
            _personRepo = personRepo;
        }

        /*As stated in the interface IPersonService.cs this class will have as its main objective the implementation of the functions declared in the IPersonService and with the injection of the IPersonRepo interface which
        is the interface responsible for connecting to the database make it possible to process data and give some response to the user.
        */
        public async Task<Person[]> GetAllPersons()
        {
            return await _personRepo.GetAllAsync();
        }
        public async Task<Person> AddPerson(Person person)
        {
            try
            {
                person.Error = false;
                person.Message = "";
                if (person.Id != 0)
                {
                    person.Error = true;
                    person.Message = "There is already a person with the same information!";
                    person.Field = "id";
                    return person;
                }
                if (await _personRepo.GetByNifAsync(person) is not null)
                {
                    person.Error = true;
                    person.Message = "NIF is already in use!";
                    person.Field = "nif";
                    return person;
                }
                if (await _personRepo.GetByEmailAsync(person) is not null)
                {
                    person.Error = true;
                    person.Message = "Email is already in use!";
                    person.Field = "email";
                    return person;
                }
                _personRepo.Add(person);
                if (await _personRepo.SaveChangesAsync())
                {
                    return person;
                }
            }
            catch
            {
                throw new HttpException(500, "Error unexpected ocurred adding a person!");
            }
            return person;
        }
        public async Task<Person> UpdatePerson(Person person)
        {
            try
            {
                Person personUpdated = new Person();
                if (person is null)
                {
                    personUpdated.Error = true;
                    personUpdated.Message = "Person details not found!";
                    personUpdated.Field = "id";
                    return personUpdated;
                }
                if (await _personRepo.GetByNifAsync(person) is not null) {
                    person.Error = true;
                    person.Message = "NIF is already in use!";
                    person.Field = "nif";
                    return person;
                }
                if (await _personRepo.GetByEmailAsync(person) is not null) {
                    person.Error = true;
                    person.Message = "Email is already in use!";
                    person.Field = "email";
                    return person;
                }
                _personRepo.Update(person);
                if (await _personRepo.SaveChangesAsync())
                {
                    return person;
                }
                return person;
            }
            catch
            {
                throw new HttpException(500, "Error unexpected ocurred when updating a person!");
            }
            throw new NotImplementedException();
        }
        public async Task<bool> DeletePerson(long personId)
        {
            try
            {
                bool result = false;
                var person = await GetPersonById(personId);
                if (person is null)
                {
                    return false;
                }
                _personRepo.Delete(person);
                if (await _personRepo.SaveChangesAsync())
                {
                    result = true;
                }
                return result;
            }
            catch
            {
                throw new HttpException(500, "Error unexpected ocurred deleting a person!");
            }
        }
        public async Task<Person?> GetPersonById(long personId)
        {
            try
            {
                return await _personRepo.GetByIdAsync(personId);
            }
            catch
            {
                throw new HttpException(500, "Error unexpected ocurred when getting a person by id!");
            }
        }
        public Task<bool> SaveChangesAsync()
        {
            return _personRepo.SaveChangesAsync();
        }
        public Task<Person?> GetPersonByNifAsync(Person person)
        {
            return _personRepo.GetByNifAsync(person);
        }
        public Task<Person?> GetPersonByEmailAsync(Person person)
        {
            return _personRepo.GetByEmailAsync(person);
        }
    }
}

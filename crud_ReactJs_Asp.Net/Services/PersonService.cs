using crud_ReactJs_Asp.Net.Entities;
using crud_ReactJs_Asp.Net.Interfaces.Repositories;
using crud_ReactJs_Asp.Net.Interfaces.Services;
using ServiceStack.Host;
using System.Net.Mail;

namespace crud_ReactJs_Asp.Net.Services {
    public class PersonService : IPersonService {
        private readonly IPersonRepo _personRepo;

        public PersonService(IPersonRepo personRepo) {
            _personRepo = personRepo;
        }

        /*As stated in the interface IPersonService.cs this class will have as its main objective the implementation of the functions declared in the IPersonService and with the injection of the IPersonRepo interface which
        is the interface responsible for connecting to the database make it possible to process data and give some response to the user.
        */
        public async Task<Person[]> GetAllPersons() {
            return await _personRepo.GetAllAsync();
        }
        public async Task<Person> AddPerson(Person person) {
            try {
                if (await _personRepo.GetByIdAsync(person.Id) != null || await _personRepo.GetByNifAsync(person.NIF) != null) {
                    person.Error = true;
                    person.Message = "There is already a person with the same information";
                }
                person.Error = false;
                person.Message = "";
                _personRepo.Add(person);
                if (await _personRepo.SaveChangesAsync()) {
                    return person;
                }
            } catch {
                throw new HttpException(500, "Error unexpected ocurred adding a person!");
            }
            return person;
        }

        public Task<bool> DeletePerson(Person person) {
            throw new NotImplementedException();
        }

        public Task<Person> GetPersonById(Guid personId) {
            throw new NotImplementedException();
        }

        public Task<Person[]> GetPersonsyName(string personName) {
            throw new NotImplementedException();
        }

        public Task<bool> SaveChangesAsync() {
            return _personRepo.SaveChangesAsync();
        }

        public Task<Person> UpdatePerson(Person person) {
            throw new NotImplementedException();
        }

        public Task<Person> GetPersonByNifAsync(string personNIF) {
            return _personRepo.GetByNifAsync(personNIF);
        }
    }
}

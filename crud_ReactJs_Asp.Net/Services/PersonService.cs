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
                if (await _personRepo.GetByIdAsync(person.Id) != null) {
                    person.Error = true;
                    person.Message = "There is already a person with the same information!";
                    person.Field = "id";
                }
                if (await _personRepo.GetByNifAsync(person.NIF) != null) {
                    person.Error = true;
                    person.Message = "NIF is already in use!";
                    person.Field = "nif";
                }
                if (await _personRepo.GetByEmailAsync(person.Email) != null) {
                    person.Error = true;
                    person.Message = "Email is already in use!";
                    person.Field = "email";
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

        public async Task<bool> DeletePerson(Person person) {
            try {
                bool result = false;
                if (person is null) {
                    return false;
                }
                _personRepo.Delete(person);
                if (await _personRepo.SaveChangesAsync()) {
                    result = true;
                }
                return result;
            } catch {
                throw new HttpException(500, "Error unexpected ocurred deleting a person!");
            }
        }

        public async Task<Person> GetPersonById(Guid personId) {
            try {
                return await _personRepo.GetByIdAsync(personId);
            } catch {
                throw new HttpException(500, "Error unexpected ocurred when getting a person by id!");
            }
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

        public Task<Person> GetPersonByEmailAsync(string personEmail) {
            throw new NotImplementedException();
        }
    }
}

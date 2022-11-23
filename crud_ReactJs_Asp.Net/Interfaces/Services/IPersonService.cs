using crud_ReactJs_Asp.Net.Entities;

namespace crud_ReactJs_Asp.Net.Interfaces.Services {
    public interface IPersonService {
        /* This interface was created with an objective to declare the functions that will be needed to response the request from the user and to conect to the interface that make
         * the connection to the database.
         * In a simple way, the functions here declared will be used in PersonService.cs where are implemented and with the injection of the interface responsible to the database connection give the user some response.
         */
        Task<Person> AddPerson(Person person);
        Task<Person> UpdatePerson(Person person);
        Task<bool> DeletePerson(Person person);
        Task<Person[]> GetAllPersons();
        Task<Person[]> GetPersonsyName(string personName);
        Task<Person> GetPersonById(Guid personId);
        Task<Person> GetPersonByNifAsync(string personNIF);
        Task<Person> GetPersonByEmailAsync(string personEmail);


        Task<bool> SaveChangesAsync();
    }
}

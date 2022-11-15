using crud_ReactJs_Asp.Net.Entities;

namespace crud_ReactJs_Asp.Net.Interfaces.Repositories {
    public interface IPersonRepo {

        /*This interface is created based on the connection with the database and the type of functions that will be needed for the operation of the application, ie as we can see below we have 3 void functions that are limited to making
        the user request without returning anything in return (Add, Update, Delete) and soon after we have some functions that will have return by the database such as GetByIdAsync that will return person by their Id as such applies to Nif.
        On the other hand, the GetPersonsByName function will return an array of all people that its first name contains the value of the string sent by parameter.
        Finally, the SaveChangesAsync function will have as its implementation the update of the database.
        */

        void Add(Person person);
        void Update(Person person);
        void Delete(Person person);
        Task<Person[]> GetAllAsync();
        Task<Person> GetByIdAsync(Guid id);
        Task<Person[]> GetPersonsByName(string name);
        Task<Person> GetByNifAsync(string personNIF);
        Task<bool> SaveChangesAsync();
    }
}

using crud_ReactJs_Asp.Net.Data.Context;
using crud_ReactJs_Asp.Net.Entities;
using crud_ReactJs_Asp.Net.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;

namespace crud_ReactJs_Asp.Net.Data.Repositories {
    public class PersonRepo : IPersonRepo {
        //As we can see and with the explanation previously given in the IPersonRepo interface.cs,
        //here are implemented the functions declared there making it possible to connect to the database either to recover data, replacing or even deleting it.

        private readonly ApplicationDbContext _context;
        public PersonRepo(ApplicationDbContext context) {
            _context = context;
        }
        public void Add(Person person) {
            IQueryable<Person> query = _context.Person;
            person.Id = query.Count() + 1;
            _context.Add(person);
        }
        public void Update(Person person) {
            _context.Update(person);
        }

        public void Delete(Person person) {
            _context.Remove(person);
        }
        public async Task<Person[]> GetAllAsync() {
            IQueryable<Person> query = _context.Person;
            query = query.AsNoTracking()
                         .OrderBy(person => person.Id);
            return await query.ToArrayAsync();
        }
        public async Task<Person?> GetByIdAsync(long id) {
            IQueryable<Person> query = _context.Person;
            query = from p in query
                    where p.Id == id
                    select p;
            return await query.FirstOrDefaultAsync() ?? null;
        }

        public async Task<Person?> GetByNifAsync(string personNif) {
            IQueryable<Person> query = _context.Person;
            query = query.AsNoTracking()
                         .OrderBy(person => person.Id)
                         .Where(person => person.NIF == personNif);
            return await query.FirstOrDefaultAsync() ?? null;
        }
        public async Task<Person?> GetByEmailAsync(string personEmail) {
            IQueryable<Person> query = _context.Person;
            query = query.AsNoTracking()
                         .OrderBy(person => person.Id)
                         .Where(person => person.Email == personEmail);
            return await query.FirstOrDefaultAsync() ?? null;
        }
        public async Task<bool> SaveChangesAsync() {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}

using crud_ReactJs_Asp.Net.Data.Context;
using crud_ReactJs_Asp.Net.Entities;
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

        public async Task<Person?> GetByNifAsync(Person person) {
            IQueryable<Person> query = _context.Person;
            if (person.Id != 0) {
                query = query.AsNoTracking()
                             .OrderBy(p => p.Id)
                             .Where(p => p.Id == person.Id);
                if (query.FirstOrDefault() is not null && query.FirstOrDefault().NIF == person.NIF) {
                    return null;
                }
                query = query.AsNoTracking()
                             .OrderBy(p => p.Id)
                             .Where(p => p.NIF == person.NIF);
            } else {
                query = query.AsNoTracking()
                                 .OrderBy(p => p.Id)
                                 .Where(p => p.NIF == person.NIF);
            }
            return await query.FirstOrDefaultAsync() ?? null;
        }
        public async Task<Person?> GetByEmailAsync(Person person) {
            IQueryable<Person> query = _context.Person;
            if (person.Id != 0) {
                query = query.AsNoTracking()
                             .OrderBy(p => p.Id)
                             .Where(p => p.Id == person.Id);
                if (query.FirstOrDefault() is not null && query.FirstOrDefault().Email == person.Email) {
                    return null;
                }
                query = query.AsNoTracking()
                             .OrderBy(p => p.Id)
                             .Where(p => p.Email == person.Email);
            } else {
                query = query.AsNoTracking()
                             .OrderBy(p => p.Id)
                             .Where(p => p.Email == person.Email);
            }
            return await query.FirstOrDefaultAsync() ?? null;
        }
        public async Task<bool> SaveChangesAsync() {
            return await _context.SaveChangesAsync() > 0;
        }

    }
}

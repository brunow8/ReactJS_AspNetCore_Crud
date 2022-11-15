using crud_ReactJs_Asp.Net.Entities;
using crud_ReactJs_Asp.Net.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace crud_ReactJs_Asp.Net.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase {
        private readonly IPersonService _personService;
        public PersonController(IPersonService personService) {
            _personService = personService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPersons() {
            try {
                var persons = await _personService.GetAllPersons();
                if (persons == null) {
                    return NoContent();
                }
                return Ok(persons);
            } catch (Exception ex) {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to get all persons! Error: {ex.Message}");
            }
        }

        [HttpPost("create")]
        public async Task<Person> CreatePerson(Person person) {
            return await _personService.AddPerson(person);
        }
    }
}

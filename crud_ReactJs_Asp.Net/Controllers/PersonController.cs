using crud_ReactJs_Asp.Net.Entities;
using crud_ReactJs_Asp.Net.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace crud_ReactJs_Asp.Net.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase {
        private readonly IPersonService _personService;
        private readonly IWebHostEnvironment _hostEnvironment;
        public PersonController(IPersonService personService, IWebHostEnvironment hostEnvironment) {
            _personService = personService;
            _hostEnvironment = hostEnvironment;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPersons() {
            try {
                var persons = await _personService.GetAllPersons();
                if (persons == null) {
                    return NoContent();
                }
                foreach (var person in persons) {
                    person.ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, person.ImageName);
                }
                return Ok(persons);
            } catch (Exception ex) {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Error trying to get all persons! Error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<Person> CreatePerson([FromForm] Person person) {
            person.ImageName = await SaveImage(person.ImageFile);
            return await _personService.AddPerson(person);
        }

        [HttpPut]
        public async Task<Person> UpddatePerson([FromForm] Person person) {
            if (person.ImageFile != null) {
                DeleteImage(person.ImageName);
                person.ImageName = await SaveImage(person.ImageFile);
            }
            return await _personService.UpdatePerson(person);
        }

        [HttpDelete]
        public async Task<bool> DeletePerson(long personId) {
            return await _personService.DeletePerson(personId);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile) {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create)) {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName) {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath)) {
                System.IO.File.Delete(imagePath);
            }
        }
    }
}

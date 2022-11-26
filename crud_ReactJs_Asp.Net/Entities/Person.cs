using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using LinqToDB.Mapping;

namespace crud_ReactJs_Asp.Net.Entities {
    public class Person {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity), Key()]
        public long Id { get; set; }

        [Required(ErrorMessage = "First Name is required")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "First Name should be minimum 3 characters and a maximum of 50 characters")]
        public string FirstName { get; set; } = "";

        [Required(ErrorMessage = "Last Name is required")]
        [StringLength(50, MinimumLength = 3,
        ErrorMessage = "Last Name should be minimum 3 characters and a maximum of 50 characters")]
        public string LastName { get; set; } = "";

        [Required(ErrorMessage = "Cellphone number is required")]
        [Phone]
        public string Cellphone { get; set; } = "";
        [Required(ErrorMessage = "NIF is required")]
        [StringLength(9, MinimumLength = 9, ErrorMessage = "Nif has to be 9 digits")]
        public string NIF { get; set; } = "";

        [Required(ErrorMessage = "Birthday is required")]
        public DateTime Birthday { get; set; }

        [Required(ErrorMessage = "Street Address is required")]
        public string Address { get; set; } = "";

        [Required(ErrorMessage = "Zip Code is required")]
        public string ZipCode { get; set; } = "";

        [Required(ErrorMessage = "Gender is required")]
        public string Gender { get; set; } = "";

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string Email { get; set; } = "";

        [Required(ErrorMessage = "Photo is required")]
        public string ImageName { get; set; } = "";

        [NotMapped]
        public IFormFile? ImageFile { get; set; }

        [NotMapped]
        public string? ImageSrc { get; set; } = "";
        [NotMapped]
        public bool? Error { get; set; } = false;
        [NotMapped]
        public string? Message { get; set; } = "";
        [NotMapped]
        public string? Field { get; set; } = "";
    }
}

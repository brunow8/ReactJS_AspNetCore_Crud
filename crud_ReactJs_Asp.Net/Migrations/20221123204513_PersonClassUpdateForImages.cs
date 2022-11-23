using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace crud_ReactJs_Asp.Net.Migrations
{
    public partial class PersonClassUpdateForImages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageName",
                table: "Person",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageName",
                table: "Person");
        }
    }
}

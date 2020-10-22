using Microsoft.EntityFrameworkCore.Migrations;

namespace MedicalForms.Data.Migrations
{
    public partial class Update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campers_Users_UserId",
                table: "Campers");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Campers",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Campers_Users_UserId",
                table: "Campers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Campers_Users_UserId",
                table: "Campers");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Campers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Campers_Users_UserId",
                table: "Campers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

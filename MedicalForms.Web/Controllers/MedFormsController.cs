using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalForms.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace MedicalForms.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class MedFormsController : ControllerBase
    {
        private string _connectionString;
        public MedFormsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("gettopfive")]
        public List<TopBookmark> GetTopFive()
        {
            var repo = new BookmarkRepository(_connectionString);
            return repo.GetTopFive();
        }

        [HttpGet]
        [Route("getbookmarks")]
        public List<Bookmark> GetBookmarks()
        {
            var repo = new BookmarkRepository(_connectionString);
            var repo2 = new UserRepository(_connectionString);
            var user = repo2.GetUserByEmail(User.Identity.Name);
            return repo.GetBookmarks(user.Id);
        }


        [HttpPost]
        [Route("addbookmark")]
        public void AddBookmark(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connectionString);
            var repo2 = new UserRepository(_connectionString);
            var user = repo2.GetUserByEmail(User.Identity.Name);
            bookmark.UserId = user.Id;
            repo.AddBookmark(bookmark);
        }

        [HttpPost]
        [Route("edit")]
        public void EditBookmark(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.EditBookmark(bookmark);
        }

        [HttpPost]
        [Route("delete")]
        public void DeleteBookmark(Bookmark bookmark)
        {
            var repo = new BookmarkRepository(_connectionString);
            repo.DeleteBookmark(bookmark.Id);
        }
    }
}
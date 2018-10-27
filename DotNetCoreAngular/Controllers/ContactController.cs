using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BusinessLibrary.Repository;
using DataAccessLibrary.Models;

namespace DotNetCoreAngular.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        public IContactRepository ContactRepo;

        public ContactController(IContactRepository contactRepo)
        {
            ContactRepo = contactRepo;
        }

        [HttpGet, Produces("application/json")]
        [Route("GetContacts")]
        public async Task<IActionResult> GetContacts()
        {
            var data = await ContactRepo.GetAllContact();
            return Json(new { result = data });
        }

        [HttpPost, Produces("application/json")]
        public async Task<IActionResult> SaveContact([FromBody] Contacts model)
        {
            return Json(await ContactRepo.SaveContact(model));
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteContactByID(int id)
        {
            return Json(await ContactRepo.DeleteContactByID(id));
        }
    }
}
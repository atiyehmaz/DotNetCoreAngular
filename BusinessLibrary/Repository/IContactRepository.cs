using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DataAccessLibrary.Models;

namespace BusinessLibrary.Repository
{
   public interface IContactRepository
    {
        Task<List<Contacts>> GetAllContact();
        Task<bool> SaveContact(Contacts model);
        Task<bool> DeleteContactByID(int id);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLibrary.Models;
using Microsoft.EntityFrameworkCore;
namespace BusinessLibrary.Repository
{
    public class ContactRepository: IContactRepository
    {
        public async Task<bool> DeleteContactByID(int id)
        {
            using (ContactDBContext db = new ContactDBContext())
            {

                Contacts contact = db.Contacts.Where(x => x.ContactId == id).FirstOrDefault();
                if (contact != null)
                {
                    db.Contacts.Remove(contact);
                }
                return await db.SaveChangesAsync() >= 1;
            }
        }

        public async Task<List<Contacts>> GetAllContact()
        {
            using (ContactDBContext db = new ContactDBContext())
            {
                return await (from a in db.Contacts
                              select new Contacts
                              {
                                  ContactId = a.ContactId,
                                  FirstName = a.FirstName,
                                  LastName = a.LastName,
                                  Email = a.Email,
                                  Phone = a.Phone
                              }).ToListAsync();
            }
        }

        public async Task<bool> SaveContact(Contacts model)
        {
            using (ContactDBContext db = new ContactDBContext())
            {
                Contacts contact = db.Contacts.Where
                        (x => x.ContactId == model.ContactId).FirstOrDefault();
                if (contact == null)
                {
                    contact = new Contacts()
                    {
                        FirstName = model.FirstName,
                        LastName = model.LastName,
                        Email = model.Email,
                        Phone = model.Phone
                    };
                    db.Contacts.Add(contact);

                }
                else
                {
                    contact.FirstName = model.FirstName;
                    contact.LastName = model.LastName;
                    contact.Email = model.Email;
                    contact.Phone = model.Phone;
                }

                return await db.SaveChangesAsync() >= 1;
            }
        }
    }
}

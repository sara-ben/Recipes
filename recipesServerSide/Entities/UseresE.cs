using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public class UseresE
    {
        public int id { get; set; }
        public string name { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public static UseresE ToUseresEntities(Useres u)
        {
            UseresE unew = new UseresE() { id = u.id, name = u.name, password = u.password, email = u.email };
            return unew;
        }
        public static Useres ToUseresTbl(UseresE u)
        {
            Useres unew = new Useres() { id = u.id, name = u.name, password = u.password, email = u.email };
            return unew;
        }

        public static List<UseresE> ToListUseresEntities(List<Useres> lu)
        {
            List<UseresE> lunew = new List<UseresE>();
            lu.ForEach(u => lunew.Add(ToUseresEntities(u)));
            return lunew; 
        }

        public static List<Useres> ToListUseresTBL(List<UseresE> lu)
        {
            List<Useres> lunew = new List<Useres>();
            lu.ForEach(u => lunew.Add(ToUseresTbl(u)));
            return lunew;
        }
    }
}

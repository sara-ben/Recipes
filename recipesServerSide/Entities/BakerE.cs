using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
 public   class BakerE
    {
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string logo { get; set; }


        public static BakerE ToBakerEntities(Baker b)
        {
            BakerE bnew = new BakerE() { id =b.id, name = b.name, email=b.email,password=b.password,logo=b.logo };
            return bnew;
        }

        public static Baker ToBakerTbl(BakerE b)
        {
            Baker bnew = new Baker() { id = b.id, name = b.name, email = b.email, password = b.password, logo = b.logo };
            return bnew;
        }

        public static List<BakerE> ToListBakerEntities(List<Baker> lb)
        {
            List<BakerE> lbnew = new List<BakerE>();
            lb.ForEach(b => lbnew.Add(ToBakerEntities(b)));
            return lbnew;
        }

        public static List<Baker> ToListBakerTBL(List<BakerE> lb)
        {
            List<Baker> lbnew = new List<Baker>();
            lb.ForEach(b => lbnew.Add(ToBakerTbl(b)));
            return lbnew;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
   public class CategorieE
    {
        public int id { get; set; }
        public string descreption { get; set; }
        public bool optionChoice { get; set; }
        public static CategorieE ToCategorieEntities(Categorie c)
        {
            CategorieE cnew = new CategorieE() { id =c.id, descreption=c.descreption, optionChoice=c.optionChoice };
            return cnew;
        }

        public static Categorie ToCategorieTbl(CategorieE c)
        {
            Categorie cnew = new Categorie() { id = c.id, descreption = c.descreption, optionChoice = c.optionChoice };
            return cnew;
        }

        public static List<CategorieE> ToListCategorieEntities(List<Categorie> lc)
        {
            List<CategorieE> lcnew = new List<CategorieE>();
            lc.ForEach(c => lcnew.Add(ToCategorieEntities(c)));
            return lcnew;
        }

        public static List<Categorie> ToListCategorieTBL(List<CategorieE> lc)
        {
            List<Categorie> lcnew = new List<Categorie>();
            lc.ForEach(c => lcnew.Add(ToCategorieTbl(c)));
            return lcnew;
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
  public  class CategoriesValueE
    {
        public int id { get; set; }
        public int categoriesId { get; set; }
        public string name { get; set; }
        public static CategoriesValueE ToCategoriesValueEntities(CategoriesValue c)
        {
            CategoriesValueE cnew = new CategoriesValueE() { id = c.id, categoriesId = c.categoriesId, name = c.name };
            return cnew;
        }

        public static CategoriesValue ToCategoriesValueTbl(CategoriesValueE c)
        {
            CategoriesValue cnew = new CategoriesValue() { id = c.id, categoriesId = c.categoriesId, name = c.name };
            return cnew;
        }

        public static List<CategoriesValueE> ToListCategoriesValueEntities(List<CategoriesValue> lc)
        {
            List<CategoriesValueE> lcnew = new List<CategoriesValueE>();
            lc.ForEach(c => lcnew.Add(ToCategoriesValueEntities(c)));
            return lcnew;
        }

        public static List<CategoriesValue> ToListCategoriesValueTBL(List<CategoriesValueE> lc)
        {
            List<CategoriesValue> lcnew = new List<CategoriesValue>();
            lc.ForEach(c => lcnew.Add(ToCategoriesValueTbl(c)));
            return lcnew;
        }
    }
}

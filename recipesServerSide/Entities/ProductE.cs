using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public class ProductE
    {
        public int id { get; set; }
        public string name { get; set; }
        public double avgPrice { get; set; }
        public int numPriceUpdate { get; set; }
        public static ProductE ToProductEntities(Product p)
        {
            ProductE cnew = new ProductE() { id = p.id, name = p.name, avgPrice = p.avgPrice, numPriceUpdate = p.numPriceUpdate };
            return cnew;
        }
        public static Product ToProductTbl(ProductE p)
        {
            Product pnew = new Product() { id = p.id, name = p.name, avgPrice = p.avgPrice, numPriceUpdate = p.numPriceUpdate};
            return pnew;
        }

        public static List<ProductE> ToListProductEntities(List<Product> lp)
        {
            List<ProductE> lpnew = new List<ProductE>();
            lp.ForEach(p => lpnew.Add(ToProductEntities(p)));
            return lpnew;
        }

        public static List<Product> ToListProductTBL(List<ProductE> lp)
        {
            List<Product> lpnew = new List<Product>();
            lp.ForEach(p => lpnew.Add(ToProductTbl(p)));
            return lpnew;
        }


    }
}

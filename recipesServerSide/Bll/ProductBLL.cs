using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class ProductBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<ProductE> getAllProducts()//פונקצית שליפת כל המןצרים מהטבלה
        {
            var e = db.Product.ToList();
            return ProductE.ToListProductEntities(e);
        }
        public static List<ProductE> addProduct(Product p)//הוספת מוצר 
        {
            db.Product.Add(p);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllProducts();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteProduct(int id)// פונקצית למחיקת מוצר מהרשימה לפי תעודת זהות
        {
            db.Product.Remove(db.Product.First(i => i.id == id));//מחיקת מןצר לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static List<ProductE> updateProduct(ProductE p)//עדכון מוצר בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה מוצר הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 
            //db.Product.First(i => i.id == p.id).id = p.id;
            db.Product.First(i => i.id == p.id).name = p.name;
            db.Product.First(i => i.id ==p.id).avgPrice = p.avgPrice;
            db.Product.First(i => i.id == p.id).numPriceUpdate = p.numPriceUpdate;
            db.SaveChanges();
            return getAllProducts();
        }
        //שליפת מוצר לפי קוד
        public static ProductE getProductBL(int id)
        {
            var r = db.Product.First(i => i.id == id);
            return ProductE.ToProductEntities(r);
        }
    }
}

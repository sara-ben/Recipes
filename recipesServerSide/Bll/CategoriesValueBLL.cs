using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class CategoriesValueBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<CategoriesValueE> getAllCategoriesValues()//פונקצית שליפת כל ערכי הקטגוריה מהטבלה
        {
            return CategoriesValueE.ToListCategoriesValueEntities(db.CategoriesValue.ToList());
        }
        public static List<CategoriesValueE> addCategoriesValue(CategoriesValue c)//הוספת ערך-קטגוריה 
        {
            db.CategoriesValue.Add(c);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllCategoriesValues();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteCategoriesValue(int id)// פונקצית למחיקת ערך-קטגוריה מהרשימה לפי תעודת זהות
        {
            db.CategoriesValue.Remove(db.CategoriesValue.First(i => i.id == id));//מחיקת ערך-קטגוריה לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateCategoriesValue(CategoriesValueE c )//עדכון ערך-קטגוריה בטבלה
        {
            //השוואת התעודת זהות כדי לראות איזה ערך-קטגוריה הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 

            db.CategoriesValue.First(i => i.id == c.id).id = c.id;
            db.CategoriesValue.First(i => i.id == c.id).categoriesId = c.categoriesId;
            db.CategoriesValue.First(i => i.id == c.id).name = c.name;
   
            db.SaveChanges();
        }
        //שליפת ערך-קטגוריה לפי קוד
        public static List<CategoriesValueE> getCategoriesValueBL(int id)
        {
            return CategoriesValueE.ToListCategoriesValueEntities(db.CategoriesValue.Where(i => i.categoriesId == id).ToList());
        }
    }
}

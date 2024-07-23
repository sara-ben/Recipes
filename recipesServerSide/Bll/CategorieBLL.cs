using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;

namespace Bll
{
    public class CategorieBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<CategorieE> getAllCategories()//פונקצית שליפת כל הקטגוריות מהטבלה
        {
            return CategorieE.ToListCategorieEntities(db.Categorie.ToList());
        }
        public static List<CategorieE> addCategorie(Categorie c)//הוספת קטגוריה 
        {
            db.Categorie.Add(c);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllCategories();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteCategorie(int id)// פונקצית למחיקת קטגוריה מהרשימה לפי תעודת זהות
        {
            db.Categorie.Remove(db.Categorie.First(i => i.id == id));//מחיקת קטגוריה לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateCategorie(CategorieE c)//עדכון קטגוריה בטבלה
        {
            //השוואת התעודת זהות כדי לראות איזה קטגוריה הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 
            db.Categorie.First(i => i.id == c.id).descreption = c.descreption;
            db.Categorie.First(i => i.id == c.id).optionChoice = c.optionChoice;
            db.SaveChanges();
        }
        public static BakerE getCategorieBL(int id) //שליפת קטגוריה לפי קוד
        {
            return BakerE.ToBakerEntities(db.Baker.FirstOrDefault(i => i.id == id));
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
 public   class BakerBLL
    {
        public static Entities1 db= new Entities1();//יצירת מופע מהDB
        public static List<BakerE> getAllbakers()//פונקצית שליפת כל השפים מהטבלה
        {
            return BakerE.ToListBakerEntities(db.Baker.ToList());
        }
        public static List<BakerE> addBaker(Baker b)//הוספת שף 
        {
            db.Baker.Add(b);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllbakers();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteBaker(int id)// פונקצית למחיקת שף מהרשימה לפי תעודת זהות
        {
            db.Baker.Remove(db.Baker.First(i => i.id == id));//מחיקת שף לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateBaker(BakerE b)//עדכון שף בטבלה
        {
            //השוואת התעודת זהות כדי לראות איזה שף הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 
            
            db.Baker.First(i => i.id == b.id).name = b.name;
            db.Baker.First(i => i.id == b.id).email = b.email;
            db.Baker.First(i => i.id == b.id).password = b.password;
            db.SaveChanges();
        }
        //שליפת שף לפי קוד
        public static BakerE getBakerBL(int id)
        {
            var b = db.Baker.First(i => i.id == id);
            return BakerE.ToBakerEntities(b);
        }

        public static int getIdBakerByPassword(string password)
        {
            //int  idBaker = 0;

            foreach (var item in db.Baker)
            {
                if (item.password == password)
                {
                    //idBaker = item.id;
                    //break;
                    return item.id;

                }
            }
            return 0;
            //    foreach (var item in db.Recipe)
            //    {
            //        if (item.bakerId == idBaker)
            //        {
            //            foreach (var x in db.RecipeGrade)
            //            {
            //                if (x.recipeId == item.id)
            //                {
            //                    lrg.Add(RecipeGradeE.ToRecipeGradeEntities(x));
            //                }
            //            }
            //        }
            //    }
            //    return lrg.ToList();
        }
    }
}

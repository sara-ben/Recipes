using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class UseresBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<UseresE> getAllUseres()//פונקצית שליפת כל המשתמשים מהטבלה
        {
            return UseresE.ToListUseresEntities(db.Useres.ToList());
        }
        public static List<UseresE> addUseres(Useres b)//הוספת משתמש 
        {
            db.Useres.Add(b);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllUseres();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteUseres(int id)// פונקצית למחיקת משתמש מהרשימה לפי תעודת זהות
        {
            db.Useres.Remove(db.Useres.First(i => i.id == id));//מחיקת משתשמש לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateUseres(UseresE b)//עדכון משתשמש בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה משתשמש הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 
            db.Useres.First(i => i.id == b.id).id = b.id;
            db.Useres.First(i => i.id == b.id).name = b.name;
            db.Useres.First(i => i.id == b.id).email = b.email;
            db.Useres.First(i => i.id == b.id).password = b.password;
            db.SaveChanges();
        }
        //שליפת משתמש לפי קוד
        public static UseresE getUseresBL(int id)
        {
            return UseresE.ToUseresEntities(db.Useres.FirstOrDefault(i => i.id == id));
        }
        static string correctPassword;
        private static string UsersId;
        private static string UsersName;

        //פונקציה שבודקת סיסמא
        public static UseresE checkPassword(string password)
        {
            UseresE u = UseresE.ToUseresEntities(db.Useres.FirstOrDefault(u1 => u1.password == password));
            if (u == null)
                return u;
            else
            {
                correctPassword = password;
                return u;
            }
        }
        ///בדיקה סטטוס משתמש
        //1-מנהל
        //    2-שף
        //    3-משתמש 
        //    4-לא נימצא
        public static int GetStatus(string email, string password)
        {
            if (email == "q@q.com" && password == "1234")
            {
                return 1;
            }
            if (db.Baker.FirstOrDefault(b => b.password == password && b.email == email) != null)
            {
                return 2;
            }
            if (db.Useres.FirstOrDefault(u => u.password == password && u.email == email) != null)
            {
                return 3;
            }
            else
                return 4;
        }

    }
}

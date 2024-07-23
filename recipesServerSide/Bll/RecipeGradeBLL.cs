using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class RecipeGradeBLL
    {
        public static List<BakerE> lb = new List<BakerE>();
      public static  List<RecipeE>  lr = new List<RecipeE>();
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<RecipeGradeE> getAllRecipeGrades()//פונקצית שליפת כל הציונים מהטבלה
        {
            return RecipeGradeE.ToListRecipeGradeEntities(db.RecipeGrade.ToList());
        }
        public static List<RecipeGradeE> addRecipeGrade(RecipeGrade b)//הוספת ציון 
        {
            db.RecipeGrade.Add(b);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllRecipeGrades();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteRecipeGrade(int id)// פונקצית למחיקת ציון מהרשימה לפי תעודת זהות
        {
            db.RecipeGrade.Remove(db.RecipeGrade.First(i => i.id == id));//מחיקת ציון לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateRecipeGrade(RecipeGradeE b)//עדכון ציון בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה ציון הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 

            db.RecipeGrade.First(i => i.id == b.id).id = b.id;
            db.RecipeGrade.First(i => i.id == b.id).recipeId = b.recipeId;
            db.RecipeGrade.First(i => i.id == b.id).grade = b.grade;
            db.RecipeGrade.First(i => i.id == b.id).UserId = b.UserId;
            db.RecipeGrade.First(i => i.id == b.id).comment = b.comment;
            db.SaveChanges();
        }
        //שליפת ציון לפי קוד
        public static RecipeGradeE getRecipeGradeBL(int id)
        {
            return RecipeGradeE.ToRecipeGradeEntities(db.RecipeGrade.FirstOrDefault(i => i.id == id));
        }
        //תקבל את כל רשימת האופים
        //    תחזיר רשמת ציונים

            //הפונקציה מקבלת קוד של מתכון מסוים
        public static double getRecipeGradeByBaker(string password)
        {
            double sum = 0;
            int cnt = 0, idBaker = 0;

            //שליפת כל השפים
                lb = BakerBLL.getAllbakers();
           //הפונקציה מוצאת את השף של המתכון
            foreach (var item in lb)
            {
                if (item.password == password)
                {
                    idBaker = item.id;
                    break;
                }
            }
            //שליפת כל המתכונים
              lr = RecipeBLL.getAllRecipes();
            //הפונקציה מוצאת את הממוצע של כל המתכונים של השף
            foreach (var item in lr)
            {
                if (item.bakerId == idBaker)
                {
                    foreach (var x in db.RecipeGrade)
                    {
                        if (x.recipeId == item.id)
                        {
                            cnt++;
                            sum += x.grade;
                        }
                    }
                }
            }
           // ממוצע
            return sum / cnt;
        }
        //הפונקציה מקבלת מערך שפים
        public static List<LeaderBakerE> getLeadBaker()
        {
            double sum = 0;
            int cnt = 0;
            //אתחול המערך
            List<LeaderBakerE> leaderBakers = new List<LeaderBakerE>();
            LeaderBakerE leaderBaker = new LeaderBakerE();
            //לולאה שרצה על כל השפים
            foreach (var y in db.Baker)
            {
                cnt = 0;
                sum = 0;
                //לולאה שרצה על כל המתכונים
                foreach (var item in db.Recipe)
                {
                    //בדיקה אם המתכון הנוכחי הוא שייך לשף הנוכחי 
                    if (item.bakerId == y.id)
                    {
                        //א"כ 
                        //הלולאה עוברת על כל הציונים
                        foreach (var x in db.RecipeGrade)
                        {
                            //בדיקה אם הם של המתכון הנוכחי
                            if (x.recipeId == item.id)
                            {
                                //ספירה כמה ציונים למתכון
                                cnt++;
                                //סכימת הציונים של המתכון
                                sum += x.grade;
                            }
                        }
                    }
                }
                //ממוצע
                var avgGrade = sum / cnt;

                if (avgGrade != 0 && avgGrade.ToString() != "NaN")
                {
                    //הכנסת הנתונים של השף המוביל 
                    leaderBaker.avgGrade = avgGrade;
                    leaderBaker.id = y.id;
                    leaderBaker.logo = y.logo;
                    leaderBaker.name = y.name;
                    leaderBaker.password = y.password;
                    leaderBaker.email = y.email;
                    leaderBakers.Add(leaderBaker);
                    leaderBaker = new LeaderBakerE();
                }

            }
          //  leaderBakers.OrderByDescending(l => l.avgGrade);
            return leaderBakers;
            //            דבר שני-מיון מערך ב-C#:
            //אם את רוצה מיון רגיל:
            //            ; ()db.LessonOutlinesTBL.OrderBy(l => l.LOId).ToList
            //ובתוך הסוגריים-ביטוי למבדא של הערך לפיו ימיין.
            //ואם את רוצה מיון הפוך - desc:
            //; ()db.LessonOutlinesTBL.OrderByDescending(l => l.LOId).ToList
            //והערך בסוגריים-כנ"ל...
        }
  
    }
}

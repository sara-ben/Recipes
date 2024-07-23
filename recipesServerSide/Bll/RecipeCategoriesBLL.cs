using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class RecipeCategoriesBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<RecipeCategoriesE> getAllRecipeCategoriess()//פונקצית שליפת כל קטגוריות-המכון מהטבלה
        {
            return RecipeCategoriesE.ToListRecipeCategoriesEntities(db.RecipeCategories.ToList());
        }
        public static List<RecipeCategoriesE> addRecipeCategories(RecipeCategories b)//הוספת קטגורית-מתכון 
        {
            db.RecipeCategories.Add(b);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllRecipeCategoriess();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteRecipeCategories(int id)// פונקצית למחיקת קטגורית-מתכון מהרשימה לפי תעודת זהות
        {
            db.RecipeCategories.Remove(db.RecipeCategories.First(i => i.id == id));//מחיקת קטגורית-מתכון לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateRecipeCategories(RecipeCategoriesE b)//עדכון קטגורית-מתכון בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה קטגורית-מתכון הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 

            db.RecipeCategories.First(i => i.id == b.id).categoriesValuId = b.categoriesValuId;
            db.RecipeCategories.First(i => i.id == b.id).id = b.id;
            db.RecipeCategories.First(i => i.id == b.id).recipeId = b.recipeId;
            db.SaveChanges();
        }
        //שליפת קטגורית-מתכון לפי קוד
        public static RecipeCategoriesE getRecipeCategoriesBL(int id)
        {
            return RecipeCategoriesE.ToRecipeCategoriesEntities(db.RecipeCategories.FirstOrDefault(i => i.id == id));
        }
    }
}

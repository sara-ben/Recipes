using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class RecipeIngredientsBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<RecipeIngredientsE> getAllRecipeIngredientss()//פונקצית שליפת כל מוצרי- המתכון מהטבלה
        {
            return RecipeIngredientsE.ToListRecipeIngredientsEntities(db.RecipeIngredients.ToList());
        }
        public static List<RecipeIngredientsE> addRecipeIngredients(RecipeIngredients b)//הוספת מוצר למתכון 
        {
            db.RecipeIngredients.Add(b);//הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllRecipeIngredientss();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteRecipeIngredients(int id)// פונקצית למחיקת מוצר מהרשימה לפי תעודת זהות
        {
            db.RecipeIngredients.Remove(db.RecipeIngredients.First(i => i.id == id));//מחיקת מוצר לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static void updateRecipeIngredients(RecipeIngredientsE b)//עדכון מוצר בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה מוצר הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 

            db.RecipeIngredients.First(i => i.id == b.id).id = b.id;
            db.RecipeIngredients.First(i => i.id == b.id).recipeId = b.recipeId;
            db.RecipeIngredients.First(i => i.id == b.id).productId = b.productId;
            db.RecipeIngredients.First(i => i.id == b.id).amount = b.amount;
            db.SaveChanges();
        }
        //שליפת מוצר לפי קוד
        public static RecipeIngredientsE getRecipeIngredientsBL(int id)
        {
            return RecipeIngredientsE.ToRecipeIngredientsEntities(db.RecipeIngredients.FirstOrDefault(i => i.id == id));
        }
        //שליפת מוצר לפי קוד מתכון!!
        public static  List<RecipeIngredientsE> getAllRecipeIngredientssByRecipeBL(int id)
        {
            var a = db.RecipeIngredients.Where(i => i.recipeId == id).ToList();
            return RecipeIngredientsE.ToListRecipeIngredientsEntities(a);
        }

    }
}

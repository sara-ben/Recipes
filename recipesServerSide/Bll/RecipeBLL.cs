using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using Entities;
namespace Bll
{
    public class RecipeBLL
    {
        public static Entities1 db = new Entities1();//יצירת מופע מהDB
        public static List<RecipeE> getAllRecipes()//פונקצית שליפת כל מתכונים מהטבלה
        {
            return RecipeE.ToListRecipeEntities(db.Recipe.ToList());
        }
        public static List<RecipeE> addRecipe(NewRecipeE r,string password)//הוספת מתכון 
        {
            r.NRecipe.bakerId = db.Baker.Where(x => x.password == password).Select(x => x.id).First();
            db.Recipe.Add(RecipeE.ToRecipeTbl(r.NRecipe));
            db.SaveChanges();
            foreach (var item in r.NListIng)
            {
                RecipeIngredients r1 = new RecipeIngredients();
                r1.recipeId = db.Recipe.Where(x=>x.name==r.NRecipe.name).Select(x=>x.id).First();
                r1.productId = db.Product.Where(x=>x.name==item.product.name).Select(x=>x.id).First();
                r1.amount = item.amount;
                db.RecipeIngredients.Add(r1);
            }
            foreach (var item in r.NListCat)
            {
                RecipeCategories c = new RecipeCategories();
                c.recipeId=db.Recipe.Where(x => x.name == r.NRecipe.name).Select(x => x.id).First();
                c.categoriesValuId = item.id;
                db.RecipeCategories.Add(c);
            }
            //הוספה לטבלה
            db.SaveChanges();//שמירת כל הנתונים בטבלה
            return getAllRecipes();//החזרת כל הנתונים שבטבלה
        }
        public static void deleteRecipe(int id)// פונקצית למחיקת מתכון מהרשימה לפי תעודת זהות
        {
            db.Recipe.Remove(db.Recipe.First(i => i.id == id));//מחיקת מתכון לפי התעודת זהות
            db.SaveChanges();//שמירה על הנתונים
        }
        public static List<RecipeE> updateRecipe(RecipeE r)//עדכון מתכון בטבלה
        {
            //השואת התעודת זהות כדי לראות איזה מתכון הוא מעדכן ואז מעדכן את שאר השדות בטבלה
            //אין צורך לעדכן תעודת זהות כיון שתעודת זהות אי אפשר לשנות 

            db.Recipe.First(i => i.id == r.id).image = r.image;
            db.Recipe.First(i => i.id == r.id).id = r.id;
            db.Recipe.First(i => i.id == r.id).bakerId = r.bakerId;
            db.Recipe.First(i => i.id == r.id).name = r.name;
            db.Recipe.First(i => i.id == r.id).numPortion = r.numPortion;
            db.Recipe.First(i => i.id == r.id).instruction = r.instruction;
            db.Recipe.First(i => i.id == r.id).time = r.time;
            db.SaveChanges();
            return getAllRecipes();
        }
        //שליפת מתכון לפי קוד
        public static RecipeE getRecipeBL(int id)
        {
            var a = db.Recipe.First(i => i.id == id);
            return RecipeE.ToRecipeEntities(a);
        }
        //שליפת מתכון לפי קוד אופה
        public static List<RecipeE> GetRecipesByBakerEmailBL(string Email)
        {//מצאנו טבלת אופה את האופה הספיציפי הזה לפי המייל
            //ושמרנו את כל האובייקט
            Baker idBaker = db.Baker.FirstOrDefault(p => p.email == Email);
            //השווינו בין Id של התכונים
             //ל id שמאצנו
            return RecipeE.ToListRecipeEntities(db.Recipe.Where(i => i.bakerId == idBaker.id).ToList());
        }
    }
}

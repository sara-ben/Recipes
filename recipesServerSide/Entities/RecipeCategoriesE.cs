using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public class RecipeCategoriesE
    {
        public int id { get; set; }
        public int recipeId { get; set; }
        public int categoriesValuId { get; set; }
        public static RecipeCategoriesE ToRecipeCategoriesEntities(RecipeCategories r)
        {
            RecipeCategoriesE rnew = new RecipeCategoriesE() { id = r.id, recipeId = r.recipeId, categoriesValuId = r.categoriesValuId};
            return rnew;
        }
        public static RecipeCategories ToRecipeCategoriesTbl(RecipeCategoriesE r)
        {
            RecipeCategories rnew = new RecipeCategories() { id = r.id, recipeId = r.recipeId, categoriesValuId = r.categoriesValuId };
            return rnew;
        }

        public static List<RecipeCategoriesE> ToListRecipeCategoriesEntities(List<RecipeCategories> lr)
        {
            List<RecipeCategoriesE> lrnew = new List<RecipeCategoriesE>();
            lr.ForEach(r => lrnew.Add(ToRecipeCategoriesEntities(r)));
            return lrnew;
        }

        public static List<RecipeCategories> ToListRecipeCategoriesTBL(List<RecipeCategoriesE> lr)
        {
            List<RecipeCategories> lrnew = new List<RecipeCategories>();
            lr.ForEach(r => lrnew.Add(ToRecipeCategoriesTbl(r)));
            return lrnew;
        }
    }
}

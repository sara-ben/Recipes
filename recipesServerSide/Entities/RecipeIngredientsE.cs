using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public class RecipeIngredientsE
    {
        public int id { get; set; }
        public int recipeId { get; set; }
        public int productId { get; set; }
        public string name { get; set; }
        public double amount { get; set; }
        public static RecipeIngredientsE ToRecipeIngredientsEntities(RecipeIngredients r)
        {
            RecipeIngredientsE rnew = new RecipeIngredientsE() { id = r.id, recipeId = r.recipeId, productId = r.productId, amount = r.amount,name=r.Product.name};
            return rnew;
        }
        public static RecipeIngredients ToRecipeIngredientsTbl(RecipeIngredientsE r)
        {
            RecipeIngredients rnew = new RecipeIngredients() { id = r.id, recipeId = r.recipeId, productId = r.productId, amount = r.amount };
            return rnew;
        }

        public static List<RecipeIngredientsE> ToListRecipeIngredientsEntities(List<RecipeIngredients> lr)
        {
            List<RecipeIngredientsE> lrnew = new List<RecipeIngredientsE>();
            lr.ForEach(r => lrnew.Add(ToRecipeIngredientsEntities(r)));
            return lrnew;
        }

        public static List<RecipeIngredients> ToListRecipeIngredientsTBL(List<RecipeIngredientsE> lr)
        {
            List<RecipeIngredients> lrnew = new List<RecipeIngredients>();
            lr.ForEach(r => lrnew.Add(ToRecipeIngredientsTbl(r)));
            return lrnew;
        }
    }
}

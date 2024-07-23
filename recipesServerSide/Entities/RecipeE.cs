using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public  class RecipeE
    {
        public int id { get; set; }
        public string name { get; set; }
        public int bakerId { get; set; }
        public Nullable<System.TimeSpan> time { get; set; }
        public Nullable<int> numPortion { get; set; }
        public string image { get; set; }
        public string instruction { get; set; }
        public bool isMax { get; set; }
        public static RecipeE ToRecipeEntities(Recipe r)
        {
            RecipeE rnew = new RecipeE() { id = r.id, name = r.name, bakerId = r.bakerId, time = r.time, numPortion = r.numPortion, image = r.image, instruction = r.instruction };
            return rnew;
        }
        public static Recipe ToRecipeTbl(RecipeE r)
        {
            Recipe rnew = new Recipe() { id = r.id, name = r.name, bakerId = r.bakerId, time = r.time, numPortion = r.numPortion, image = r.image, instruction = r.instruction };
            return rnew;
        }

        public static List<RecipeE> ToListRecipeEntities(List<Recipe> lr)
        {
            List<RecipeE> lrnew = new List<RecipeE>();
            lr.ForEach(r => lrnew.Add(ToRecipeEntities(r)));
            return lrnew;
        }

        public static List<Recipe> ToListRecipeTBL(List<RecipeE> lr)
        {
            List<Recipe> lrnew = new List<Recipe>();
            lr.ForEach(r=> lrnew.Add(ToRecipeTbl(r)));
            return lrnew;
        }
      
    }
  

}

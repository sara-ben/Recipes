using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
  public  class NewRecipeE
    {
        public RecipeE NRecipe { get; set; }
        public ListOfProductE[] NListIng { get; set; }
        public CategoriesValueE[] NListCat { get; set; }
    }

    public class ListOfProductE
    {
        public ProductE product { get; set; }
        public int amount { get; set; }
    }
}

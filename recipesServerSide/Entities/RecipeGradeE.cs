using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Entities
{
    public class RecipeGradeE
    {
        public int id { get; set; }
        public int recipeId { get; set; }
        public int UserId { get; set; }
        public int grade { get; set; }
        public string comment { get; set; }
        public static RecipeGradeE ToRecipeGradeEntities(RecipeGrade r)
        {
            RecipeGradeE rnew = new RecipeGradeE() { id = r.id, recipeId = r.recipeId, UserId = r.UserId, grade = r.grade, comment = r.comment};
            return rnew;
        }
        public static RecipeGrade ToRecipeGradeTbl(RecipeGradeE r)
        {
            RecipeGrade rnew = new RecipeGrade() { id = r.id, recipeId = r.recipeId, UserId = r.UserId, grade = r.grade, comment = r.comment };
            return rnew;
        }

        public static List<RecipeGradeE> ToListRecipeGradeEntities(List<RecipeGrade> lr)
        {
            List<RecipeGradeE> lrnew = new List<RecipeGradeE>();
            lr.ForEach(r => lrnew.Add(ToRecipeGradeEntities(r)));
            return lrnew;
        }

        public static List<RecipeGrade> ToListRecipeGradeTBL(List<RecipeGradeE> lr)
        {
            List<RecipeGrade> lrnew = new List<RecipeGrade>();
            lr.ForEach(r => lrnew.Add(ToRecipeGradeTbl(r)));
            return lrnew;
        }
    }
}

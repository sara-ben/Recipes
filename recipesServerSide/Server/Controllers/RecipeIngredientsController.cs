using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;
using Dal;
using Entities;

namespace Server.Controllers
{

    [RoutePrefix("api/RecipeIngredients")]
    public class RecipeIngredientsController : ApiController
    {

        [Route("getAllRecipeIngredients")]
        [HttpGet]
        public IHttpActionResult getAllRecipeIngredients()
        {
            return Ok(RecipeIngredientsBLL.getAllRecipeIngredientss());
        }

        [Route("addRecipeIngredients")]
        [HttpPost]
        public IHttpActionResult addRecipeIngredients(RecipeIngredientsE b)
        {
            RecipeIngredientsBLL.addRecipeIngredients(RecipeIngredientsE.ToRecipeIngredientsTbl(b));
            return Ok(getAllRecipeIngredients());
        }
        [Route("editRecipeIngredients")]
        [HttpPost]
        public IHttpActionResult editRecipeIngredients(RecipeIngredientsE b)
        {
            RecipeIngredientsBLL.updateRecipeIngredients(b);
            return Ok(getAllRecipeIngredients());
        }
        [Route("deleteRecipeIngredients/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteRecipeIngredients(int id)
        {
            RecipeIngredientsBLL.deleteRecipeIngredients(id);
            return Ok(getAllRecipeIngredients());
        }
        [Route("getRecipeIngredients/{id}")]
        [HttpGet]
        public IHttpActionResult getRecipeIngredients(int id)
        {
            return Ok(RecipeIngredientsBLL.getRecipeIngredientsBL(id));
        }
        [Route("getAllRecipeIngredientss/{id}")]
        [HttpGet]
        public IHttpActionResult getAllRecipeIngredientss(int id)
        {
            return Ok(RecipeIngredientsBLL.getAllRecipeIngredientss());
        }

        [Route("getAllRecipeIngredientssByRecipe/{id}")]
        [HttpGet]
        public IHttpActionResult getAllRecipeIngredientssByRecipe(int id)
        {
            return Ok(RecipeIngredientsBLL.getAllRecipeIngredientssByRecipeBL(id));
        }
    }
}

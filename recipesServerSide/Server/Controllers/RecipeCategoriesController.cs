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

    [RoutePrefix("api/RecipeCategories")]
    public class RecipeCategoriesController : ApiController
    {

        [Route("getAllRecipeCategories")]
        [HttpGet]
        public IHttpActionResult getAllRecipeCategories()
        {
            return Ok(RecipeCategoriesBLL.getAllRecipeCategoriess());
        }

        [Route("addRecipeCategories")]
        [HttpPost]
        public IHttpActionResult addRecipeCategories(RecipeCategoriesE b)
        {
            RecipeCategoriesBLL.addRecipeCategories(RecipeCategoriesE.ToRecipeCategoriesTbl(b));
            return Ok(getAllRecipeCategories());
        }
        [Route("editRecipeCategories")]
        [HttpPost]
        public IHttpActionResult editRecipeCategories(RecipeCategoriesE b)
        {
            RecipeCategoriesBLL.updateRecipeCategories(b);
            return Ok(getAllRecipeCategories());
        }
        [Route("deleteRecipeCategories/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteRecipeCategories(int id)
        {
            RecipeCategoriesBLL.deleteRecipeCategories(id);
            return Ok(getAllRecipeCategories());
        }
        [Route("getRecipeCategories/{id}")]
        [HttpGet]
        public IHttpActionResult getRecipeCategories(int id)
        {
            return Ok(RecipeCategoriesBLL.getRecipeCategoriesBL(id));
        }
        [Route("getAllRecipeCategoriess/{id}")]
        [HttpGet]
        public IHttpActionResult getAllRecipeCategoriess(int id)
        {
            return Ok(RecipeCategoriesBLL.getAllRecipeCategoriess());
        }
    }
}

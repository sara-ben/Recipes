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

    [RoutePrefix("api/Recipe")]
    public class RecipeController : ApiController
    {

        [Route("getAllRecipe")]
        [HttpGet]
        public IHttpActionResult getAllRecipe()
        {
            return Ok(RecipeBLL.getAllRecipes());
        }

        [Route("addRecipe/{pssword}")]
        [HttpPost]
        public IHttpActionResult addRecipe(string pssword,NewRecipeE r)
        {
            
            return Ok(RecipeBLL.addRecipe(r, pssword));
        }
        [Route("updateRecipe")]
        [HttpPut]
        public IHttpActionResult updateRecipe([FromBody] RecipeE r)
        {
            RecipeBLL.updateRecipe(r);
            return Ok(getAllRecipe());
        }
        [Route("deleteRecipe/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteRecipe(int id)
        {
            RecipeBLL.deleteRecipe(id);
            return Ok(getAllRecipe());
        }
        [Route("GetRecipeById/{id}")]
        [HttpGet]
        public IHttpActionResult GetRecipeById(int id)
        {
            return Ok(RecipeBLL.getRecipeBL(id));
        }
        [Route("getAllRecipes/{id}")]
        [HttpGet]
        public IHttpActionResult getAllRecipes(int id)
        {
            return Ok(RecipeBLL.getAllRecipes());
        }

        [Route("GetRecipesByBakerEmail/{Email}")]
        [HttpGet]
        public IHttpActionResult GetRecipesByBakerEmail(string Email)
        {
            string email = Email + "@gmail.com";
            return Ok(RecipeBLL.GetRecipesByBakerEmailBL(email));
        }


    }
}

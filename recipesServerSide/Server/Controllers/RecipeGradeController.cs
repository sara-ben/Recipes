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

    [RoutePrefix("api/RecipeGrade")]
    public class RecipeGradeController : ApiController
    {

        [Route("getAllRecipeGrade")]
        [HttpGet]
        public IHttpActionResult getAllRecipeGrade()
        {
            return Ok(RecipeGradeBLL.getAllRecipeGrades());
        }

        [Route("addRecipeGrade")]
        [HttpPost]
        public IHttpActionResult addRecipeGrade([FromBody] RecipeGradeE b)
        {
            RecipeGradeBLL.addRecipeGrade(RecipeGradeE.ToRecipeGradeTbl(b));
            return Ok(getAllRecipeGrade());
        }
        [Route("editRecipeGrade")]
        [HttpPost]
        public IHttpActionResult editRecipeGrade([FromBody] RecipeGradeE b)
        {
            RecipeGradeBLL.updateRecipeGrade(b);
            return Ok(getAllRecipeGrade());
        }
        [Route("deleteRecipeGrade/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteRecipeGrade(int id)
        {
            RecipeGradeBLL.deleteRecipeGrade(id);
            return Ok(getAllRecipeGrade());
        }
        [Route("getRecipeGrade/{id}")]
        [HttpGet]
        public IHttpActionResult getRecipeGrade(int id)
        {
            return Ok(RecipeGradeBLL.getRecipeGradeBL(id));
        }
        [Route("getAllRecipeGrades/{id}")]
        [HttpGet]
        public IHttpActionResult getAllRecipeGrades(int id)
        {
            return Ok(RecipeGradeBLL.getAllRecipeGrades());
        }

        [Route("GetRecipeGradeByBaker/{password}")]
        [HttpGet]
        public IHttpActionResult GetRecipeGradeByBaker(string password)
        {
            return Ok(RecipeGradeBLL.getRecipeGradeByBaker(password));
        }
        [Route("getLeadBaker")]
        [HttpGet]
        public IHttpActionResult getLeadBaker()
        {
            return Ok(RecipeGradeBLL.getLeadBaker());
        }
    }
}

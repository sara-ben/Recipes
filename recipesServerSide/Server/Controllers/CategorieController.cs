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

    [RoutePrefix("api/Categorie")]
    public class CategorieController : ApiController
    {

        [Route("getAllCategorie")]
        [HttpGet]
        public IHttpActionResult getAllCategorie()
        {
            return Ok(CategorieBLL.getAllCategories());
        }

        [Route("addCategorie")]
        [HttpPost]
        public IHttpActionResult addCategorie(CategorieE b)
        {
            CategorieBLL.addCategorie(CategorieE.ToCategorieTbl(b));
            return Ok(getAllCategorie());
        }
        [Route("editCategorie")]
        [HttpPost]
        public IHttpActionResult editCategorie(CategorieE c)
        {
            CategorieBLL.updateCategorie(c);
            return Ok(getAllCategorie());
        }
        [Route("deleteCategorie/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteCategorie(int id)
        {
            CategorieBLL.deleteCategorie(id);
            return Ok(getAllCategorie());
        }
        [Route("getCategorie/{id}")]
        [HttpGet]
        public IHttpActionResult getCategorie(int id)
        {
            return Ok(CategorieBLL.getCategorieBL(id));
        }
        [Route("getAllCategories/{id}")]
        [HttpGet]
        public IHttpActionResult getAllCategories(int id)
        {
            return Ok(CategorieBLL.getAllCategories());
        }
    }
}

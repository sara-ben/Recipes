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

    [RoutePrefix("api/CategoriesValue")]
    public class CategoriesValueController : ApiController
    {

        [Route("getAllCategoriesValue")]
        [HttpGet]
        public IHttpActionResult getAllCategoriesValue()
        {
            return Ok(CategoriesValueBLL.getAllCategoriesValues());
        }

        [Route("addCategoriesValue")]
        [HttpPost]
        public IHttpActionResult addCategoriesValue(CategoriesValueE b)
        {
            CategoriesValueBLL.addCategoriesValue(CategoriesValueE.ToCategoriesValueTbl(b));
            return Ok(getAllCategoriesValue());
        }
        [Route("editCategoriesValue")]
        [HttpPost]
        public IHttpActionResult editCategoriesValue(CategoriesValueE b)
        {
            CategoriesValueBLL.updateCategoriesValue(b);
            return Ok(getAllCategoriesValue());
        }
        [Route("deleteCategoriesValue/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteCategoriesValue(int id)
        {
            CategoriesValueBLL.deleteCategoriesValue(id);
            return Ok(getAllCategoriesValue());
        }
        [Route("getCategoriesValue/{id}")]
        [HttpGet]
        public IHttpActionResult getCategoriesValue(int id)
        {
            return Ok(CategoriesValueBLL.getCategoriesValueBL(id));
        }
        [Route("GetCategoriesValueByIdCategories/{id}")]
        [HttpGet]
        public IHttpActionResult getAllCategoriesValues(int id)
        {
            return Ok(CategoriesValueBLL.getCategoriesValueBL(id));
        }
    }
}

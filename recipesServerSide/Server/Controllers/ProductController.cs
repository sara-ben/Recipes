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

    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {

        [Route("getAllProduct")]
        [HttpGet]
        public IHttpActionResult getAllProduct()
        {
            return Ok(ProductBLL.getAllProducts());
        }

        [Route("addProduct")]
        [HttpPost]
        public IHttpActionResult addProduct(ProductE b)
        {
            ProductBLL.addProduct(ProductE.ToProductTbl(b));
            return Ok(getAllProduct());
        }
        [Route("editProduct")]
        [HttpPut]
        public IHttpActionResult editProduct(ProductE b)
        {
            
            return Ok(ProductBLL.updateProduct(b));
        }
        [Route("deleteProduct/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteProduct(int id)
        {
            ProductBLL.deleteProduct(id);
            return Ok(getAllProduct());
        }
        [Route("getProduct/{id}")]
        [HttpGet]
        public IHttpActionResult getProduct(int id)
        {
            List<RecipeIngredientsE> l = RecipeIngredientsBLL.getAllRecipeIngredientssByRecipeBL(id);
            List<ProductE> lp = new List<ProductE>();
            foreach (var item in l)
            {
              lp.Add(ProductBLL.getProductBL(item.productId));
            }
            return Ok(lp);
        }
        [Route("getAllProducts/{id}")]
        [HttpGet]
        public IHttpActionResult getAllProducts(int id)
        {
            return Ok(ProductBLL.getAllProducts());
        }
    }
}

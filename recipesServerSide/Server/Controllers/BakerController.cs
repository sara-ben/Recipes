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
  
        [RoutePrefix("api/Baker")]
        public class BakerController : ApiController
        {

            [Route("getAllBaker")]
            [HttpGet]
            public IHttpActionResult getAllBaker()
            {
                return Ok(BakerBLL.getAllbakers());
            }

            [Route("addBaker")]
            [HttpPost]
            public IHttpActionResult addBaker(BakerE b)
            {
                BakerBLL.addBaker(BakerE.ToBakerTbl(b));
                return Ok(getAllBaker());
            }
            [Route("editBaker")]
            [HttpPost]
            public IHttpActionResult editBaker(BakerE b)
            {
                 BakerBLL.updateBaker(b);
                 return Ok(getAllBaker());
            }
            [Route("deleteBaker/{id}")]
            [HttpDelete]
            public IHttpActionResult deleteBaker(int id)
            {
            BakerBLL.deleteBaker(id);
                return Ok(getAllBaker());
            }
             [Route("getBaker/{id}")]
             [HttpGet]
             public IHttpActionResult getBaker(int id)
            {
                return Ok(BakerBLL.getBakerBL(id));
            }
            [Route("getAllBakers/{id}")]
            [HttpGet]
            public IHttpActionResult getAllBakers(int id)
            {
                return Ok(BakerBLL.getAllbakers());
            }
        [Route("GetIdBakerByPassword/{password}")]
        [HttpGet]
        public IHttpActionResult GetIdBakerByPassword(string password)
        {
            return Ok(BakerBLL.getIdBakerByPassword(password));
        }
    }
    }

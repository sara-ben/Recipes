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

    [RoutePrefix("api/Useres")]
    public class UseresController : ApiController
    {

        [Route("getAllUseres")]
        [HttpGet]
        public IHttpActionResult getAllUseres()
        {
            return Ok(UseresBLL.getAllUseres());
        }

        [Route("addUseres")]
        [HttpPost]
        public IHttpActionResult addUseres(UseresE b)
        {
            UseresBLL.addUseres(UseresE.ToUseresTbl(b));
            return Ok(getAllUseres());
        }
        [Route("editUseres")]
        [HttpPost]
        public IHttpActionResult editUseres(UseresE b)
        {
            UseresBLL.updateUseres(b);
            return Ok(getAllUseres());
        }
        [Route("deleteUseres/{id}")]
        [HttpDelete]
        public IHttpActionResult deleteUseres(int id)
        {
            UseresBLL.deleteUseres(id);
            return Ok(getAllUseres());
        }
        [Route("getUseres/{id}")]
        [HttpGet]
        public IHttpActionResult getUseres(int id)
        {
            return Ok(UseresBLL.getUseresBL(id));
        }
        [Route("getAllUseres/{id}")]
        [HttpGet]
        public IHttpActionResult getAllUseres(int id)
        {
            return Ok(UseresBLL.getAllUseres());
        }
        [Route("GetStatus")]
        [HttpPost]
        public IHttpActionResult GetStatus([FromBody] UseresE u)
        {
            return Ok(UseresBLL.GetStatus(u.email, u.password));
        }
    }
}

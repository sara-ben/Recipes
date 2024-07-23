using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Bll;
using Server.Models;

namespace Server.Controllers
{
    [RoutePrefix("api/Files")]
    public class FilesController : ApiController
    {


        [Route("SaveFileByBase64")]
        [HttpPost]
        public string SaveFileByBase64([FromBody] Document d)
        {

            String fileName = FileBll.SaveFileByBase64(d.Base64, d.FileName);
            return fileName;
        }





        [Route("GetBase64StringForDocument/{fileName}/{fileType}")]
        [HttpGet]
        public string GetBase64StringForDocument(string fileName, string fileType)
        {

            return FileBll.GetBase64StringForDocument(fileName, fileType);
        }

    }
}

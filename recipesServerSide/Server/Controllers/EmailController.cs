using System.Web.Http;
using System.Net.Mail;
using System;
using Entities;
using System.Collections.Generic;
namespace Server.Controllers
{
    [RoutePrefix("api/Email")]
    public class EmailController : ApiController
    {
        [Route("sendNewEmail")]
        [HttpPost]
        public IHttpActionResult sendNewEmail([FromBody] EmailE email)
        {

            try
            {

                email.emailsList.ForEach((e) =>
                {
                    if (e != null && e != "")
                    {
                        MailMessage mail = new MailMessage();
                        SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                        mail.From = new MailAddress("recipesandm@gmail.com");
                        mail.To.Add(e);
                        mail.Subject = (email.subject);
                        mail.Body = (email.content);

                        SmtpServer.Port = 587;
                        SmtpServer.Credentials = new System.Net.NetworkCredential("recipesandm@gmail.com", "saramor123");
                        SmtpServer.EnableSsl = true;

                        SmtpServer.Send(mail);
                    }
                });
                return Ok("send mail");
            }
            catch (Exception ex)
            {
                return Ok(ex.ToString());
            }


        }
    }
}

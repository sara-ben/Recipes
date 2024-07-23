using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bll
{
 public   class FileBll
    {
        public static string SaveFileByBase64(string base64File, string fileName, string folderPath = "")
        {
            try
            {
                if (base64File.IndexOf(";base64,") != -1)
                {
                    // Create a new folder, if necessary.
                    if (!Directory.Exists(@AppDomain.CurrentDomain.BaseDirectory))
                        Directory.CreateDirectory(@AppDomain.CurrentDomain.BaseDirectory + folderPath);

                    if (fileName == null || fileName == "")
                        fileName = Guid.NewGuid() + "." + base64File.Substring(base64File.IndexOf('/') + 1, base64File.IndexOf(';') - (base64File.IndexOf('/') + 1));
                    else
                    {
                        int index = 1;
                        string newFilename = fileName;
                        while (File.Exists(@AppDomain.CurrentDomain.BaseDirectory + "pictures\\" + newFilename))
                        {
                            newFilename = fileName.Split('.')[0] + "(" + index + ")" + (fileName.Split('.').Length > 1 ? "." + fileName.Split('.')[1] : "");
                            index++;
                        }
                        fileName = newFilename;
                    }

                    string sPath = AppDomain.CurrentDomain.BaseDirectory + "pictures\\" + fileName;
                    byte[] array = Convert.FromBase64String(base64File.Substring(base64File.IndexOf(",") + 1));
                    File.WriteAllBytes(sPath, array);

                    return fileName;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception exception)
            {
                return null;
            }
        }
        public static string GetBase64StringForDocument(string documentName, string fileType)
        {
            string documentPath = @AppDomain.CurrentDomain.BaseDirectory + "pictures\\" + documentName + "." + fileType;

            byte[] imageBytes = System.IO.File.ReadAllBytes(documentPath);
            string base64String = Convert.ToBase64String(imageBytes);
            return base64String;

        }

    }
}

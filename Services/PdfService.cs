using Microsoft.AspNetCore.Http;
using PdfSharp.Pdf;
using PdfSharp.Pdf.IO;

namespace Services
{
    public class PdfService
    {
        public async Task<byte[]> MergePdf(List<IFormFile> pdfs)
        {
            using (var targetDoc = new PdfDocument())
            {
                foreach (var pdf in pdfs)
                {

                    var file = pdf.OpenReadStream();
                    using (var pdfDoc = PdfReader.Open(file, PdfDocumentOpenMode.Import))
                    {
                        for (var i = 0; i < pdfDoc.PageCount; i++)
                            targetDoc.AddPage(pdfDoc.Pages[i]);
                    }
                }
                using (var stream = new MemoryStream())
                {
                    targetDoc.Save(stream, false);
                    return stream.ToArray();
                }
            }
        }
    }
    
}
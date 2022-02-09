﻿using Microsoft.AspNetCore.Http;
using PdfMergerApi.Models;
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

        public async Task<byte[]> SplitPdf(IEnumerable<SplitFile> ranges, IFormFile pdf )
        {
            using (var targetDoc = new PdfDocument())
            {
                var file = pdf.OpenReadStream();
                using (var pdfDoc = PdfReader.Open(file, PdfDocumentOpenMode.Import))
                {
                    foreach (var range in ranges)
                    {
                        range.splitStart = range.splitStart - 1;
                        range.splitEnd = range.splitEnd - 1;

                        for (int i = range.splitStart; i <= range.splitEnd; i++)
                        {
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
    
}
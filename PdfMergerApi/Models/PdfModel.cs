using Microsoft.AspNetCore.Http;

namespace PdfMergerApi.Models
{
    public class PdfModel
    {
        public string? endFileName { get; set; }
        public List<IFormFile> pdfs { get; set; }
    }
}

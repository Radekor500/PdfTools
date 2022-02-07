using Microsoft.AspNetCore.Mvc;
using PdfMergerApi.Models;
using Services;

namespace PdfMergerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PdfController : ControllerBase
    {
        private readonly PdfService _pdfService;

        public PdfController(PdfService pdfService)
        {
            _pdfService = pdfService;
        }

        [HttpPost("merge")]

        public async Task<IActionResult> MergePdf([FromForm] PdfModel pdf)
        {
            
            try
            {
                var result = await _pdfService.MergePdf(pdf.pdfs);
                var fileName = pdf.endFileName != null ? pdf.endFileName + "pdf" : "merged.pdf";
                return File(result, "application/pdf", fileName);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

      
    }

}

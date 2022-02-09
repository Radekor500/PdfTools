using Microsoft.AspNetCore.Mvc;
using PdfMergerApi.Binders;

namespace PdfMergerApi.Models
{
    //public class SplitFileModel
    //{
    //    //public int splitStart;
    //    //public int splitEnd;

    //    public IFormFile formFile { get; set; }

    //    [ModelBinder(BinderType = typeof(FormDataJsonBinder))]
    //    public SplitFile ranges { get; set; }
    //}

    public class SplitFile
    {
        public int splitStart { get; set; }
        public int splitEnd { get; set; }
    }
}

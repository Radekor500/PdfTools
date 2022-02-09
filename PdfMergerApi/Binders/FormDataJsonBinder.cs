using System;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace PdfMergerApi.Binders
{
    //public class FormDataJsonBinder : IModelBinder

    //{

    //    private readonly ILogger<FormDataJsonBinder> _logger;


    //    public FormDataJsonBinder(ILogger<FormDataJsonBinder> logger)

    //    {

    //        _logger = logger;

    //    }


    //    public Task BindModelAsync(ModelBindingContext bindingContext)

    //    {

    //        if (bindingContext == null)

    //        {

    //            throw new ArgumentNullException(nameof(bindingContext));

    //        }


    //        var modelName = bindingContext.ModelName;


    //        var valueProviderResult = bindingContext.ValueProvider.GetValue(modelName);


    //        if (valueProviderResult == ValueProviderResult.None)

    //        {

    //            return Task.CompletedTask;

    //        }


    //        bindingContext.ModelState.SetModelValue(modelName, valueProviderResult);


    //        var value = valueProviderResult.FirstValue;


    //        if (string.IsNullOrEmpty(value))

    //        {

    //            return Task.CompletedTask;

    //        }


    //        try

    //        {

    //            var result = JsonSerializer.Deserialize(value, bindingContext.ModelType);

    //            bindingContext.Result = ModelBindingResult.Success(result);

    //        }

    //        catch (Exception ex)

    //        {

    //            _logger.LogError(ex, ex.Message);

    //            bindingContext.Result = ModelBindingResult.Failed();

    //        }


    //        return Task.CompletedTask;

    //    }

    //}

    public class JsonModelBinder : IModelBinder
    {
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            if (bindingContext == null)
            {
                throw new ArgumentNullException(nameof(bindingContext));
            }

            // Check the value sent in
            var valueProviderResult = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
            if (valueProviderResult != ValueProviderResult.None)
            {
                bindingContext.ModelState.SetModelValue(bindingContext.ModelName, valueProviderResult);

                // Attempt to convert the input value
                var valueAsString = valueProviderResult.FirstValue;
                var result = Newtonsoft.Json.JsonConvert.DeserializeObject(valueAsString, bindingContext.ModelType);
                if (result != null)
                {
                    bindingContext.Result = ModelBindingResult.Success(result);
                    return Task.CompletedTask;
                }
            }

            return Task.CompletedTask;
        }
    }
}

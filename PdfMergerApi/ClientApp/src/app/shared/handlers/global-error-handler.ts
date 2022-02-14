import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { ErrorService } from "src/app/services/error.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);


    let message;
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = errorService.getServerErrorMessage(error);
      alert(message);
      //stackTrace = errorService.getServerErrorStackTrace(error);
     //notifier.showError(message);
    } else {
      // Client Error
      message = errorService.getClientErrorMessage(error);
      alert(message);
      //notifier.showError(message);
    }
    // Always log errors
    //logger.logError(message, stackTrace);
    console.error(error);
  }
}